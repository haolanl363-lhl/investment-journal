// =========================
// 投资日记 APP 核心程序
// =========================


// 数据

let diaryList =
JSON.parse(
localStorage.getItem("diaryList")
)
|| [];


let market =
localStorage.getItem("market")
||
"震荡";




// 页面加载

window.onload=function(){

    showPage("home");

};





// =========================
// 菜单
// =========================


function openMenu(){

    document
    .getElementById("drawer")
    .classList
    .add("show");


    document
    .getElementById("mask")
    .classList
    .add("show");

}



function closeMenu(){

    document
    .getElementById("drawer")
    .classList
    .remove("show");


    document
    .getElementById("mask")
    .classList
    .remove("show");

}



document
.getElementById("mask")
.onclick =
closeMenu;






// =========================
// 页面切换
// =========================


function showPage(page){


    closeMenu();



    let app =
    document.getElementById("app");




    // 首页

    if(page==="home"){


        app.innerHTML=`

        <div class="card">

        <h2>
        📖 今日投资日记
        </h2>


        <p>
        记录想法，而不是记录价格
        </p>


        </div>



        <div class="card">

        <h2>
        今日市场
        </h2>


        <button onclick="setMarket('上涨')">
        上涨
        </button>


        <button onclick="setMarket('震荡')">
        震荡
        </button>


        <button onclick="setMarket('下跌')">
        下跌
        </button>


        <p>
        当前：
        ${market}
        </p>


        </div>

        `;

    }
