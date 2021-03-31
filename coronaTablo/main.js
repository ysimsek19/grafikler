var myChart = echarts.init(document.getElementById('corona'));

const unitSize = 32
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

let trumpData = [{ "date": "2020-01-21", "tag": "0", "message": "Ülkemizde ilk Corona19 vakası görülmüştür.", }, { "date": "2020-01-30", "tag": "0", "message": "We think we have it very well under control.", "translation": "我们认为我们已经很好地控制住了局势。" }, { "date": "2020-02-10", "tag": "0", "message": "You know in April, supposedly it dies with a hotter weather.", "translation": "到了四月天气转热，病毒应该就会被杀死。" }, { "date": "2020-02-14", "tag": "0", "message": "When it gets warm, historically that has been able to kill the virus.", "translation": "据历史事实判断，气温转暖就能杀死病毒。" }, { "date": "2020-02-25", "tag": "0", "message": "People are getting better. They're all getting better.", "translation": "病患的情况都在好转，他们都在逐渐恢复。" }, { "date": "2020-02-26", "tag": "0", "message": "And again, when you have 15 people, and the 15th, within a couple of days, it's going to be down to close to zero.", "translation": "数天内，新增病例数就会降至零。" }, { "date": "2020-02-27", "tag": "0", "message": "It's going to disappear one day. It's like a miracle. It will disappear.", "translation": "有朝一日病毒会消失，奇迹般地它就会消失。" }, { "date": "2020-03-02", "tag": "1", "message": "They're gonna have vaccines, I think relatively soon.", "translation": "疫苗很快就会问世。" }, { "date": "2020-03-03", "tag": "1", "message": "Not only the vaccines but the therapies. Therapies is sort of another word for cure.", "translation": "不仅有疫苗还有治疗对策，治疗对策也就是治疗药物的意思。" }, { "date": "2020-03-06", "tag": "1", "message": "You're talking about very small numbers in the United States. The numbers are lower than just about anybody.", "translation": "美国的新冠病例数很少，美国确诊数比几乎任何国家都少。" }, { "date": "2020-03-09", "tag": "1", "message": "This blindsided the world. And I think we've handled it very, very well.", "translation": "全世界都被蒙蔽了。我认为我们已经处理得非常非常好了。" }, { "date": "2020-03-10", "tag": "1", "message": "It's really working out. And a lot of good things are gonna happen.", "translation": "我们的策略很有效果，许多好事都会发生。" }, { "date": "2020-03-11", "tag": "1", "message": "And we are responding with great speed and professionalism.", "translation": "我们正以极快的速度和极高的专业水准应对疫情。" }, { "date": "2020-03-15", "tag": "1", "message": "It'd all be great. We're gonna be so good.", "translation": "一切都很棒，我们会变得非常好。" }, { "date": "2020-03-16", "tag": "2", "message": "Just came up, but we came up so suddenly.", "translation": "我们的确诊人数上升得很突然。" }, { "date": "2020-03-17", "tag": "2", "message": "This is a pandemic. I felt it was a pandemic long before it was called a pandemic. ", "translation": "这是全球大流行，在疫情被称为大流行之前我就觉得它是大流行。" }, { "date": "2020-03-19", "tag": "2", "message": "He’s worked, like, probably as hard or harder than anybody. Other than maybe Mike Pence — or me.", "translation": "他和大家一样辛苦，甚至比任何人都要辛苦。除了彭斯，或者我。" }, { "date": "2020-03-30", "tag": "2", "message": " Where are the masks going? Are they going out the backdoor?", "translation": "这些口罩都去哪了，是不是被人从医院偷走了呢？" }, { "date": "2020-04-04", "tag": "2", "message": "The Obama administration made a decision on testing that turned out to be very detrimental to what we’re doing.", "translation": "奥巴马政府曾就检测做出决定，事实证明，这个决定对我们正在做的事非常不利。" }, { "date": "2020-04-07", "tag": "2", "message": "But we want to look into it — World Health Organization — because they really are — they called it wrong.  ", "translation": "但是我们想调查一下-世界卫生组织-因为它们确实是说错了，他们说错了。" }, { "date": "2020-04-13", "tag": "2", "message": "We did all this work, but when you read the phony stories, you—nobody—nobody acknowledge this.", "translation": "这些工作都是我们做的，但是你们去看看那些假新闻，没有一个人承认这些。" }, { "date": "2020-04-20", "tag": "2", "message": "And is there a way we can do something like that, by injection inside or almost a cleaning.", "translation": "我们可不可以把消毒液注射到体内，或者来个大清洗。" }];

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





