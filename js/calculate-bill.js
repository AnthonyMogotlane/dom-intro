// //get a reference to the billTotal element
// const billTotalElement = document.querySelector(".billTotal");
// //get a reference to the billString
// const billStringElement = document.querySelector(".billString");
// //create the function that will be called when the calculate button is pressed
// //  * this function should read the string value entered - split it on a comma.
// //  * loop over all the entries in the the resulting list
// //  * check if it is a call or an sms and add the right amount to the overall total
// //  * once done looping over all the entries - display the total onto the screen in the billTotal element
// const calculateBill = () => {
//     // get the string entered in the textArea
//     var billString = billStringElement.value.toLowerCase();
//     //split the string
//     var billItems = billString.split(",");
//     // a variable for the total phone bill.
//     var billTotal = 0;
//     //loop over all the bill items
//     for (var i = 0; i < billItems.length; i++) {
//         var billItem = billItems[i].trim();
//         if (billItem === "call") {
//             billTotal += 2.75;
//         }
//         else if (billItem === "sms") {
//             billTotal += 0.75;
//         }
//     }
//     //round to two decimals
//     var roundedBillTotal = billTotal.toFixed(2);
//     billTotalElement.innerHTML = roundedBillTotal;

//     if (roundedBillTotal >= 30) billTotalElement.style.color = "orange";
//     if (roundedBillTotal >= 50) billTotalElement.style.color = "red";
// }

// document.querySelector(".calculateBtn").addEventListener("click", calculateBill)
// //When 'Enter' key pressed will calculate the total
// billStringElement.addEventListener("keypress", (e) => {
//     if(e.key === "Enter") {
//         calculateBill();
//     }
// })
//====================================================================
//factory function
const calculateBill = () => {
    let billList = [];
    let totalBill = 0;
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
        for(let cost of getBill()) {
            if(cost.trim() === "call") totalBill += getCallCost();
            if(cost.trim() === "sms") totalBill += getSmsCost();
        }
        return totalBill;
    }
    //get total bill
    const getTotalBill = () => setTotalBill();


    return {
        setBill,
        getBill,
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setTotalBill,
        getTotalBill
    }
}

let billList = calculateBill();
billList.setBill("call, sms, call");
console.log(billList.getTotalBill());

