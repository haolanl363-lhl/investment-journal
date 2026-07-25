// 投资日记 app.js 稳定版

const app = document.getElementById("app");

let records = JSON.parse(localStorage.getItem("investmentRecords")) || [];

let todayMarket = "上涨";


// 保存数据
function saveRecords(){
    localStorage.setItem(
        "investmentRecords",
        JSON.stringify(records)
    );
}


// 首页
function home(){

app.innerHTML = `

<section class="card">

<h1>📖 今日投资日记</h1>

<p>
记录想法，而不是记录价格
</p>

</section>


<section class="card">

<h2>今天的市场</h2>


<div class="buttons">

<button onclick="setMarket('上涨')">
上涨
</button>


<button onclick="setMarket('震荡')">
震荡
</button>


<button onclick="setMarket('下跌')">
下跌
</button>


</div>


<p>
当前状态：
<b>${todayMarket}</b>
</p>


</section>



<section class="card">

<h2>添加投资记录</h2>


<input id="stock"
placeholder="股票名称">


<input id="reason"
placeholder="买入理由">


<button onclick="addRecord()">
保存记录
</button>


</section>



<section class="card">

<h2>历史记录</h2>


<div id="list">

${renderRecords()}

</div>


</section>

`;

}



// 设置市场状态

function setMarket(value){

todayMarket=value;

home();

}



// 添加记录

function addRecord(){

let stock=
document.getElementById("stock").value;


let reason=
document.getElementById("reason").value;



if(!stock){

alert("请输入股票名称");

return;

}



records.push({

stock,
reason,
date:new Date().toLocaleString()

});


saveRecords();


home();


}



// 显示记录

function renderRecords(){


if(records.length===0){

return "暂无记录";

}



return records.map((item,index)=>{


return `

<div class="record">

<h3>${item.stock}</h3>

<p>${item.reason}</p>

<small>
${item.date}
</small>


<button onclick="deleteRecord(${index})">
删除
</button>


</div>


`


}).join("");

}



// 删除

function deleteRecord(index){

records.splice(index,1);

saveRecords();

home();

}



// 菜单

function openMenu(){

let menu=document.getElementById("menu");


if(menu){

menu.classList.add("show");

}

}




function closeMenu(){

let menu=document.getElementById("menu");


if(menu){

menu.classList.remove("show");

}

}



// 页面启动

window.onload=function(){

home();


let btn=document.getElementById("menuBtn");


if(btn){

btn.onclick=openMenu;

}


let close=document.getElementById("closeMenu");


if(close){

close.onclick=closeMenu;

}


};
