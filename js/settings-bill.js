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
        return parseFloat(totalCallCost.toFixed(2));
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
        } else if(getTotalCost() < getWarningLevel()) {
            return "dark";
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
})


//reference to the sms or call radio buttons
const checkedCallSetting = document.querySelector("#callTwo");
const checkedSmsSetting = document.querySelector("#smsTwo");
//reference to the add button
const radioBillAddBtnSetting = document.querySelector(".radioBillAddBtnSetting");

radioBillAddBtnSetting.addEventListener("click", () => {
    //if call is checked update the call total
    if(checkedCallSetting.checked) {
        settingCosts.makeCall();
        callTotalThree.textContent = settingCosts.getTotalCallCost().toFixed(2);
        console.log(settingCosts.makeCall())
        console.log(settingCosts.getTotalCallCost());
        //adding a call bill to total bill
        totalThree.textContent = settingCosts.getTotalCost().toFixed(2);
    }
    //if sms is checked update the sms total
    if(checkedSmsSetting.checked) {
        settingCosts.makeSms();
        smsTotalThree.textContent = settingCosts.getTotalSmsCost().toFixed(2);;
        //adding sms bill to total bill
        totalThree.textContent = settingCosts.getTotalCost().toFixed(2);
    }

    colorIndicator(settingCosts.classSelector())
})

//Color indicator function for warning and critical level
const colorIndicator = className => {
    if (className === "danger") {
        totalThree.classList.add("danger");
        totalThree.classList.remove("warning");
        totalThree.classList.remove("dark");
    } else if (className === "warning") {
        totalThree.classList.add("warning");
        totalThree.classList.remove("danger");
        totalThree.classList.remove("dark");
    }   if (className === "dark") {
        totalThree.classList.add("dark");
        totalThree.classList.remove("danger");
        totalThree.classList.remove("warning");
    }
}





