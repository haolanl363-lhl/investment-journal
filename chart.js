// ==========================
// 投资图表系统
// ==========================


// 创建收益曲线

function createProfitChart(){


let canvas =
document.getElementById("profitChart");


if(!canvas)return;



let records =
loadRecords();



let labels=[];

let values=[];



records.reverse()
.forEach(item=>{


labels.push(item.date);



let value =
item.currentPrice *
item.quantity;



values.push(value);



});




new Chart(canvas,{


type:"line",


data:{


labels:labels,


datasets:[{

label:"资产变化",

data:values,

tension:0.4

}]


},


options:{


responsive:true


}


});


}




// 简易K线模拟

function createKChart(){


let canvas =
document.getElementById("kChart");


if(!canvas)return;



new Chart(canvas,{

type:"bar",


data:{


labels:[
"开盘",
"最高",
"最低",
"收盘"
],


datasets:[{


label:"价格",

data:[
100,
120,
90,
115
]


}]


}


});


}



window.addEventListener(
"load",

()=>{


createProfitChart();

createKChart();


});
