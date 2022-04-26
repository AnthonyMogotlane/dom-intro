// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");
//reference to the call bill
const callTotalOne = document.querySelector(".callTotalOne");
//reference to the sms bill
const smsTotalOne = document.querySelector(".smsTotalOne");
//create a variable that will keep track of the total bill
const totalOne = document.querySelector(".totalOne")
//colors funtion to indicate the user on the limits
//if the bill is over 30 should show the color in orange
//if the bill is over 50 should show the color in red
function colors() {
    if (totalOne.textContent >= 50) {
        totalOne.classList.add("danger");
        totalOne.classList.remove("warning");
    } else if (totalOne.textContent >= 30 && totalOne.textContent <= 49) {
        totalOne.classList.add("warning");
        totalOne.classList.remove("danger");
    }
}
colors();
//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const addTotals = () => {
    //checking if the input is sms or call, if not we return 'invalid input'
    if (!["call", "sms"].includes(billTypeText.value.trim())) {
        alert("invalid value, Enter 'sms' or 'call'");
    } else {
        if (billTypeText.value.trim() === 'call') {
            //adding call bill just made to the total call bill
            let totalCall = parseFloat(callTotalOne.textContent) + 2.75;
            callTotalOne.textContent = totalCall.toFixed(2);
        } else {
            //adding sms bill just made to the total call bill
            let totalSms = parseFloat(smsTotalOne.textContent) + 0.75;
            smsTotalOne.textContent = totalSms.toFixed(2);
        }

        //adding recent bill to the total bill
        let totalCost = parseFloat(totalOne.textContent) + parseFloat(totalPhoneBill(billTypeText.value.trim()));
        totalOne.textContent = totalCost.toFixed(2);
        //calling colors function
        colors();
    }
}
addToBillBtn.addEventListener("click", addTotals);
//the function calculating the current total bill of the call or sms made.
var totalPhoneBill = function (callAndSms) {
    var callBill = 0;
    var smsBill = 0;

    var listCallSms = callAndSms.split(",");

    for (var i = 0; i < listCallSms.length; i++) {
        if (listCallSms[i].trim() === "call") {
            callBill += 2.75;
        }
        if (listCallSms[i].trim() === "sms") {
            smsBill += 0.75;
        }
    }

    var totalBill = callBill + smsBill;

    return totalBill.toFixed(2);
}