// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
//get a reference to the sms or call radio buttons
const checkedCallSetting = document.querySelector("#callTwo");
const checkedSmsSetting = document.querySelector("#smsTwo");
//reference for sms and call totals
const callTotalThree = document.querySelector(".callTotalSettings");
const smsTotalThree = document.querySelector(".smsTotalSettings");
//get a reference to the add button
const radioBillAddBtnSetting = document.querySelector(".adioBillAddBtnSetting");
//create a variable that will keep track of the total bill
const totalThree = document.querySelector(".totalSettings");
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
radioBillAddBtnSetting.addEventListener("click", () => {
    //setting the checked radio button value to billItemType
    let billItemTypeSetting = 'check call or sms'; //if no radio button checked it will alert with this string
    if (checkedCallSetting.checked == true) billItemTypeSetting = checkedCallSetting.value;
    if (checkedSmsSetting.checked == true) billItemTypeSetting = checkedSmsSetting.value;
    //checking if the checked radio btn is sms or call then add relevent total
    if (checkedCallSetting.checked == true) {
        billItemTypeSetting = checkedCallSetting.value;
        //adding call bill just made to the total call bill
        let totalCall = parseFloat(callTotalThree.textContent) + 2.75;
        callTotalThree.textContent = totalCall.toFixed(2);
    } else if (checkedSmsSetting.checked == true) {
        //adding sms bill just made to the total call bill
        let totalSms = parseFloat(smsTotalThree.textContent) + 0.75;
        smsTotalThree.textContent = totalSms.toFixed(2);
    }

    //adding recent bill to the total bill
    let totalCost = parseFloat(totalThree.textContent) + parseFloat(totalPhoneBill(billItemTypeSetting));
    totalThree.textContent = totalCost.toFixed(2);
    console.log(totalCost);
    color();
})
//if the bill is over 30 should show the color in orange
//if the bill is over 50 should show the color in red
function color() {
    if (totalThree.textContent >= 50) {
        totalThree.classList.add("danger");
        totalThree.classList.remove("warning");
    } else if (totalThree.textContent >= 30) {
        totalThree.classList.add("warning");
        totalThree.classList.remove("danger");
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



