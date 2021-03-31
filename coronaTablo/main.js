var myChart = echarts.init(document.getElementById('corona'));

const unitSize = 50
const titleHeight = 100
const pic0 = "image/fahrettinAçıklama-removebg-preview.png"
const pic1 ="image/fahrettinMutlu-removebg-preview.png"
const pic2 = "image/fahreddinüzgün-removebg-preview.png"
const picArr = [pic0, pic1, pic2]
const colors = ["#DC364C", "#D4587A", "#E6B6C2", "#CCD3D9"]
const deathColors = ["#000", "#8B0000", "#632A7E", "#A13E97", "#D3B7D8", "#FFF"]
const legendTop = [titleHeight - 10, titleHeight + unitSize * 2.6, titleHeight + unitSize * 5.2]
const tagNames = ["İlkler", "Güzel Haberler", "Gidişad"]
const legendNames = ["AÇIKLAMALAR", "burası", "şurası"]

let trumpData = [{ "date": "2020-01-21", "tag": "2", "message": "Ülkemizde ilk Corona19 vakası görülmüştür.", }]
//let USA_COVID_19 = [{ "date": "2020-01-21", "confirmed": 1, "recovered": 0, "deaths": 0 }]


$.getJSON(
  "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json",
  function (covidData) {
    var USA_COVID_19 = [];

    var gunler = [];
    var dun = moment().subtract(1, "days").format("YYYY/MM/DD");
    gunler.push(getDates("2020/03/11", dun));

    $.each(gunler[0], function (index, value) {
      USA_COVID_19.push({ "date": moment(gunler[0][index], 'DD-MM-YYYY').format('YYYY-MM-DD'), "confirmed": covidData[gunler[0][index]].patients, "recovered": covidData[gunler[0][index]].recovered, "deaths": covidData[gunler[0][index]].deaths });

    });
    console.log(USA_COVID_19)
    const maxDeath = parseInt(USA_COVID_19[USA_COVID_19.length - 1].deaths)
    function getDates(startDate, stopDate) {
      var dateArray = [];
      var currentDate = moment(startDate);
      var stopDate = moment(stopDate);
      while (currentDate <= stopDate) {
        dateArray.push(moment(currentDate).format("DD/MM/YYYY"));
        currentDate = moment(currentDate).add(1, "days");
      }
      return dateArray;
    }
    function getDeathColor(val) {
      if (!val) return deathColors[deathColors.length - 1]
      let deathColorIdx = val > 100 ? Math.log10(val) : deathColors[deathColors.length - 2]
      deathColorIdx = deathColors.length - 2 - Math.floor(deathColorIdx)
      return deathColors[deathColorIdx]
    }
    function dateInNumber(date) {
      return parseInt(date.split("-").join(""))
    }
    let mergeData = []
    let j = 0
    let trupmD = dateInNumber(trumpData[0].date)
    let trumpLen = trumpData.length
    USA_COVID_19.forEach((d, i) => {
      let row = [d.date, i, null, parseInt(d.deaths), parseInt(d.confirmed)]
      const date = dateInNumber(d.date)
      if (date >= trupmD && j < trumpLen) {
        row[2] = trumpData[j]
        j++
        if (j < trumpLen) {
          trupmD = dateInNumber(trumpData[j].date)
        }
      }
      mergeData.push(row)
    })

    let scatterData = []
    for (
      idx = 0; idx < tagNames.length; idx++) {
      let richName = `chart${idx}`
      let data = mergeData.filter(d => d[2] && parseInt(d[2].tag) == idx)
      let rowData = {
        type: 'effectScatter',
        coordinateSystem: 'calendar',
        name: tagNames[idx],
        data: data.map(d => [d[0], d[3]]),
        tooltip: {
          show: false
        },
        emphasis: {
          itemStyle: {
            color: "rgba(255,255,255,0.5)"
          }
        },
        symbolSize: 20,
        label: {
          show: true,
          formatter: `{${richName}|}`,
          rich: {}
        }
      }
      rowData.label.rich[richName] = {
        width: unitSize,
        height: unitSize,
        align: "center",
        verticalAlign: "top",
        backgroundColor: {
          image: picArr[idx]
        }
      }
      scatterData.push(rowData)
    }

    function renderItem(params, api) {
      return {
        type: 'text',
        style: {
          fill: '#000',
          text: legendNames[api.value(0)],
          x: 30,
          y: legendTop[api.value(0)] - 10,
          textAlign: 'start',
          textVerticalAlign: 'middle',
          font: `bold 14px "Microsoft YaHei"`
        },
      }
    }

    option = {
      title: {
        text: "1-TÜRKİYE BİR YILLIK COVİT19 TABLOSU",
        subtext:
          `Geri bırakmış olduğumuz süre zarfında yapılan açıklama ve veriler`
      },
      legend: {
        data: tagNames.map((d, idx) => ({
          name: d,
          icon: "image://" + picArr[idx]
        })),
        orient: 'vritical',
        itemHeight: 30,
        itemWidth: 30,
        textStyle: {
          height: 40
        },
        left: 0,
        top: legendTop[0]
      },
      tooltip: {
        show: true,
        textStyle: {
          width: 100
        },
        formatter: p => {
          let deathColor = getDeathColor(p.data[3])
          let backColorStr = `background-color:${p.data[4] > 10000 ? "#CACACA" : "#000"};`
          let backColorStr1 = `background-color:${p.data[3] > 100 ? "#CACACA" : "#000"};`
          let resMsg = `${p.data[0]}<br/>
              Hasta Sayısı：<span style="color:${p.color};${backColorStr}">&nbsp&nbsp${p.data[4]}&nbsp&nbsp</span>，
              Vefat Sayısı：<span style="color:${deathColor};${backColorStr1}">&nbsp&nbsp${p.data[3]}&nbsp&nbsp</span>`
          const msg = p.data[2]
          if (!msg) {
            return resMsg
          }
          const msgContent = `<div style="width:350px;height:100px;display:flex;">
                <img width="80px" height="80px" src="${picArr[parseInt(msg.tag)]}">
                <div style="width:270px;height:100px;white-space:normal;word-wrap:break-word;word-break:break-all;">
                  <span>${msg.message}</span><br/>
                  <span>${msg.translation}</span>
                </div>
              <div>`
          return resMsg + "<br/>" + msgContent
        }
      },
      visualMap: [{
        show: true,
        color: colors,
        pieces: [
          { min: 1000000 },
          { min: 10000, max: 1000000 },
          { min: 100, max: 10000 },
          { max: 100 }
        ],
        left: 0,
        top: legendTop[2],
        seriesIndex: 0
      },
      {
        show: true,
        color: deathColors,
        pieces: [
          { min: 10000 },
          { min: 1000, max: 10000 },
          { min: 100, max: 1000 },
          { min: 1, max: 100 },
          { value: 0, label: '0' },
        ],
        left: 0,
        top: legendTop[1],
        seriesIndex: [1, 2, 3, 4],
      }],
      calendar: {
        range: ["2020-03-11", "2021-03-30"],
        cellSize: unitSize,
        top: titleHeight,
        left: 180,
        yearLabel: {
          margin: 40,
          color: "rgba(130,134,112,0.8)",
        },
        dayLabel: {
          color: "#778633",
          fontWeight: "bold"
        },
        monthLabel: {
          color: "#778633",
          fontWeight: "bold"
        }
      },
      series: [
        {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: mergeData,
          label: {
            show: true,
            formatter: p => p.data[4]
          }
        },
        {
          type: 'scatter',
          coordinateSystem: 'calendar',
          data: mergeData.filter(d => d[2] == null).map(d => [d[0], d[3]]),
          symbolOffset: [unitSize / 2 - 8, - unitSize / 2 + 8],
          symbol: "path://M0 0l10 0-0 10z",
          tooltip: {
            show: false
          },
        },
        ...scatterData,
        {
          name: "legendName",
          data: [0, 1, 2],
          type: 'custom',
          coordinateSystem: 'calendar',
          slient: true,
          renderItem: renderItem
        }
      ],

    };
    myChart.setOption(option);

  }

);





