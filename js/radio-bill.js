//get a reference to the sms or call radio buttons
const checkedCall = document.querySelector("#callOne");
const checkedSms = document.querySelector("#smsOne");
//reference for sms and call totals
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
//get a reference to the add button
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const totalTwo = document.querySelector(".totalTwo");
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
radioBillAddBtn.addEventListener("click", () => {
    //setting the checked radio button value to billItemType
    let billItemType = 'click call or sms'; //if no radio button checked it will alert with this string
    if (checkedCall.checked == true) billItemType = checkedCall.value
    if (checkedSms.checked == true) billItemType = checkedSms.value;
    //checking if the checked radio btn is sms or call then add relevent total
    if (checkedCall.checked == true) {
        //adding call bill just made to the total call bill
        let totalCall = parseFloat(callTotalTwo.textContent) + 2.75;
        callTotalTwo.textContent = totalCall.toFixed(2);
    } else if (checkedSms.checked == true) {
        //adding sms bill just made to the total call bill
        let totalSms = parseFloat(smsTotalTwo.textContent) + 0.75;
        smsTotalTwo.textContent = totalSms.toFixed(2);
    }

    //adding recent bill to the total bill
    let totalCost = parseFloat(totalTwo.textContent) + parseFloat(totalPhoneBill(billItemType));
    totalTwo.textContent = totalCost.toFixed(2);

    color();
})
//if the bill is over 30 should show the color in orange
//if the bill is over 50 should show the color in red
function color() {
    if (totalTwo.textContent >= 50) {
        totalTwo.classList.add("danger");
        totalTwo.classList.remove("warning");
    } else if (totalTwo.textContent >= 30) {
        totalTwo.classList.add("warning");
        totalTwo.classList.remove("danger");
    } 
}
color();
//the function calculating the current total bill of the call or sms checked.
var totalPhoneBill = function (callAndSms) {
    var callBill = 0;
    var smsBill = 0;

    if (callAndSms === "call") {
        callBill += 2.75;
    }
    if (callAndSms === "sms") {
        smsBill += 0.75;
    }

    var totalBill = callBill + smsBill;

    return totalBill.toFixed(2);
}



