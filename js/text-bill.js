//reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");

//instance of calculateBill
let textBillCosts = calculateBill();

const textBillTotal = () => {
    // //if a relevent limit is reached set the className
    // let className = "";
    // (totalOne.textContent - "" >= 50) ? className = "danger"
    // :(totalOne.textContent - "" >= 30) ? className = "warning"
    // :(totalOne.textContent - "" < 30) ? className = "dark"
    // :"";

    // //changing the total color when relevent limit is reached
    // colorIndicator(className, totalOne);

    if (textBillCosts.setBill(billTypeText.value) === "call") {
        textBillCosts.setCallCost();
    } else if (textBillCosts.setBill(billTypeText.value) === "sms") {
        textBillCosts.setSmsCost();
    }
    handlebarsTemplate(textBillCosts.getCallCost(), textBillCosts.getSmsCost(), textBillCosts.getTotalBill())
}
addToBillBtn.addEventListener("click", textBillTotal);

function handlebarsTemplate(call, sms, total) {

    //reference to the template
    let template = document.querySelector(".table-content").innerHTML;
    //compile the template
    let templateFunction = Handlebars.compile(template);

    var billTotals = {
        callTotalBillOne: call.toFixed(2),
        smsTotalBillOne: sms.toFixed(2),
        totalBillOne: total.toFixed(2)
    }

    document.querySelector(".bill-table").innerHTML = templateFunction(billTotals);
}
handlebarsTemplate(0, 0, 0)





