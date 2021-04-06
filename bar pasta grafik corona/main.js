var myChart = echarts.init(document.getElementById('pasta'));


$.getJSON(
    "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json",
    function (covidData) {
      
        
        var covidVerileri = [];
        var hastaSayisi=[];
        var olumSayilari =[];
        var iyilesen=[];
        var gunler = [];
      var dun = moment().subtract(1, "days").format("YYYY/MM/DD");
      gunler.push(getDates("2020/03/11", dun));
  
      $.each(gunler[0], function (index, value) {
        covidVerileri.push(covidData[gunler[0][index]].critical);
        hastaSayisi.push(covidData[gunler[0][index]].patients);
        olumSayilari.push(covidData[gunler[0][index]].deaths);
        iyilesen.push(covidData[gunler[0][index]].recovered);
      });

      

        option = {
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['product', gunler[0]],
                    ['Hasta sayısı', covidVerileri],
                    ['Vaka Sayısı', hastaSayisi],
                    ['Ölüm Sayiları', olumSayilari],
                    ['İyileşen', iyilesen]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {gridIndex: 0},
            grid: {top: '55%'},
            series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
                {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
                {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
                {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    emphasis: {focus: 'data'},
                    label: {
                        formatter: '{b}: {@2012} ({d}%)'
                    },
                    encode: {
                        itemName: 'product',
                        value: '2012',
                        tooltip: '2012'
                    }
                }
            ]
        };
    
        myChart.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });
    
        myChart.setOption(option);
    
    



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
})