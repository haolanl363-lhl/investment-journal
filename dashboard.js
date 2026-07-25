function renderDashboard(){


let box=document.getElementById("dashboard");


if(!box)return;


let data=getDashboardData();



box.innerHTML=`

<div class="dashboard">


<div class="stat">

<h3>
本金
</h3>

<p>
¥${data.cost}
</p>

</div>



<div class="stat">

<h3>
市值
</h3>

<p>
¥${data.value}
</p>

</div>



<div class="stat">

<h3>
盈亏
</h3>

<p>
¥${data.profit}
</p>

</div>



<div class="stat">

<h3>
收益率
</h3>

<p>
${data.rate}
</p>

</div>



</div>

`;

}



window.onload=function(){

renderDashboard();

};
