
//reference to radio buttons
const radioChecked = document.querySelectorAll(".billItemTypeRadio");
//reference to the add button for Text Bill Widget
const addToRadioBillBtn = document.querySelector(".radioBillAddBtn");
//instance of calculateBill
let radioBillCosts = radioBill();

//Event listener for Radio button bill widget
addToRadioBillBtn.addEventListener("click", () => {
    let theChecked;
    for(let check of radioChecked) if (check.checked) theChecked = check.value;

    if(theChecked === "call") {
        radioBillCosts.setBill(theChecked)
        radioBillCosts.setCallCost();
    } else if(theChecked === "sms") {
        radioBillCosts.setBill(theChecked)
        radioBillCosts.setSmsCost();
    }
    radioHandlebarsTemplate(radioBillCosts.getCallCost(), radioBillCosts.getSmsCost(), radioBillCosts.getTotalBill());
});

//Template holder function
function radioHandlebarsTemplate(call, sms, total) {
    //reference to the template
    let radioBillTemplate = document.querySelector(".table-content").innerHTML;
    //compile the template
    let radioBillTemplateFunction = Handlebars.compile(radioBillTemplate);
    //handlebars expression data
    var billTotals = {callTotalBill: call.toFixed(2), smsTotalBill: sms.toFixed(2), color: "", totalBill: total.toFixed(2)}

    billTotals.color = radioBillCosts.getLevelIndicator();

    document.querySelector(".radio-bill-table").innerHTML = radioBillTemplateFunction(billTotals);
}
radioHandlebarsTemplate(0, 0, 0);
