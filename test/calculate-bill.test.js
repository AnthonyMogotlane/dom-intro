describe("The calculateBill function", () => {
    describe("set values", () => {
        it("should set the bill and return the input string of calls and sms's as an array - list of the bill", () => {
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
        it("should return the total bill for 5 calls made at a default cost of 2.75 each", () => {
            let billCosts = calculateBill();
    
            billCosts.setBill("call, call, call, call, call");

            assert.equal(billCosts.getTotalBill(), 13.75);
        })

        it("should return the total bill for 2 sms's made at a default cost of 0.75 each", () => {
            let billCosts = calculateBill();
    
            billCosts.setBill("sms, sms");

            assert.equal(billCosts.getTotalBill(), 1.50);
        })

        it("should return the total bill for 2 sms's and 4 calls made, sms at default cost of 0.75 each and call at default cost of 2.75 each", () => {
            let billCosts = calculateBill();
    
            billCosts.setBill("sms, call, sms, call, call, call");

            assert.equal(billCosts.getTotalBill(), 12.50);
        })
    })

    describe("warning and critical level values", () => {
        it("it should return 'warning' as string if the total bill exeeds R20.00", () => {
            let billCosts = calculateBill();

            billCosts.setBill("call, call, sms, call, sms, call, call, call, call, sms, call")

            assert.equal(billCosts.getTotalBill(), 24.25)
            assert.equal(billCosts.getLevelIndicator(), "warning")
        })

        it("it should return 'danger' as string if the total bill exeeds R30.00", () => {
            let billCosts = calculateBill();

            billCosts.setBill("call, call, sms, call, sms, call, call, call, call, sms, call, sms, call, call, call, call, sms, call, sms, call, call")

            assert.equal(billCosts.getTotalBill(), 45.75)
            assert.equal(billCosts.getLevelIndicator(), "danger")
        })
    })
})