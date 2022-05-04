describe("The billWithSettings factory function", () => {
    it("should set the call cost", () => {
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.75)
        assert.equal(settingsBill.getCallCost(),2.75);

        let settingBillTwo = billWithSettings();
        
        settingBillTwo.setCallCost(3.20);
        assert.equal(settingBillTwo.getCallCost(), 3.20);
    })

    it("should set the sms cost", () => {
        let settingsBill = billWithSettings();

        settingsBill.setSmsCost(0.75)
        assert.equal(settingsBill.getSmsCost(), 0.75);

        let settingBillTwo = billWithSettings();
        
        settingBillTwo.setSmsCost(0.85);
        assert.equal(settingBillTwo.getSmsCost(), 0.85);
    })

    it("should set the warning level value", () => {
        let settingsBill = billWithSettings();

        settingsBill.setWarningLevel(30)
        assert.equal(settingsBill.getWarningLevel(), 30);


        let settingBillTwo = billWithSettings();
        
        settingBillTwo.setWarningLevel(45);
        assert.equal(settingBillTwo.getWarningLevel(), 45);
    })

    it("should set the critical level value", () => {
        let settingsBill = billWithSettings();

        settingsBill.setCriticalLevel(50)
        assert.equal(settingsBill.getCriticalLevel(), 50);

        let settingBillTwo = billWithSettings();
        
        settingBillTwo.setCriticalLevel(80);
        assert.equal(settingBillTwo.getCriticalLevel(), 80);
    })
})

describe("Use values", () => {
    it("It should be able to use call cost, sms cost, warning level value and critical level sets", () => {
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.20);
        // settingsBill.setSmsCost(0.95);

        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(settingsBill.getTotalCallCost(), 4.40, "Checks your total call cost calculations")
        assert.equal(settingsBill.getTotalSmsCost(), 0.00, "Checks your total sms cost calculations")
        assert.equal(settingsBill.getTotalCost(), 4.40, "Checks your totals cost calculations")
    })
})