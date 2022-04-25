//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotal = document.querySelector(".billTotal");

//get a reference to the billString
const billString = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
var totalPhoneBill = function(callAndSms) {
    var callBill = 0;
    var smsBill = 0;
    
    var listCallSms = callAndSms.split(",");
    
    for(var i = 0; i < listCallSms.length; i++) {
      if(listCallSms[i].trim() === "call") {
         callBill += 2.75;
      }
      if(listCallSms[i].trim() === "sms") {
         smsBill += 0.75;
      }
    }
    
    var totalBill = callBill + smsBill;
    
    return totalBill.toFixed(2);
}
//link the function to a click event on the calculate button
calculateBtn.addEventListener("click", () => {
    if(billString.value === "") {
        alert("Please enter invalid input: 'call' or 'sms'");
    } else {
        //if total exceed R20 or R30 return the relevent color
        if(totalPhoneBill(billString.value) > 20) billTotal.style.color = "orange";
        if(totalPhoneBill(billString.value) > 30) billTotal.style.color = "red";
        //caculated total bill from the input string
        billTotal.textContent = totalPhoneBill(billString.value);
    }
})

//Event listener for when the key Enter is pressed - will output the total bill
billString.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        billTotal.textContent = totalPhoneBill(billString.value);
    }
})
