// ==========================
// 投资仪表盘统计
// ==========================


function getDashboardData(){


    let records = loadRecords();


    let totalCost = 0;

    let totalValue = 0;



    records.forEach(item=>{


        totalCost += 
        item.buyPrice * item.quantity;


        totalValue += 
        item.currentPrice * item.quantity;


    });



    let profit =
    totalValue - totalCost;



    let rate = 0;


    if(totalCost > 0){

        rate =
        ((profit / totalCost) * 100)
        .toFixed(2);

    }



    return {


        cost: totalCost,


        value: totalValue,


        profit: profit,


        rate: rate + "%",


        count: records.length


    };


}





function renderDashboard(){


    let box =
    document.getElementById(
        "dashboard"
    );


    if(!box) return;



    let data =
    getDashboardData();



    box.innerHTML = `


    <div class="card">


    <h3>
    📊 投资概览
    </h3>


    <p>
    投资本金：
    ¥${data.cost}
    </p>


    <p>
    当前市值：
    ¥${data.value}
    </p>


    <p>
    盈亏：
    ¥${data.profit}
    </p>


    <p>
    收益率：
    ${data.rate}
    </p>


    <p>
    记录次数：
    ${data.count}
    </p>


    </div>


    `;


}


window.addEventListener(
"load",
renderDashboard
);
