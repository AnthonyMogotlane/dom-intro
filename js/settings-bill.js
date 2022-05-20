//refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//variables that will keep track of all three totals.
const callTotalThree = document.querySelector(".callTotalSettings");
const smsTotalThree = document.querySelector(".smsTotalSettings");
const totalThree = document.querySelector(".totalSettings");

//instance of billWithSetting
let settingCosts = billWithSettings();

//reference to the 'Update settings' button
const updateSettingBtn = document.querySelector(".updateSettings")

updateSettingBtn.addEventListener("click", () => {

    settingCosts.setCallCost(Number(callCostSetting.value));
    settingCosts.setSmsCost(Number(smsCostSetting.value));
    settingCosts.setWarningLevel(Number(warningLevelSetting.value));
    settingCosts.setCriticalLevel(Number(criticalLevelSetting.value));

    
    colorIndicator(settingCosts.classSelector(), totalThree)

    //alert user when update button is clicked
    document.querySelector(".update-alert").style.display = "inline";
    setTimeout(() => {
        document.querySelector(".update-alert").style.display = "none";
    }, 2000)
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

    colorIndicator(settingCosts.classSelector(), totalThree)
})





