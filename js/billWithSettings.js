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