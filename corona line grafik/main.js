var myChart = echarts.init(document.getElementById('grafik'));


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
        title: {
            text: 'Corona taplo Line Grafik'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Pozitif(cases)', 'Hasta(patients)', 'İyileşen(recovere)', 'Vefat(deaths)']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: gunler[0]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Pozitif(cases)',
                type: 'line',
               
                data: covidVerileri
            },
            {
                name: 'Hasta(patients)',
                type: 'line',
               
                data: hastaSayisi
            },
            
            {
                name: 'İyileşen(recovere)',
                type: 'line',
               
                data: iyilesen
            },
            {
                name: 'Vefat(deaths)',
                type: 'line',
               
                data: olumSayilari
            }
        ]
    };



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