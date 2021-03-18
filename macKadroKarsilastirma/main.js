var myChart = echarts.init(document.getElementById('kadro'));

var chart_title = '行业';
//图表X轴数据
var Xdata = [ "Maç Sayısı", "11de başlama sayısı", "Sarı Kart", "Kırmızı Kart", "Gol", "Asist", "Pas", "Hava Topu","Faul", "Top Çalma"];

//图表项目
var fp_key = ['FENERBAHÇE', 'BEŞİKTAŞ'];
var fp_coler = ['#4A65EA','rgba(241, 109, 115, 1)', '#4AC9E9',  '#258df6', '#f5814b', '#6fce7d'];
//图表项目数据
var fp_nan = {
    1: [22,27,2,0,0,0,75.2,0.3,5,6.47],
    2: [511, 315, 139, 375, 204, 352, 163, 258, 385, 209,],
    3: [527, 210, 328, 292, 241, 110, 130, 185, 392, 392,],
    4: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250,],
    5: [580, 128, 255, 254, 313, 143, 360, 343, 338, 163,],
    6: [521, 388, 233, 309, 133, 308, 297, 283, 349, 273,],
    7: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250,],
    8: [580, 129, 173, 101, 310, 393, 386, 296, 366, 268,],
    9: [563, 396, 388, 108, 325, 120, 180, 292, 200, 309,],
    10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250],
    11: [29,26,0,0,16,5,76.4,1.1,10,7.22],
    
};

var fp_val = {
    1: [20,20,1,1,0,0,66.7,0.4,5,6.74],
    2: [25,25,7,0,2,4,77,0.5,1.4,45,2.1],
    3: [29,27,5,0,
    
    ],
    4: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250,],
    5: [580, 128, 255, 254, 313, 143, 360, 343, 338, 163,],
    6: [521, 388, 233, 309, 133, 308, 297, 283, 349, 273,],
    7: [500, 350, 300, 250, 200, 150, 100, 150, 200, 250,],
    8: [580, 129, 173, 101, 310, 393, 386, 296, 366, 268,],
    9: [563, 396, 388, 108, 325, 120, 180, 292, 200, 309,],
    10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250],
    11: [26,12,2,0,5,0,77.5,1.9,20,0.2],
    
};
//图表月份
var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ];
 option = {
    baseOption: {
        backgroundColor:"#061740",
        timeline: {
            show: true,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function (params) {
                    return params.name + '. Oyuncu';
                }
            },
            autoPlay: true,
            currentIndex: 10,
            playInterval: 2000,
            label: {
                normal: {
                    show: true,
                    color: '#20dbfd',
                    interval: 'auto',
                    formatter: function (params) {
                        return params
                    }
                },
            },
            lineStyle: {
                show: true,
                color: '#20dbfd'
            },
            itemStyle: {
                show: true,
                color: '#20dbfd'
            },
            
            controlStyle: {
                show: true,
                color: '#20dbfd',
                borderColor: '#20dbfd'
            },
            left: "0",
            right: "0",
            bottom: '0',
            padding: [15, 0],
            data: timeLineData,
        },
        title: {
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
        },
        legend: {
            data: fp_key,
            top: 8,
            icon:'image:https://www.google.com/search?q=fenerbah%C3%A7e+png&sxsrf=ALeKk02Um0dQIkMUIV2qXYAs7zI0bkLe9g:1616058838248&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiMlvWnwLnvAhWDyoUKHUkNCR8Q_AUoAXoECAEQAw&biw=1920&bih=880#imgrc=S6Jsr7mmFMmLYM',
            right: '43%',
            textStyle: {
                color: '#fff',
            },
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            //formatter: '{b}<br/>{a}: {c}人',
            axisPointer: {
                type: 'shadow',
            }
        },
        grid: [{
            show: false,
            left: "2%",
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '43%',
        }, {
            show: false,
            left: '50.5%',
            top: 80,
            bottom: 60,
            width: '14%',
        }, {
            show: false,
            right: "2%",
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '43%',
        },],

        xAxis: [
            {
                type: 'value',
                triggerEvent: true,
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#B2B2B2',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1F2022',
                        width: 1,
                        type: 'solid',
                    },
                },
            },
            {
                gridIndex: 1,
                show: false,
            },
            {
                gridIndex: 2,
                type: 'value',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#B2B2B2',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1F2022',
                        width: 1,
                        type: 'solid',
                    },
                },
            }
        ],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },

            },
            data: Xdata,
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: Xdata.map(function (value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: Xdata,
        },],
        series: [],

    },
    options: [],
};
for (var i = 0; i < timeLineData.length; i++) {
    
    option.options.push({
        title: {
            text: timeLineData[i] + '. Oyuncu',
        },
        series: [
            {
                name: fp_key[0],
                type: 'bar',
                stack: 'one',
                barGap: 15,
                barWidth: 15,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            color: '#fff',

                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: true,
                        position: 'inside',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                
                
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return fp_coler[0]
                        },
                        opacity: 1,

                    },
                    emphasis: {
                        opacity: 1,
                    },
                },

                data: fp_nan[timeLineData[i]],
            },
            {
                name: fp_key[1],
                stack: 'right',
                type: 'bar',
                barGap: 15,
                barWidth: 15,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        },
                    },
                    emphasis: {
                        show: true,
                        position: 'inside',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
               
           
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return fp_coler[2]
                        },
                        opacity: 1,

                    },
                    emphasis: {
                        opacity: 1,
                    },
                },
                data: fp_val[timeLineData[i]],
            },
        ]
    });
}


myChart.setOption(option);