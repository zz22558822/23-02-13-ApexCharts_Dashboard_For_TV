// 資料存放至 data
let data;
// 刷新的資料 以利用於比對
let dataNew;
// 設定刷新一次
let lapse = 7500;
// 資料存在的開關
let dataExist;

// --------------------(AXJX)--------------------

// 獲取資料 本地端 JSON檔案
function getData() {
    // 讀取本地之JSON檔 添加引數為當前時間達成檔案不重複的效果來杜絕快取
    fetch("./Data.json?version="+(new Date()).getTime())
    .then(response => {
        if (response.ok) {
            // 資料存在就為 1
            dataExist = 1
            document.querySelector('.notData').classList.add('no')
            return response.json();
        } else {
            // 資料不存在為 0
            dataExist = 0
        }
    })
    .then(function (jsondata) {
        if (dataExist) {
            data = jsondata

            // 渲染資料
            // renderData()

            // Demo用的更新資料數據
            upAllData()


            
        }else{
            document.querySelector('.notData').classList.remove('no')
        }
    })
}


// Demo用

// 版面配置
window.Apex = {
    chart: {
        foreColor: "#fff",
        toolbar: {
          show: false
        }
      },
}
// 數值與圖表種類
var today1 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'bar',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    dataLabels: {
        enabled: true, // 在 Bar 中間顯示數值
        style: {
            fontSize: '30px',
        }
    },
    series: [{
        // name: '數值',
        data: []
    }],
    plotOptions: {
        bar: {
            distributed: true, // 個別 bar 顏色調整開關
            borderRadius: 4,
            horizontal: true, // 水平條列
            colors: {
                backgroundBarColors: ["#40475D"] // 背景色
            }
        }
    },
    // 彩色標籤設置
    legend: {
        show: false,
        // fontSize: '40px',
        position: 'top', // 顯示的位置
    },
    // X軸的設定值
    xaxis: {
        categories: [],
        labels: {
            style: {
                // fontFamily: 'Times New Roman',
                fontSize: '1.3em'
            }
        }
    },
    // Y軸的設定值
    yaxis: {
        // show: false, // 是否顯示X軸名稱
        labels: {
            offsetY: 4, // Y軸字體偏移向下
            style: {
                fontSize: '1.5em'
            },
        }
    },
    // Bar 顏色
    colors: ["#17ead9","#fe5f55","#01FF70","#F2C94C"],
    // 漸變色尾段
    fill: {
        type: "gradient",
        gradient: {
            inverseColors: false,
            gradientToColors: ["#6078ea","#e42c64","#2ECC40","#F2994A"],
            gradient: {
                inverseColors: false,
                gradientToColors: ["#e42c64","#6078ea","#2ECC40","#F2994A"],
                type: 'horizontal', // 垂直漸層
            }
        }
    },
    noData: { // 加載中細部設定
        text: '加載中...',
        align: 'center', // 對齊位置
        offsetX: 20, // X軸偏移
        offsetY: -30, // Y軸偏移
        style: {
            fontSize: '30px',
        }
    }
}
var today2 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'donut',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    plotOptions: {
        // 調整圓餅圖大小
        // pie: {
        // customScale: 1
        // }
    },
    legend: {
        show: true, // 是否顯示
        fontSize: '20px',
        // floating: true, // 懸浮標籤開關
        offsetX: 35, // X軸偏移
        offsetY: -3, // Y軸偏移
    },
    series: [],  // 數值修改位置
    labels: [], // 標籤名稱修改位置
    responsive: [{
        breakpoint: 480,
        options:{
            legend: {
                position: 'bottom'
              }
        }
    }]
}
var today3 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'bar',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    dataLabels: {
        enabled: true, // 在 Bar 中間顯示數值
        style: {
            fontSize: '30px',
        }
    },
    series: [{
        // name: '數值',
        data: []
    }],
    plotOptions: {
        bar: {
            distributed: true, // 個別 bar 顏色調整開關
            borderRadius: 4,
            horizontal: false, // 水平條列
            colors: {
                backgroundBarColors: ["#40475D"] // 背景色
            }
        }
    },
    // 彩色標籤設置
    legend: {
        show: false,
        // fontSize: '40px',
        position: 'top', // 顯示的位置
    },
    // X軸的設定值
    xaxis: {
        categories: [],
        labels: {
            style: {
                // fontFamily: 'Times New Roman',
                fontSize: '1.3em'
            }
        }
    },
    // Y軸的設定值
    yaxis: {
        // show: false, // 是否顯示X軸名稱
        labels: {
            offsetY: 8, // Y軸字體偏移向下
            style: {
                fontSize: '1.5em'
            }
        }
    },
    // Bar 顏色
    colors: ["#fe5f55","#17ead9","#01FF70","#F2C94C"],
    // 漸變色尾段
    fill: {
        type: "gradient",
        gradient: {
            inverseColors: false,
            gradientToColors: ["#e42c64","#6078ea","#2ECC40","#F2994A"],
            type: 'vertical', // 垂直漸層
        }
    },
    noData: { // 加載中細部設定
        text: '加載中...',
        align: 'center', // 對齊位置
        offsetX: 20, // X軸偏移
        offsetY: -30, // Y軸偏移
        style: {
            fontSize: '30px',
        }
    }
}
var today4 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'donut',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    plotOptions: {
        // 調整圓餅圖大小
        // pie: {
        // customScale: 1
        // }
    },
    legend: {
        show: true, // 是否顯示
        fontSize: '20px',
        // floating: true, // 懸浮標籤開關
        offsetX: 35, // X軸偏移
        offsetY: -3, // Y軸偏移
    },
    series: [],  // 數值修改位置
    labels: [], // 標籤名稱修改位置
    responsive: [{
        breakpoint: 480,
        options:{
            legend: {
                position: 'bottom'
              }
        }
    }]
}
var today5 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'bar',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    dataLabels: {
        enabled: true, // 在 Bar 中間顯示數值
        style: {
            fontSize: '30px',
        }
    },
    series: [{
        // name: '數值',
        data: []
    }],
    plotOptions: {
        bar: {
            distributed: true, // 個別 bar 顏色調整開關
            borderRadius: 4,
            horizontal: false, // 水平條列
            colors: {
                backgroundBarColors: ["#40475D"] // 背景色
            }
        }
    },
    // 彩色標籤設置
    legend: {
        show: false,
        // fontSize: '40px',
        position: 'top', // 顯示的位置
    },
    // X軸的設定值
    xaxis: {
        categories: [],
        labels: {
            style: {
                // fontFamily: 'Times New Roman',
                fontSize: '1.3em'
            }
        }
    },
    // Y軸的設定值
    yaxis: {
        // show: false, // 是否顯示X軸名稱
        labels: {
            offsetY: 8, // Y軸字體偏移向下
            style: {
                fontSize: '1.5em'
            }
        }
    },
    // Bar 顏色
    colors: ["#fe5f55","#17ead9","#01FF70","#F2C94C"],
    // 漸變色尾段
    fill: {
        type: "gradient",
        gradient: {
            inverseColors: false,
            gradientToColors: ["#e42c64","#6078ea","#2ECC40","#F2994A"],
            type: 'vertical', // 垂直漸層
        }
    },
    noData: { // 加載中細部設定
        text: '加載中...',
        align: 'center', // 對齊位置
        offsetX: 20, // X軸偏移
        offsetY: -30, // Y軸偏移
        style: {
            fontSize: '30px',
        }
    }
}

