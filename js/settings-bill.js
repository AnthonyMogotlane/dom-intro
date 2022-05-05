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
//factory function
const billWithSettings = () => {
    //variables
    let callCost = 0;
    let smsCost = 0;
    let warningLevel = 0;
    let criticalLevel = 0;

    let totalCallCost = 0;
    let totalSmsCost = 0;
    let totalCost = 0;

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

    //function adding to totalCallCost when a call is made.
    const makeCall = () => {
        if(!criticalLevelReached()) {
            return totalCallCost += getCallCost();
        }
    }
    //function adding to totalCallCost when a call is made.
    const makeSms = () => {
        if(!criticalLevelReached()) {
            return totalSmsCost += getSmsCost();
        }
    }
    //function returning the total calls made
    const getTotalCallCost = () => {
        return parseFloat(totalCallCost.toFixed(2));;
    }
    //function returning the total sms made
    const getTotalSmsCost = () => {
        return parseFloat(totalSmsCost.toFixed(2));
    }
    //function calculating overall total cost
    const calculateBill = () => {
        return getTotalCallCost() + getTotalSmsCost();
    }
    //function returning the total calls and sms's made
    const getTotalCost = () => {
        return Math.round(calculateBill() * 100) / 100;
    }

    //function with a condition checking if the critica value is reched
    const criticalLevelReached = () => {
        return getTotalCost() >= getCriticalLevel();
    }

    //function to return relevent class if one of the condition is reached
    const classSelector = () => {
        if(criticalLevelReached()) {
            return "danger";
        } else if(getTotalCost() >= getWarningLevel()) {
            return "warning";
        }
    }

    return {
        setCallCost,
        setSmsCost,
        setWarningLevel,
        setCriticalLevel,
        getCallCost,
        getSmsCost,
        getWarningLevel,
        getCriticalLevel,
        makeCall,
        makeSms,
        getTotalCallCost,
        getTotalSmsCost,
        calculateBill,
        getTotalCost,
        classSelector,
        criticalLevelReached
    }
}
//refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//variables that will keep track of all three totals.
const callTotalThree = document.querySelector(".callTotalSettings");
const smsTotalThree = document.querySelector(".smsTotalSettings");
const totalThree = document.querySelector(".totalSettings");

//function with an instance of billWithSetting
    let settingCosts = billWithSettings();

//reference to the 'Update settings' button
const updateSettingBtn = document.querySelector(".updateSettings")

updateSettingBtn.addEventListener("click", () => {

    settingCosts.setCallCost(Number(callCostSetting.value));
    settingCosts.setSmsCost(Number(smsCostSetting.value));
    settingCosts.setWarningLevel(Number(warningLevelSetting.value));
    settingCosts.setCriticalLevel(Number(criticalLevelSetting.value));

    colorIndicator(settingCosts.classSelector())
    alert("updated");
})


//reference to the sms or call radio buttons
const checkedCallSetting = document.querySelector("#callTwo");
const checkedSmsSetting = document.querySelector("#smsTwo");
//reference to the add button
const radioBillAddBtnSetting = document.querySelector(".radioBillAddBtnSetting");

radioBillAddBtnSetting.addEventListener("click", () => {
    let totalBill = 0; //variable to store sum of calls and sms costs
    //if call is checked update the call total
    if(checkedCallSetting.checked) {
        let totalCall = parseFloat(callTotalThree.textContent) + settingCosts.getCallCost();
        callTotalThree.textContent = totalCall.toFixed(2);
        //adding a call bill to total bill
        totalThree.textContent = (totalBill += totalCall).toFixed(2);
    }
    //if sms is checked update the sms total
    if(checkedSmsSetting.checked) {
        let totalSms = parseFloat(smsTotalThree.textContent) + settingCosts.getSmsCost();
        smsTotalThree.textContent = totalSms.toFixed(2);
        //adding sms bill to total bill
        totalThree.textContent = (totalBill += totalCall).toFixed(2);
    }

    colorIndicator(settingCosts.classSelector())
    console.log(settingCosts.classSelector());
})

//Color indicator function for warning and critical level
const colorIndicator = className => {
    if (className === "danger") {
        totalThree.classList.add("danger");
        totalThree.classList.remove("warning");

    } else if (className === "warning") {
        totalThree.classList.add("warning");
        totalThree.classList.remove("danger");
    }
}





