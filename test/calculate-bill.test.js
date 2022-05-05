describe("The calculateBill function", () => {
    describe("set values", () => {
        it("should return the input string of calls and sms's as an array", () => {
            let billCosts = calculateBill();
    
            billCosts.setBill("call,sms,call");
    
            assert.deepEqual(billCosts.getBill(), ["call","sms","call"]);
        })

        it("should return the default call cost of 2.75", () => {
            let billCosts = calculateBill();
    
            assert.equal(billCosts.getCallCost(), 2.75);
        })

        it("should return the default sms cost of 0.75", () => {
            let billCosts = calculateBill();
    
            assert.equal(billCosts.getSmsCost(), 0.75);
        })
    })

    describe("use values", () => {
        it("should return the total bill cost made", () => {
            let billCosts = calculateBill();
    
            billCosts.setBill("call,sms,call");

            assert.equal(billCosts.getTotalBill(), 6.25);
        })
    })
})