var tomorrow1 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'bar',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    dataLabels: {
        enabled: true, // 在 Bar 中間顯示數值
        style: {
            fontSize: '30px',
        }
    },
    series: [{
        // name: '數值',
        data: []
    }],
    plotOptions: {
        bar: {
            distributed: true, // 個別 bar 顏色調整開關
            borderRadius: 4,
            horizontal: true, // 水平條列
            colors: {
                backgroundBarColors: ["#40475D"] // 背景色
            }
        }
    },
    // 彩色標籤設置
    legend: {
        show: false,
        // fontSize: '40px',
        position: 'top', // 顯示的位置
    },
    // X軸的設定值
    xaxis: {
        categories: [],
        labels: {
            style: {
                // fontFamily: 'Times New Roman',
                fontSize: '1.3em'
            }
        }
    },
    // Y軸的設定值
    yaxis: {
        // show: false, // 是否顯示X軸名稱
        labels: {
            offsetY: 4, // Y軸字體偏移向下
            style: {
                fontSize: '1.5em'
            },
        }
    },
    // Bar 顏色
    colors: ["#17ead9","#fe5f55","#01FF70","#F2C94C"],
    // 漸變色尾段
    fill: {
        type: "gradient",
        gradient: {
            inverseColors: false,
            gradientToColors: ["#6078ea","#e42c64","#2ECC40","#F2994A"],
            gradient: {
                inverseColors: false,
                gradientToColors: ["#e42c64","#6078ea","#2ECC40","#F2994A"],
                type: 'horizontal', // 垂直漸層
            }
        }
    },
    noData: { // 加載中細部設定
        text: '加載中...',
        align: 'center', // 對齊位置
        offsetX: 20, // X軸偏移
        offsetY: -30, // Y軸偏移
        style: {
            fontSize: '30px',
        }
    }
}
var tomorrow2 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'donut',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    plotOptions: {
        // 調整圓餅圖大小
        // pie: {
        // customScale: 1
        // }
    },
    // 
    legend: {
        show: true, // 是否顯示
        fontSize: '20px',
        // floating: true, // 懸浮標籤開關
        offsetX: 35, // X軸偏移
        offsetY: -3, // Y軸偏移
    },
    series: [],  // 數值修改位置
    labels: [], // 標籤名稱修改位置
    responsive: [{
        breakpoint: 480,
        options:{
            legend: {
                position: 'bottom'
              }
        }
    }]
}
var tomorrow3 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'donut',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    plotOptions: {
        // 調整圓餅圖大小
        // pie: {
        // customScale: 1
        // }
    },
    // 
    legend: {
        show: true, // 是否顯示
        fontSize: '20px',
        // floating: true, // 懸浮標籤開關
        offsetX: 35, // X軸偏移
        offsetY: -3, // Y軸偏移
    },
    series: [],  // 數值修改位置
    labels: [], // 標籤名稱修改位置
    responsive: [{
        breakpoint: 480,
        options:{
            legend: {
                position: 'bottom'
              }
        }
    }]
}
var yesterday1 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'bar',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    dataLabels: {
        enabled: true, // 在 Bar 中間顯示數值
        style: {
            fontSize: '30px',
        }
    },
    series: [{
        // name: '數值',
        data: []
    }],
    plotOptions: {
        bar: {
            distributed: true, // 個別 bar 顏色調整開關
            borderRadius: 4,
            horizontal: true, // 水平條列
            colors: {
                backgroundBarColors: ["#40475D"] // 背景色
            }
        }
    },
    // 彩色標籤設置
    legend: {
        show: false,
        // fontSize: '40px',
        position: 'top', // 顯示的位置
    },
    // X軸的設定值
    xaxis: {
        categories: [],
        labels: {
            style: {
                // fontFamily: 'Times New Roman',
                fontSize: '1.3em'
            }
        }
    },
    // Y軸的設定值
    yaxis: {
        // show: false, // 是否顯示X軸名稱
        labels: {
            offsetY: 4, // Y軸字體偏移向下
            style: {
                fontSize: '1.5em'
            },
        }
    },
    // Bar 顏色
    colors: ["#17ead9","#fe5f55","#01FF70","#F2C94C"],
    // 漸變色尾段
    fill: {
        type: "gradient",
        gradient: {
            inverseColors: false,
            gradientToColors: ["#6078ea","#e42c64","#2ECC40","#F2994A"],
            gradient: {
                inverseColors: false,
                gradientToColors: ["#e42c64","#6078ea","#2ECC40","#F2994A"],
                type: 'horizontal', // 垂直漸層
            }
        }
    },
    noData: { // 加載中細部設定
        text: '加載中...',
        align: 'center', // 對齊位置
        offsetX: 20, // X軸偏移
        offsetY: -30, // Y軸偏移
        style: {
            fontSize: '30px',
        }
    }
}
var yesterday2 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'donut',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    plotOptions: {
        // 調整圓餅圖大小
        // pie: {
        // customScale: 1
        // }
    },
    // 
    legend: {
        show: true, // 是否顯示
        fontSize: '20px',
        // floating: true, // 懸浮標籤開關
        offsetX: 35, // X軸偏移
        offsetY: -3, // Y軸偏移
    },
    series: [],  // 數值修改位置
    labels: [], // 標籤名稱修改位置
    responsive: [{
        breakpoint: 480,
        options:{
            legend: {
                position: 'bottom'
              }
        }
    }]
}
var yesterday3 = {
    chart: {
        width: '100%',
        height: '100%',
        type: 'donut',
        animations:{ // 動畫設置
            enabled: true,  // 是否啟用
            easing: 'easein',   // 動畫總類
            animateGradually: {
                enabled: true, // 逐一顯示動畫 並非全部一起
                // delay: 150, // 個別顯示的延遲時間
            },
        },
    },
    plotOptions: {
        // 調整圓餅圖大小
        // pie: {
        // customScale: 1
        // }
    },
    // 
    legend: {
        show: true, // 是否顯示
        fontSize: '20px',
        // floating: true, // 懸浮標籤開關
        offsetX: 35, // X軸偏移
        offsetY: -3, // Y軸偏移
    },
    series: [],  // 數值修改位置
    labels: [], // 標籤名稱修改位置
    responsive: [{
        breakpoint: 480,
        options:{
            legend: {
                position: 'bottom'
              }
        }
    }]
}

