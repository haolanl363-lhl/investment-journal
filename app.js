let records = JSON.parse(localStorage.getItem("records")) || [];

let wrongBooks = JSON.parse(localStorage.getItem("wrongBooks")) || [];



function openMenu(){

    document
    .getElementById("sidebar")
    .classList.add("active");


    document
    .getElementById("mask")
    .classList.add("active");

}



function closeMenu(){

    document
    .getElementById("sidebar")
    .classList.remove("active");


    document
    .getElementById("mask")
    .classList.remove("active");

}




function showPage(page){


    closeMenu();



    let app=document.getElementById("app");



    if(page==="home"){


        app.innerHTML=`

        <div class="card">

        <h2>📖 今日投资日记</h2>

        <p>
        记录想法，而不是记录价格
        </p>


        <button class="primary"
        onclick="showPage('diary')">

        开始记录

        </button>


        </div>



        <div class="card">

        <h2>📈 今日市场</h2>


        <div class="market">

        <button onclick="market('上涨')">
        上涨
        </button>


        <button onclick="market('震荡')">
       
