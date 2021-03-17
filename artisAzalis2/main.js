var myChart = echarts.init(document.getElementById('artis1'));

var path = 'path://M214,1079l8-6h16l8,6-8,6H222Z';
var zzx1 = ["158bin386", "16749", "874", "71", "17893",];
var wgx1 = ["167526", "18912", "869", "73", "17161", ];
var option = {
   backgroundColor:{image:"/sblogosvg.png"},
    



    
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(e){
            if(e.length>1){
                var S=e[1].data-e[0].data;
                return e[0].axisValue+":<br>16-17 Mart arasında ki Covit19 farkı <br>="+S;
            }else if(e.length=1){
                return e[0].axisValue+":<br>"+e[0].seriesName+"="+e[0].data;
            }

        }
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '4%',
        top:'16%',
        containLabel: true
    },
    legend: {
        data: ['16Mart2021', '17mart2021'],
        left: 220,
        top:1,
        textStyle: {
            color:"#00ffff",
            fontSize:14
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
        color: '#242424'
    },
    xAxis: {
        type: 'category',
        data: ['Test Sayısı','Vaka Sayısı','Hasta Sayısı','Vefat Sayısı','İyileşen Hasta Sayısı',],
        axisLine: {
            lineStyle: {
                show: true,
                lineStyle: {
                    color: '#6A989E',
                }
            }
        },
        axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: '#fff',// x轴颜色
                fontWeight: 'normal',
                fontSize: '14',
                lineHeight: 22
            }
        },
        // splitLine:{
        //     show:true,
        //     lineStyle: {
        //         type: 'dashed',
        //         color: 'rgba(135,140,147,0.8)'
        //     }
        // },
    },

    yAxis: {


        type: 'value',
        name: "                                                                           SAĞLIK BAKANLIĞI CORONA VERİLERİ",
        nameTextStyle: {
            color: '#ffffff'
        },
        axisLine: {
            show: false,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(135,140,147,0.8)'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(135,140,147,1)' //左侧显示线
            }
        },
        axisLabel: {
            formatter: '{value}',
            color: '#fff',
            fontSize: 14
        }
    },
    series: [
        {
        type: 'pictorialBar',
        symbol: path,
        symbolSize: [30, 8],
        symbolOffset: [-20, -4],
        symbolPosition: 'end',
        z: 12,
        color: "#3440FF",
        data: zzx1
    },
        {
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [20, -4],
            symbolPosition: 'end',
            z: 12,
            color: "#FF1155",
            data: wgx1
        },
        {
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [-20, 4],
            z: 12,
            color: "rgba(126,192,238,0.6)",
            data: zzx1
        },
        
        {
            name: '',
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [20, 4],
            color: "#FFC0CB",
            z: 12,
            data: wgx1
        },{
        name: '16Mart2021',
        type: 'bar',
        barWidth: '30',
        itemStyle: {
            normal: {
                opacity: .7,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'blue'
                }, {
                    offset: 1,
                    color: '#7EC0EE'
                }]),
                barBorderRadius: 0,
            },

        },
        label: {
            show: true,
            position: ['-18','-18'],
            color: '#00f8ff',
            fontSize: 12,
        },
        data: zzx1
    },
        {
            name: '17mart2021',
            type: 'bar',
            barWidth: '30',
            itemStyle: {
                normal: {
                    opacity: .7,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF2246'
                    }, {
                        offset: 1,
                        color: '#FFC0CB'

                    }]),
                    barBorderRadius: 0,
                }

            },
            label: {
                show: true,
                position: ['18','-18'],
                color: '#00f8ff',
                fontSize: 12,
            },
            data: wgx1
        },
    ]
};


myChart.setOption(option);