// 定義實體
var today1 = new ApexCharts(
    document.querySelector(".leftChart .today .todayBox-1 .today-1"),
    today1
);
var today2 = new ApexCharts(
    document.querySelector(".leftChart .today .todayBox-2 .today-2"),
    today2
);
var today3 = new ApexCharts(
    document.querySelector(".leftChart .today .todayBox-2 .today-3"),
    today3
);
var today4 = new ApexCharts(
    document.querySelector(".leftChart .today .todayBox-3 .today-4"),
    today4
);
var today5 = new ApexCharts(
    document.querySelector(".leftChart .today .todayBox-3 .today-5"),
    today5
);
var tomorrow1 = new ApexCharts(
    document.querySelector(".rightChart .tomorrow .tomorrowBox-1 .tomorrow-1"),
    tomorrow1
);
var tomorrow2 = new ApexCharts(
    document.querySelector(".rightChart .tomorrow .tomorrowBox-2 .tomorrow-2"),
    tomorrow2
);
var tomorrow3 = new ApexCharts(
    document.querySelector(".rightChart .tomorrow .tomorrowBox-2 .tomorrow-3"),
    tomorrow3
);
var yesterday1 = new ApexCharts(
    document.querySelector(".rightChart .yesterday .yesterdayBox-1 .yesterday-1"),
    yesterday1
);
var yesterday2 = new ApexCharts(
    document.querySelector(".rightChart .yesterday .yesterdayBox-2 .yesterday-2"),
    yesterday2
);
var yesterday3 = new ApexCharts(
    document.querySelector(".rightChart .yesterday .yesterdayBox-2 .yesterday-3"),
    yesterday3
);

