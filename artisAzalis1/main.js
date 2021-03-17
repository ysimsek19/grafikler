var myChart = echarts.init(document.getElementById('artis'));

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
        //data: ['Direct',  'Search Engine']
        data: ['Yüz binde Vaka Sayısı(27 Şubat-5Mart)',  'Artis']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['SAMSUN', 'KİLİS', 'BALIKESİR', 'İSTANBUL', 'YALOVA', 'IĞDIR', 'KONYA' , 'KASTAMONU', 'KAYSERİ', 'ÇANAKKALE']
    },
    series: [
        {
            name: 'Yüz binde Vaka Sayısı(27 Şubat-5Mart)',
            type: 'bar',
            color:'blue',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [348.36, 163.17, 172.46, 111.57, 134.76, 24.84, 150.98, 65.63, 97.72, 107.29]
        },
     
        {
            name: 'Artis',
            type: 'bar',
            color:'orange',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [110.17, 92.45, 85.14, 66.68, 65.57, 56.13, 52.93, 52.60, 45.23, 42.47]
        }
    ]
};
myChart.setOption(option);



var myChart = echarts.init(document.getElementById('azalis'));

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
        data: ['Yüz binde Vaka Sayısı(27 Şubat-5Mart)',  'Azalis']
       // data: ['Yüz binde Vaka Sayısı(27 Şubat-5Mart)',  ' Artış']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['SAKARYA', 'ORDU', 'AMASYA', 'RİZE', 'BURDUR', 'GÜMÜŞHANE', 'BİTLİS' , 'BARTIN', 'SİİRT', 'ARTVİN']
    },
    series: [
        {
            name: 'Yüz binde Vaka Sayısı(27 Şubat-5Mart)',
            type: 'bar',
            color:'blue',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
               
            },
            data: [90.15, 248.62, 163.64, 188.18, 86.49, 137.61, 15.95, 62.82, 2.11, 100.88]
        },
     
        {
            name: 'Azalis',
            type: 'bar',
            color:'orange',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                
            },
            data: [49.78, 31.65, 20.27, 20.03, 18.72, 14.12, 13.11, 13.07, 9.97, 8.26]
        }
    ]
};
myChart.setOption(option);