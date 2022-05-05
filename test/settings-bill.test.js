describe("The billWithSettings function", () => {

describe("set values", () => {
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

describe("use values", () => {
    it("should be able to make 2 call at 2.20 per call", () => {
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.20);
        settingsBill.setSmsCost(0.95);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(settingsBill.getTotalCallCost(), 4.40, "Check your total call cost calculations");
        assert.equal(settingsBill.getTotalSmsCost(), 0.00, "Check your total sms cost calculations");
        assert.equal(settingsBill.getTotalCost(), 4.40, "Check your total cost calculations");
    })

    it("should be able to send 3 sms's at 0.95 cent each", () => {
        let settingsBill = billWithSettings();

        settingsBill.setSmsCost(0.95);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeSms();

        assert.equal(settingsBill.getTotalCallCost(), 0.00, "Check your total call cost calculations");
        assert.equal(settingsBill.getTotalSmsCost(), 2.85, "Check your total sms cost calculations");
        assert.equal(settingsBill.getTotalCost(), 2.85, "Check your total cost calculations");
    })

    it("should be able to send 2 sms's at 0.85 cent each and make 1 call at 2.75", () => {
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeCall();

        assert.equal(settingsBill.getTotalCallCost(), 2.75, "Check your total call cost calculations");
        assert.equal(settingsBill.getTotalSmsCost(), 1.70, "Check your total sms cost calculations");
        assert.equal(settingsBill.getTotalCost(), 4.45, "Check your total cost calculations");
    })
})

describe("warning and critical level values", () => {
    it("should return class name of 'warning' if warning level is reached", () => {
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(settingsBill.getTotalCost(), 7.2, "Check your total cost calculations");
        assert.equal(settingsBill.classSelector(), "warning");

    })

    it("should return class name of 'danger' if critical level is reached", () => {
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(settingsBill.getTotalCost(), 12.70, "Check your total cost calculations");
        assert.equal(settingsBill.classSelector(), "danger");

    })

    it("should stop increamenting total costs when the critical level is reached", () => {
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(12.70);

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.isAtLeast(settingsBill.getTotalCost(), 12, "Check your total cost calculations");
        assert.equal(settingsBill.classSelector(), "danger");

        settingsBill.setCriticalLevel(20);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        
        assert.isAtLeast(settingsBill.getTotalCost(), 20, "Check your total cost calculations");
        assert.equal(settingsBill.classSelector(), "danger");
    })
})
})
