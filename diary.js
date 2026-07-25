// ==========================
// 投资日记系统
// ==========================


const DIARY_KEY = "investment_diary";



// 获取日记

function getDiary(){

    let data = localStorage.getItem(
        DIARY_KEY
    );


    return data ? JSON.parse(data) : [];

}





// 保存日记

function saveDiary(data){

    localStorage.setItem(
        DIARY_KEY,
        JSON.stringify(data)
    );

}





// 添加日记

function addDiary(){


    let title =
    document.getElementById("diaryTitle").value;


    let content =
    document.getElementById("diaryContent").value;



    if(!title || !content){

        alert("请填写完整日记");

        return;

    }



    let diaries = getDiary();



    diaries.unshift({

        title:title,

        content:content,

        date:
        new Date()
        .toLocaleDateString()


    });



    saveDiary(diaries);



    renderDiary();


    alert("日记保存成功");


}





// 显示日记

function renderDiary(){


    let box =
    document.getElementById("diaries");



    if(!box) return;



    box.innerHTML="";



    let diaries = getDiary();



    diaries.forEach(item=>{


        box.innerHTML += `


        <div class="card">


        <h3>
        📖 ${item.title}
        </h3>


        <p>
        ${item.content}
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
renderDiary
);