// --------------------(畫面大小調整)--------------------

// 將 .banner 的高度CSS 改為 當前瀏覽器內部高度(單位px)
document.querySelector('.wrap').style.height = (window.innerHeight -41) + "px"
document.querySelector('.content').style.height = (window.innerHeight -41) + "px"

document.querySelector('.today').style.height = (window.innerHeight -41) + "px"
document.querySelector('.todayBox-1').style.height = ((window.innerHeight -41) * 0.5) + "px"
document.querySelector('.todayBox-2').style.height = ((window.innerHeight -41) * 0.25) + "px"
document.querySelector('.todayBox-3').style.height = ((window.innerHeight -41) * 0.25) + "px"

document.querySelector('.tomorrow').style.height = ((window.innerHeight -41) * 0.5) + "px"
document.querySelector('.yesterday').style.height = ((window.innerHeight -41) * 0.5) + "px"
document.querySelector('.tomorrowBox-1').style.height = ((window.innerHeight -41) * 0.25) + "px"
document.querySelector('.yesterdayBox-1').style.height = ((window.innerHeight -41) * 0.25) + "px"
document.querySelector('.tomorrowBox-2').style.height = ((window.innerHeight -41) * 0.25) + "px"
document.querySelector('.yesterdayBox-2').style.height = ((window.innerHeight -41) * 0.25) + "px"
//使用者 改變瀏覽器大小時觸發
window.onresize = function(){
    document.querySelector('.wrap').style.height = (window.innerHeight -41) + "px"
    document.querySelector('.content').style.height = (window.innerHeight -41) + "px"
    
    document.querySelector('.today').style.height = (window.innerHeight -41) + "px"
    document.querySelector('.todayBox-1').style.height = ((window.innerHeight -41) * 0.5) + "px"
    document.querySelector('.todayBox-2').style.height = ((window.innerHeight -41) * 0.25) + "px"
    document.querySelector('.todayBox-3').style.height = ((window.innerHeight -41) * 0.25) + "px"
    
    document.querySelector('.tomorrow').style.height = ((window.innerHeight -41) * 0.5) + "px"
    document.querySelector('.yesterday').style.height = ((window.innerHeight -41) * 0.5) + "px"
    document.querySelector('.tomorrowBox-1').style.height = ((window.innerHeight -41) * 0.25) + "px"
    document.querySelector('.yesterdayBox-1').style.height = ((window.innerHeight -41) * 0.25) + "px"
    document.querySelector('.tomorrowBox-2').style.height = ((window.innerHeight -41) * 0.25) + "px"
    document.querySelector('.yesterdayBox-2').style.height = ((window.innerHeight -41) * 0.25) + "px"
}



