//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");

//instance of calculateBill factory function
var billCosts = calculateBill();

//function that will be called when the calculate button is clicked or "Enter" key is pressed
const theBillTotal = () => {
    billCosts.setBill(billStringElement.value);
    billTotalElement.textContent = billCosts.getTotalBill().toFixed(2);

    //changing the color of the total bill output depending on the relevent limit
    colorIndicator(billCosts.getLevelIndicator(), billTotalElement) ;
}
//add button event listener
document.querySelector(".calculateBtn").addEventListener("click", theBillTotal)
//When 'Enter' key pressed will output the total
billStringElement.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        theBillTotal();
    }
})



