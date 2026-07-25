// ==========================
// 投资错题本系统
// ==========================


const MISTAKE_KEY = "investment_mistakes";



// 获取错题

function getMistakes(){

    let data = localStorage.getItem(
        MISTAKE_KEY
    );


    return data ? JSON.parse(data) : [];

}





// 保存错题

function saveMistakes(data){

    localStorage.setItem(
        MISTAKE_KEY,
        JSON.stringify(data)
    );

}





// 添加错题

function addMistake(){


    let title =
    document.getElementById("mistakeTitle").value;


    let reason =
    document.getElementById("mistakeReason").value;


    let lesson =
    document.getElementById("mistakeLesson").value;



    if(!title || !reason){

        alert("请填写错误和原因");

        return;

    }



    let mistakes = getMistakes();



    mistakes.unshift({


        title:title,


        reason:reason,


        lesson:lesson,


        date:
        new Date()
        .toLocaleDateString()


    });



    saveMistakes(mistakes);



    renderMistakes();


}





// 显示错题

function renderMistakes(){


    let box =
    document.getElementById("mistakes");


    if(!box) return;



    box.innerHTML="";



    let mistakes = getMistakes();



    mistakes.forEach(item=>{


        box.innerHTML += `


        <div class="card">


        <h3>
        ❌ ${item.title}
        </h3>


        <p>
        <b>错误原因：</b>
        ${item.reason}
        </p>


        <p>
        <b>改进：</b>
        ${item.lesson}
        </p>


        <small>
        ${item.date}
        </small>


        </div>


        `;


    });


}




window.addEventListener(
"load",
renderMistakes
);
