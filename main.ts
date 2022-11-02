let list: number[] = []
let x1Y0 = 0
let X0Y1 = 0
let X1Y1 = 0
let X2Y1 = 0
let X2Y0 = 0
let max = 0
let i = 0
function left_2 () {
	
}
function left_3 () {
	
}
function left_4 () {
	
}
function left_5 () {
	
}
function left_1 () {
	
}
function left_6 () {
	
}
basic.forever(function () {
    let y = 0
    let x = 0
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, x)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, y)
    if (true) {
        list = [
        0,
        1,
        2,
        3,
        4,
        5
        ]
    } else if (false) {
    	
    } else {
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 190)
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
        basic.pause(200)
        x1Y0 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
        list[0] = x1Y0
        left_1()
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
        x1Y0 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
        list[1] = x1Y0
        left_2()
        X0Y1 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
        list[2] = X0Y1
        left_3()
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 240)
        X1Y1 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
        list[3] = X1Y1
        left_4()
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 240)
        X2Y1 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
        list[4] = X2Y1
        left_5()
        X2Y0 = ModuleWorld_Analog.Light(ModuleWorld_Analog.mwAnalogNum.AP2P3)
        list[5] = X1Y1
        left_6()
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
        max = list[0]
        i = 0
        while (i < 6) {
            i = i + 1
            if (list[i] > max) {
                max = list[i]
            }
        }
        basic.pause(500)
        if (list[0] == max) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 190)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
            basic.pause(100)
        } else if (list[1] == max) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 190)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
        } else if (false) {
        	
        }
    }
})
