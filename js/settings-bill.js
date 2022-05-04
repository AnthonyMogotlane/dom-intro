// //get refences to all the settings fields
// const callCostSetting = document.querySelector(".callCostSetting");
// const smsCostSetting = document.querySelector(".smsCostSetting");
// const warningLevelSetting = document.querySelector(".warningLevelSetting");
// const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

// //get a reference to the 'Update settings' button
// const updateSettingBtn = document.querySelector(".updateSettings")

// //create a variables that will keep track of all the settings
// let callCost = 2.75;
// let smsCost = 0.75;
// let warningLevel = 30;
// let dangerLevel = 50;

// //variables that will keep track of all three totals.
// const callTotalThree = document.querySelector(".callTotalSettings");
// const smsTotalThree = document.querySelector(".smsTotalSettings");
// const totalThree = document.querySelector(".totalSettings");

// //add an event listener for when the 'Update settings' button is pressed
// updateSettingBtn.addEventListener("click", () => {
//     //updating all the relevent variable fields
//     if (callCostSetting.value != "") callCost = parseFloat(callCostSetting.value);
//     if (smsCostSetting.value != "") smsCost = parseFloat(smsCostSetting.value);
//     if (warningLevelSetting.value != "") warningLevel = parseInt(warningLevelSetting.value);
//     if (criticalLevelSetting.value != "") dangerLevel = parseInt(criticalLevelSetting.value);
//     colorsSettings();
// })

// //reference to the sms or call radio buttons
// const checkedCallSetting = document.querySelector("#callTwo");
// const checkedSmsSetting = document.querySelector("#smsTwo");

// //get a reference to the add button
// const radioBillAddBtnSetting = document.querySelector(".radioBillAddBtnSetting");
// //add an event listener for when the add button is pressed
// //in the event listener get the value from the billItemTypeRadio radio buttons
// // * add the appropriate value to the call / sms total
// // * add the appropriate value to the overall total
// // * add nothing for invalid values that is not 'call' or 'sms'.
// // * display the latest total on the screen.
// // * check the value thresholds and display the total value in the right color.
// radioBillAddBtnSetting.addEventListener("click", () => {
//     //setting the checked radio button value to billItemType
//     let billItemTypeSetting = 'check call or sms'; //if no radio button checked it will alert with this string
//     if (checkedCallSetting.checked === true) billItemTypeSetting = checkedCallSetting.value;
//     if (checkedSmsSetting.checked === true) billItemTypeSetting = checkedSmsSetting.value;
    
//     //adding recent bill to the total bill
//     let totalCost = parseFloat(totalThree.textContent) + parseFloat(totalPhoneBills(billItemTypeSetting));
//     if (totalCost <= dangerLevel) {
//         totalThree.textContent = totalCost.toFixed(2);
//         //checking if the checked radio btn is sms or call then add relevent total
//         if (checkedCallSetting.checked == true) {
//             //adding call bill just made to the total call bill
//             let totalCall = parseFloat(callTotalThree.textContent) + callCost;
//             callTotalThree.textContent = totalCall.toFixed(2);
//         } else if (checkedSmsSetting.checked == true) {
//             //adding sms bill just made to the total call bill
//             let totalSms = parseFloat(smsTotalThree.textContent) + smsCost;
//             smsTotalThree.textContent = totalSms.toFixed(2);
//         }
//     }
//     colorsSettings();
// })

// //the function calculating the current total bill of the call or sms checked.
// var totalPhoneBills = function (callAndSms) {
//     var callBill = 0;
//     var smsBill = 0;

//     if (callAndSms === "call") {
//         callBill += callCost;
//     }
//     if (callAndSms === "sms") {
//         smsBill += smsCost;
//     }

//     var totalBill = callBill + smsBill;

//     return totalBill.toFixed(2);
// }
// //if the bill is over 30 should show the color in orange
// //if the bill is over 50 should show the color in red
// function colorsSettings() {
//     if (totalThree.textContent >= dangerLevel) {
//         totalThree.classList.add("danger");
//         totalThree.classList.remove("warning");

//     } else if (totalThree.textContent >= warningLevel) {
//         totalThree.classList.add("warning");
//         totalThree.classList.remove("danger");
//     }
// }
// colorsSettings();


//============================================================

const billWithSettings = () => {
    //variables
    let callCost = 0;
    let smsCost = 0;
    let warningLevel = 0;
    let criticalLevel = 0;

    //setting the call cost function
    const setCallCost = call => callCost = call;
    //setting the sms cost function
    const setSmsCost = sms => smsCost = sms;
    //setting the warning level function
    const setWarningLevel = warningValue => warningLevel = warningValue;
    //setting the warning level function
    const setCriticalLevel = criticalValue => criticalLevel = criticalValue;

    //returning the call cost function
    //closure - it can access the surrounding variables
    const getCallCost = () => callCost;
    //returning the sms cost function
    //closure - it can access the surrounding variables
    const getSmsCost = () => smsCost;
    //returning the warning level value function
    //closure - it can access the surrounding variables
    const getWarningLevel = () => warningLevel;
     //returning the critical level value function
    //closure - it can access the surrounding variables
    const getCriticalLevel = () => criticalLevel;
    
    return {
        setCallCost,
        setSmsCost,
        setWarningLevel,
        setCriticalLevel,
        getCallCost,
        getSmsCost,
        getWarningLevel,
        getCriticalLevel
    }
}

//instanciate an object
let currentCallCost = billWithSettings();

currentCallCost.setCallCost(1.80);
console.log(currentCallCost.getCallCost());



