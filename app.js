const app = document.getElementById("app");


let records = JSON.parse(localStorage.getItem("records")) || [];


function save(){
    localStorage.setItem(
        "records",
        JSON.stringify(records)
    );
}


function render(){

app.innerHTML = `

<div class="page">


<header>
<button class="menu" onclick="openMenu()">☰</button>
<h1>📈 投资日记</h1>
</header>


<div class="card">

<h2>📖 今日投资日记</h2>

<p>
记录想法，而不是记录价格
</p>


<textarea id="note"
placeholder="今天市场发生了什么？你的想法？"></textarea>


<button onclick="addRecord()">
保存记录
</button>

</div>



<div class="card">

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


<p id="market">
今天状态：未选择
</p>


</div>



<div class="card">

<h2>历史记录</h2>

<div id="history">

</div>


</div>



</div>



<div id="drawer">

<h2>📈 投资日记</h2>

<p onclick="home()">🏠 首页</p>

<p>📊 投资分析</p>

<p onclick="scrollDiary()">
📖 投资日记
</p>

<p>❌ 错题本</p>

<p>🧠 AI复盘</p>


</div>


`;

showHistory();

}



function addRecord(){

let text=document.getElementById("note").value;


if(!text)return;


records.push({

date:new Date().toLocaleString(),

text:text

});


save();


render();

}



function showHistory(){

let box=document.getElementById("history");


if(!box)return;


box.innerHTML=records.map(
r=>`

<div class="record">

<b>${r.date}</b>

<p>${r.text}</p>

</div>

`
).join("");

}



function setMarket(v){

document.getElementById("market")
.innerHTML=
"今天状态："+v;

}



function openMenu(){

let d=document.getElementById("drawer");

d.classList.toggle("show");

}



function scrollDiary(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}



function home(){

document
.getElementById("drawer")
.classList.remove("show");

}



render();