// --------------------(自動化刷新)--------------------
// 每10s 重新 updata
setInterval("updata()","3000");
function updata() {
    let upSwitch = 0
    // 讀取本地之JSON檔 添加引數為當前時間達成檔案不重複的效果來杜絕快取
    fetch("./Data.json?version="+(new Date()).getTime())
    .then(response => {
        if (response.ok) {
            // 資料存在就為 1
            dataExist = 1
            document.querySelector('.notData').classList.add('no')
            return response.json();
        } else {
            // 資料不存在為 0
            dataExist = 0
            // 抓不到資料時 清空舊有資料
            data = ''
            document.querySelector('.notData').classList.remove('no')
        }
    })
    .then(function (jsondata) {
        if (dataExist) {
            dataNew = jsondata

            // 判斷資料是否異動
            if (JSON.stringify(data) !== JSON.stringify(dataNew)) {

                console.log('資料發生異動');
                // 深層複製 新資料到舊資料當中
                data = JSON.parse(JSON.stringify(dataNew))


                // 觸發 更新開關 因為無法再用資料變動去判斷
                upSwitch = 1
            }
                
            // 異動後的渲染
            if (upSwitch === 1) {
                // 調用渲染
                upAllData();
            }
                        

        }else{

            document.querySelector('.notData').classList.remove('no')

        }
    })



    // 將更新開關 關閉
    .then(upSwitch = 0)
}




// --------------------(初始化)--------------------
// 初始化
function init() {
    //獲取資料
    today1.render();
    today2.render();
    today3.render();
    today4.render();
    today5.render();
    tomorrow1.render();
    tomorrow2.render();
    tomorrow3.render();
    yesterday1.render();
    yesterday2.render();
    yesterday3.render();
    getData()
}

init();







// // 只更新單獨數據的方法
// today1.updateSeries([{
//     name: 'Sales',
//     data: [8000,8000,8000,8000]
// }])


// // 更新類別數據的方法
// today1.updateOptions({
//     xaxis: {
//         categories: ['名稱一', '名稱一', '名稱一', '名稱一']
//     },
//     series: [{
//         name: '數值',
//         data: [8000,8000,8000,8000]
//     }]
// })


// today1.updateOptions({
//     xaxis: {
//         categories: ["Demo-1","Demo-2"]
//     },
//     series: [{
//         name: '數值',
//         data: [123,456]
//     }]
// })


// 長條圖更新資料 Function
function upDataBar(ItemName,DataName,DataNum) {
    ItemName.updateOptions({
        xaxis: {
            categories: DataName
        },
        series: [{
            name: '數值',
            data: DataNum
        }]
    })
}
// 圓餅圖更新資料 Function
function upDataPie(ItemName,DataName,DataNum) {
    ItemName.updateOptions({
        labels: DataName,
        series: DataNum
    })
}


