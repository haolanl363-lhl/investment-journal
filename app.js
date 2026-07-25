// ==========================
// 投资日记主程序
// ==========================


// 获取当前记录

let records = loadRecords();



// 如果第一次打开，没有数据

if(records.length === 0){

    records = investmentRecords;

    saveRecords(records);

}



// 添加投资记录

function addInvestment(){


    let stock =
    document.getElementById("stock").value;


    let buyPrice =
    Number(document.getElementById("buyPrice").value);


    let currentPrice =
    Number(document.getElementById("currentPrice").value);


    let quantity =
    Number(document.getElementById("quantity").value);



    if(!stock || !buyPrice || !currentPrice || !quantity){

        alert("请填写完整信息");

        return;

    }



    let newRecord = {


        stock: stock,

        buyPrice: buyPrice,

        currentPrice: currentPrice,

        quantity: quantity,

        date: new Date()
        .toLocaleDateString()


    };



    records.unshift(newRecord);



    saveRecords(records);



    renderRecords();



    alert("投资记录保存成功");


}




// 显示记录

function renderRecords(){


    let box =
    document.getElementById("records");


    box.innerHTML="";



    records.forEach(item=>{


        let result =
        calculateInvestment(item);



        box.innerHTML += `


        <div class="card">


        <h3>
        ${item.stock}
        </h3>


        <p>
        买入价格：
        ${item.buyPrice}
        </p>


        <p>
        当前价格：
        ${item.currentPrice}
        </p>


        <p>
        数量：
        ${item.quantity}
        </p>



        <p>
        盈亏：
        ${result.profit}
        </p>


        <p>
        收益率：
        ${result.rate}
        </p>



        <small>
        日期：
        ${item.date}
        </small>


        </div>


        `;


    });


}



// 页面打开自动加载

window.onload=function(){

    renderRecords();

};
