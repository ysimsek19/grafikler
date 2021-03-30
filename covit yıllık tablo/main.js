var example = echarts.init(document.getElementById('chart'));

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
    //console.log(covidVerileri)
    var option = {
      title: {
        text: "examples"
      },
      tooltip:{
        show:true
      },
            legend:{
     data:["olum","hasta"]
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
          max:1500,
          interval:100
        }
      ],
      grid: {
        show: true,
        containLabel: true
      },
      series: [
        {
          type: "bar",
          name:"olum",
          data: covidVerileri
        },
        {
          type: "bar",
          name:"hasta",
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