// 整體 bar圖表更新用
function upAllData() {
    // Demo用的更新資料數據
    let upNewData = [] // 圖表資料型別定義
    let upNewName = [] // 圖表名稱型別定義

    // 如果資料為當天 n+0
    for (let i = 0; i < data.length; i++) {
        if (data[i].day == 0) {

            // today1 圖表動態獲取
            upNewData.push(data[i].staffAllTotle,data[i].machineAllTotle,data[i].staffConsume)
            upNewName.push('產能(總量)','人工負荷','報工工時')
            upDataBar(today1,upNewName,upNewData) // 執行動態刷新
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空

            // today3 圖表動態獲取
            upNewData.push(data[i].staff.staffLeave,data[i].staff.staffNorm,data[i].staff.staffOvertime)
            upNewName.push('人工請假','人工標準','人工加班')
            upDataBar(today3,upNewName,upNewData) // 執行動態刷新
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空

            // today5 圖表動態獲取
            upNewData.push(data[i].machine.machineRepair,data[i].machine.machineNorm)
            upNewName.push('機器停機','機器標準')
            upDataBar(today5,upNewName,upNewData) // 執行動態刷新
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空

            // today2 圖表動態獲取
            upNewData.push(data[i].load.TW1231,data[i].load.TW1232,data[i].load.TW1237,data[i].load.TW1239,data[i].load.TW1921)
            upNewName.push('TW1231','TW1232','TW1237','TW1239','TW1921')
            upDataPie(today2,upNewName,upNewData)
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空

            // today4 圖表動態獲取
            upNewData.push(data[i].Consume.TW1231,data[i].Consume.TW1232,data[i].Consume.TW1237,data[i].Consume.TW1239)
            upNewName.push('TW1231','TW1232','TW1237','TW1239')
            upDataPie(today4,upNewName,upNewData)
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空


        }else if (data[i].day == 1) {

            // tomorrow1 圖表動態獲取
            upNewData.push(data[i].staffAllTotle,data[i].machineAllTotle,data[i].staffConsume)
            upNewName.push('產能(總量)','人工負荷','報工工時')
            upDataBar(tomorrow1,upNewName,upNewData) // 執行動態刷新
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空

            // tomorrow2 圖表動態獲取
            upNewData.push(data[i].load.TW1231,data[i].load.TW1232,data[i].load.TW1237,data[i].load.TW1239,data[i].load.TW1921)
            upNewName.push('TW1231','TW1232','TW1237','TW1239','TW1921')
            upDataPie(tomorrow2,upNewName,upNewData)
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空

            // tomorrow3 圖表動態獲取
            upNewData.push(data[i].Consume.TW1231,data[i].Consume.TW1232,data[i].Consume.TW1237,data[i].Consume.TW1239)
            upNewName.push('TW1231','TW1232','TW1237','TW1239')
            upDataPie(tomorrow3,upNewName,upNewData)
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空

        }else if (data[i].day == -1) {
            
            // yesterday1 圖表動態獲取
            upNewData.push(data[i].staffAllTotle,data[i].machineAllTotle,data[i].staffConsume)
            upNewName.push('產能(總量)','人工負荷','報工工時')
            upDataBar(yesterday1,upNewName,upNewData) // 執行動態刷新
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空

            // yesterday2 圖表動態獲取
            upNewData.push(data[i].load.TW1231,data[i].load.TW1232,data[i].load.TW1237,data[i].load.TW1239,data[i].load.TW1921)
            upNewName.push('TW1231','TW1232','TW1237','TW1239','TW1921')
            upDataPie(yesterday2,upNewName,upNewData)
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空

            // yesterday3 圖表動態獲取
            upNewData.push(data[i].Consume.TW1231,data[i].Consume.TW1232,data[i].Consume.TW1237,data[i].Consume.TW1239)
            upNewName.push('TW1231','TW1232','TW1237','TW1239')
            upDataPie(yesterday3,upNewName,upNewData)
            upNewData = [] // 圖表資料資料清空
            upNewName = [] // 圖表名稱資料清空

        }
    }

}

    // // today1 圖表動態獲取
    // if (data[0].day == 0) {
    //     upNewData.push(data[0].staffAllTotle,data[0].machineAllTotle,data[0].staffConsume)
    //     upNewName.push('產能(總量)','人工負荷','報工工時')
    //     upDataBar(today1,upNewName,upNewData) // 執行動態刷新
    //     upNewData = [] // 圖表資料資料清空
    //     upNewName = [] // 圖表名稱資料清空
    // }

    // // today3 圖表動態獲取
    // if (data[0].day == 0) {
    //     upNewData.push(data[0].staff.staffLeave,data[0].staff.staffNorm,data[0].staff.staffOvertime)
    //     upNewName.push('人工請假','人工標準','人工加班')
    //     upDataBar(today3,upNewName,upNewData) // 執行動態刷新
    //     upNewData = [] // 圖表資料資料清空
    //     upNewName = [] // 圖表名稱資料清空
    // }
    
    // // today5 圖表動態獲取
    // if (data[0].day == 0) {
    //     upNewData.push(data[0].machine.machineRepair,data[0].machine.machineNorm)
    //     upNewName.push('機器停機','機器標準')
    //     upDataBar(today5,upNewName,upNewData) // 執行動態刷新
    //     upNewData = [] // 圖表資料資料清空
    //     upNewName = [] // 圖表名稱資料清空
    // }


    