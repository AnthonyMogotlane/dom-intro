//===========================================================================
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

//instance of calculateBill
let textBillCosts = calculateBill();

const textBillTotal = () => {
    if(!["call", "sms"].includes(billTypeText.value.toLowerCase())) alert("invalid input! enter 'call' or 'sms'");
    let totalCosts = 0;
    if(billTypeText.value.toLowerCase() === "call") {
        textBillCosts.setBill(billTypeText.value);
        //incrementing the call costs with call made
        callTotalOne.textContent = (parseFloat(callTotalOne.textContent) + textBillCosts.getCallCost()).toFixed(2);
        //incrementing the total costs with call made
        totalCosts += (parseFloat(totalOne.textContent) + textBillCosts.getCallCost())
        totalOne.textContent = totalCosts.toFixed(2);
    }
    if(billTypeText.value.toLowerCase() === "sms") {
         //incrementing the call costs with call made
         smsTotalOne.textContent = (parseFloat(smsTotalOne.textContent) + textBillCosts.getSmsCost()).toFixed(2);
         //incrementing the total costs with Sms made
         totalCosts += (parseFloat(totalOne.textContent) + textBillCosts.getSmsCost())
         totalOne.textContent = totalCosts.toFixed(2);
    }

    //if a relevent limit is reached set the className
    let className = "";
    (totalOne.textContent - "" >= 50) ? className = "danger"
    :(totalOne.textContent - "" >= 30) ? className = "warning"
    :(totalOne.textContent - "" < 30) ? className = "dark"
    :"";

    //changing the total color when relevent limit is reached
    colorIndicator(className, totalOne);
}

addToBillBtn.addEventListener("click", textBillTotal);

