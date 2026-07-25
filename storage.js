// 投资数据存储系统


const STORAGE_KEY = "investment_records";



// 保存记录

function saveRecords(records){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(records)

    );

}



// 读取记录

function loadRecords(){

    let data = localStorage.getItem(
        STORAGE_KEY
    );


    if(data){

        return JSON.parse(data);

    }


    return [];

}



// 清空记录

function clearRecords(){

    localStorage.removeItem(
        STORAGE_KEY
    );

}
