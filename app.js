let records = loadRecords();



function addInvestment(){


let stock =
document.getElementById("stock").value;


let buyPrice =
Number(document.getElementById("buyPrice").value);



let currentPrice =
Number(document.getElementById("currentPrice").value);



let quantity =
Number(document.getElementById("quantity").value);



if(!stock||!buyPrice||!currentPrice||!quantity){

alert("请填写完整");

return;

}



records.unshift({

stock,

buyPrice,

currentPrice,

quantity,

date:new Date()
.toLocaleDateString()

});



saveRecords(records);


renderRecords();

renderDashboard();


}




function renderRecords(){


let box=document.getElementById("records");


if(!box)return;



box.innerHTML="";



records.forEach(item=>{


let result=
calculateInvestment(item);



box.innerHTML+=`

<div class="card">


<h3>
${item.stock}
</h3>


<p>
成本：¥${result.cost}
</p>


<p>
当前：¥${result.value}
</p>


<p>
盈亏：¥${result.profit}
</p>


<p>
收益率：
${result.rate}
</p>


</div>

`;

});


}



window.onload=function(){

renderRecords();

renderDashboard();

};
