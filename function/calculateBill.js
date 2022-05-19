//factory function
const calculateBill = () => {
    let callBill = 0;
    let smsBill = 0;
    let errorText = "";
    let bill = "";
    //converting the string input into a bill list
    const setBill = inputBill => (["call", "sms"].includes(inputBill.toLowerCase())) ? bill = inputBill.toLowerCase() : errorText = "Enter 'call' or 'sms'";
    //bill list as an array
    const getBill = () => bill;
    //get error text
    const getErrorText = () => errorText;
    //error message 
    const setErrorMsg = () => (getErrorText() === "Enter 'call' or 'sms'") ? errorText : "";
    //get error message
    const getErrorMsg = () => setErrorMsg();
    //set call bill costs
    const setCallCost = () => (getBill() === "call") ? callBill += 2.75: "";
    //get call bill costs
    const getCallCost = () => callBill;
    //set sms bill costs
    const setSmsCost = () => (getBill() === "sms") ? smsBill += 0.75 : "";
    //get sms bill costs
    const getSmsCost = () => smsBill;
    //set total bill
    const setTotalBill = () => getCallCost() + getSmsCost();
    //get total bill
    const getTotalBill = () => setTotalBill();
    //set warning and critical level
    const setlevelIndicator = () => {
        if(getTotalBill() >= 30) {
            return "danger";
        } else if(getTotalBill() >= 20) {
            return "warning";
        } else if(getTotalBill() < 20) {
            return "dark";
        }
    }
    //get warning and critical level class
    const getLevelIndicator = () => setlevelIndicator();
    return {
        setBill,
        getBill,
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setTotalBill,
        getTotalBill,
        setlevelIndicator,
        getLevelIndicator,
        getErrorText,
        setErrorMsg,
        getErrorMsg
    }
}

// let test = calculateBill();
// test.setBill("sm");
// test.setCallCost()

// console.log("call", test.getCallCost())
// console.log("sms", test.getSmsCost())
// console.log("total", test.getTotalBill())
// console.log("levelindicator:", test.getLevelIndicator())
// console.log("Error Msg:", test.getErrorMsg())