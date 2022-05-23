//reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//reference to the add button for Text Bill Widget
const addToTextBillBtn = document.querySelector(".addToBillBtn");

//instance of calculateBill
let textBillCosts = textBill();

//Event listener for Text input bill widget
addToTextBillBtn.addEventListener("click", () => {
    if (textBillCosts.setBill(billTypeText.value) === "call") {
        textBillCosts.setCallCost();
    } else if (textBillCosts.setBill(billTypeText.value) === "sms") {
        textBillCosts.setSmsCost();
    }
    handlebarsTemplate(textBillCosts.getCallCost(), textBillCosts.getSmsCost(), textBillCosts.getTotalBill());
});

//Template holder function
function handlebarsTemplate(call, sms, total) {
    //reference to the template
    let textBillTemplate = document.querySelector(".table-content").innerHTML;
    //compile the template
    let textBillTemplateFunction = Handlebars.compile(textBillTemplate);
    //handlebars expression data
    var billTotals = {callTotalBill: call.toFixed(2), smsTotalBill: sms.toFixed(2), color: "", totalBill: total.toFixed(2)}

    billTotals.color = textBillCosts.getLevelIndicator();

    document.querySelector(".text-bill-table").innerHTML = textBillTemplateFunction(billTotals);
}
handlebarsTemplate(0, 0, 0);




