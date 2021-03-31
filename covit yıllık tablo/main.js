var example = echarts.init(document.getElementById('chart'));

var covidVerileri = [];
var olumSayilari =[];
var gunler = [];
$.getJSON("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json",function (covidData)    {
    var dun = moment().subtract(1, "days").format("YYYY/MM/DD");
    gunler.push(getDates("2020/03/11", dun));
    
   
    $.each(gunler[0], function (index, value) {
      covidVerileri.push(covidData[gunler[0][index]].patients);
      olumSayilari.push(covidData[gunler[0][index]].deaths);
    });
    //console.log(covidVerileri)
    var option = { backgroundColor: '#6495ED',
    tooltip: { //提示框组件
      trigger: 'axis',
      formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
      axisPointer: {
        type: 'shadow',
        label: {
          backgroundColor: '#A9A9A9'
        }
      },
      textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontFamily: '微软雅黑',
        fontSize: 12,
      }
    },
      title: {
        text: "examples"
      },
      tooltip:{
        show:true
      },
            legend:{
     data:["hasta","olum"]
      },
      xAxis: [
        {
          type: "category",
          data: gunler[0]
        }
      ],
      yAxis: [
        {
          type: "value",
          max:6000,
          interval:200
        }
      ],
      grid: {
        show: true,
        containLabel: true
      },
      series: [
        {
          type: "bar",
          name:"hasta",
          data: covidVerileri
        },
        {
          type: "bar",
          name:"olum",
          data: olumSayilari
        }
      ]
    };
    example.setOption(option);
  }
);



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

