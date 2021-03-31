var example = echarts.init(document.getElementById('grafik'));

var covidVerileri = [];
var olumSayilari =[]
var gunler = [];
$.getJSON("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json",function (covidData)    {
    var dun = moment().subtract(1, "days").format("YYYY/MM/DD");
    gunler.push(getDates("2020/03/11", dun));
    
   
    $.each(gunler[0], function (index, value) {
      covidVerileri.push(covidData[gunler[0][index]].patients);
      olumSayilari.push(covidData[gunler[0][index]].deaths);
    });



    var option = {
        backgroundColor: '#091C3D',
        tooltip: { 
            trigger: 'axis',
            formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            tooltip:{
                show:true
              },
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '10%',
            top:'40%',
            show: true,
        
            containLabel: true,
        },
        legend: {
            right:'10%',
            top:'30%',
            itemGap: 16,
            itemWidth: 18,
            itemHeight: 10,
            data:["olum","hasta"],
            textStyle: {
                color: '#a8aab0',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,            
            }
        },
        xAxis: [
            {
                type: 'category',
            
                data:gunler[0],
                axisLabel: { 
                    textStyle: {
                        color: '#078ceb',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    },
                    rotate:50,
                },
                axisTick:{
                    show: false,
                },
                axisLine:{
                    lineStyle:{
                        color:'#fff',
                        opacity:0.2
                    }
                },
                splitLine: { 
                    show: false,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitNumber: 5,
                axisLabel: {
                    textStyle: {
                        color: '#a8aab0',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisLine:{
                    show: false
                },
                axisTick:{
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#fff'],
                        opacity:0.06
                    }
                }
    
            }
        ],
        series : [
            {
                name:'hasta',
                type:'line',
                data:covidVerileri,
                barWidth: 10,
                barGap:0,
              itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5768EF'
                        }, {
                            offset: 1,
                            color: '#5768EF'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
            },
            {
                name:'olum',
                type:'bar',
                data:olumSayilari,
                barWidth: 10,
                barGap:0,
                 itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#69CBF2'
                        }, {
                            offset: 1,
                            color: '#69CBF2'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
            }
        ]
    };
example.setOption(option);


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