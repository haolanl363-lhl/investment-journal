// ==========================
// AI投资复盘评分系统
// ==========================


function startReview(){


let reason =
document.getElementById("reason").value;


let plan =
document.getElementById("plan").value;


let emotion =
document.getElementById("emotion").value;



if(!reason || !plan || !emotion){

alert("请填写完整复盘内容");

return;

}



// 初始分

let discipline = 80;

let risk = 80;

let emotionScore = 80;



// 判断交易理由


if(
reason.includes("上涨") ||
reason.includes("感觉") ||
reason.includes("别人")
){

discipline -= 20;

risk -= 15;

}




// 判断计划执行


if(
plan.includes("没有") ||
plan.includes("临时")
){

discipline -= 25;

}




// 判断情绪


if(
emotion.includes("害怕") ||
emotion.includes("焦虑") ||
emotion.includes("冲动")
){

emotionScore -= 30;

}




let total =
Math.round(
(discipline+risk+emotionScore)/3
);





let advice="";



if(total>=85){

advice=
"你的投资纪律较好，继续保持。";

}

else if(total>=70){

advice=
"整体不错，但需要减少情绪影响。";

}

else{

advice=
"建议降低交易频率，加强投资计划。";

}






document.getElementById("result").innerHTML=`

<div class="card">

<h3>
综合评分：
${total}/100
</h3>


<p>
📋 纪律评分：
${discipline}/100
</p>


<p>
🛡 风险控制：
${risk}/100
</p>


<p>
🧠 情绪管理：
${emotionScore}/100
</p>


<hr>


<p>
AI建议：
${advice}
</p>


</div>

`;



}
