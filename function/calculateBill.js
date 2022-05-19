//factory function
const calculateBill = () => {
    let callBill = 0;
    let smsBill = 0;
    let bill = "";
    //converting the string input into a bill list
    const setBill = inputBill => {
        if(["call", "sms"].includes(inputBill.toLowerCase())) {
            return bill = inputBill.toLowerCase();
        } else {
            alert("Enter 'call' or 'sms'");
        }
    }
    //bill list as an array
    const getBill = () => bill;

    //set call bill costs
    const setCallCost = () => {
        if(getBill() === "call") {
            return callBill += 2.75; 
        }
    }
    //get call bill costs
    const getCallCost = () => callBill;
    //set sms bill costs
    const setSmsCost = () => {
        if(getBill() === "sms") {
            return smsBill += 0.75; 
        }
    }
    //get sms bill costs
    const getSmsCost = () => smsBill;
    //set total bill
    const setTotalBill = () => {
        return getCallCost() + getSmsCost();
    }
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
    const getLevelIndicator = () => {
        return setlevelIndicator();
    }

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
        getLevelIndicator
    }
}

let test = calculateBill();
test.setBill("sms");

test.setBill("call")



console.log("call", test.getCallCost())
console.log("sms", test.getSmsCost())
console.log("total", test.getTotalBill())