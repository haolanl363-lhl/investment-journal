// 投资记录系统启动

console.log("投资记录系统已加载");


// 页面加载提示

window.onload = function(){

    let app = document.getElementById("app");

    app.innerHTML += `

    <div style="
    margin-top:20px;
    padding:15px;
    background:#eef6ff;
    border-radius:12px;
    ">

    <h3>📈 今日投资状态</h3>

    <p>欢迎开始记录你的投资复盘。</p>

    </div>

    `;

};
