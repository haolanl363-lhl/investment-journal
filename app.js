// =======================
// 投资日记 APP 主程序
// =======================


let records = JSON.parse(
    localStorage.getItem("records")
) || [];

let market = 
    localStorage.getItem("market") || "上涨";


// 初始化
document.addEventListener(
    "DOMContentLoaded",
    function(){

        showPage("home");

    }
);



// =======================
// 页面切换
// =======================

function showPage(page){

    const app = document.getElementById("app");

    if(!app){
        return;
    }


    // 首页

    if(page==="home"){

        app.innerHTML = `

        <div class="card">

        <h2>📖 今日投资日记</h2>

        <p>
        记录想法，而不是记录价格
        </p>

        </div>


        <div class="card">

        <h2>今天的市场</h2>


        <button onclick="setMarket('上涨')">
        上涨
        </button>


        <button onclick="setMarket('震荡')">
        震荡
        </button>


        <button onclick="setMarket('下跌')">
        下跌
        </button>


        <h3>
        当前状态：
        ${market}
        </h3>


        </div>


        `;

    }



    // 投资分析

    if(page==="analysis"){

        app.innerHTML=`

        <div class="card">

        <h2>📊 投资分析</h2>

        <p>
        K线图、收益曲线模块开发中
        </p>

        </div>

        `;

    }



    // 投资日记

    if(page==="diary"){


        app.innerHTML=`

        <div class="card">

        <h2>
        📖 我的投资日记
        </h2>


        <textarea 
        id="diaryText"
        placeholder="写下今天的投资复盘..."
        style="
        width:100%;
        height:150px;
        ">
        </textarea>


        <br><br>


        <button onclick="saveDiary()">
        保存记录
        </button>


        <div id="recordList">

        </div>


        </div>

        `;


        loadDiary();


    }



    // 错题本

    if(page==="mistake"){


        app.innerHTML=`

        <div class="card">

        <h2>
        ❌ 错题本
        </h2>

        <p>
        暂无记录
        </p>

        </div>

        `;


    }



    // AI复盘

    if(page==="ai"){


        app.innerHTML=`

        <div class="card">

        <h2>
        🧠 AI复盘
        </h2>


        <p>
        根据你的投资记录生成评分
        </p>


        <button onclick="aiScore()">
        开始评分
        </button>


        <h3 id="score">

        </h3>


        </div>


        `;


    }


}



// =======================
// 市场状态
// =======================


function setMarket(value){

    market=value;

    localStorage.setItem(
        "market",
        value
    );


    showPage("home");

}



// =======================
// 保存日记
// =======================


function saveDiary(){


    let text =
    document.getElementById(
        "diaryText"
    ).value;


    if(!text){

        alert(
        "请输入内容"
        );

        return;

    }



    records.push({

        time:
        new Date()
        .toLocaleString(),


        text:text

    });



    localStorage.setItem(
        "records",
        JSON.stringify(records)
    );


    alert(
    "保存成功"
    );


    loadDiary();


}



// =======================
// 显示历史记录
// =======================


function loadDiary(){


    let box =
    document.getElementById(
        "recordList"
    );


    if(!box)
    return;



    box.innerHTML="";



    records
    .reverse()
    .forEach(
    item=>{


        box.innerHTML += `


        <div class="card">

        <small>
        ${item.time}
        </small>


        <p>
        ${item.text}
        </p>


        </div>


        `;


    });



}



// =======================
// AI模拟评分
// =======================


function aiScore(){


    let score =
    Math.floor(
        Math.random()*30
    )+70;



    document.getElementById(
        "score"
    ).innerHTML=

    `
    今日投资评分：
    ${score}/100
    `;


}
