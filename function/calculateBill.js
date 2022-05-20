//factory function
const calculateBill = () => {
    let billList = [];
    //converting the string input into a bill list
    const setBill = inputBill => billList = inputBill.split(",");
    //bill list as an array
    const getBill = () => billList;

    //set call bill costs
    const setCallCost = () => 2.75;
    //get call bill costs
    const getCallCost = () => setCallCost();
    //set sms bill costs
    const setSmsCost = () => 0.75;
    //get sms bill costs
    const getSmsCost = () => setSmsCost();
    //set total bill
    const setTotalBill = () => {
        let totalBill = 0;
        for(let cost of getBill()) {
            if(cost.trim().toLowerCase() === "call") totalBill += getCallCost();
            if(cost.trim().toLowerCase() === "sms") totalBill += getSmsCost();
        }
        return totalBill;
    }
    //get total bill
    const getTotalBill = () => setTotalBill();
    //set warning and critical level
    const setlevelIndicator = () => {
        if(getTotalBill() >= 50) {
            return "danger";
        } else if(getTotalBill() >= 30) {
            return "warning";
        } else if(getTotalBill() < 30) {
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