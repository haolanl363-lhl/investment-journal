// 投资收益计算器


function calculateInvestment(record){


    // 买入成本

    let cost = 
        record.buyPrice * record.quantity;



    // 当前价值

    let value = 
        record.currentPrice * record.quantity;



    // 盈亏金额

    let profit = 
        value - cost;



    // 收益率

    let rate = 
        ((value - cost) / cost * 100)
        .toFixed(2);



    return {

        cost: cost,

        value: value,

        profit: profit,

        rate: rate + "%"

    };


}
