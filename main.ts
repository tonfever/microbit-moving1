input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        rekabit.setRgbPixelColor(0, 0xff8000)
        basic.pause(100)
        rekabit.setRgbPixelColor(0, 0x000000)
        basic.pause(100)
    }
    zoombit.turn(TurnDirection.Right, 128)
    basic.pause(500)
    zoombit.brake()
})
input.onButtonPressed(Button.AB, function () {
    rekabit.setAllRgbPixelsColor(0x00ffff)
    zoombit.move(MotorDirection.Forward, 128)
    basic.pause(1000)
    zoombit.brake()
    rekabit.setAllRgbPixelsColor(0x000000)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        rekabit.setRgbPixelColor(1, 0xff8000)
        basic.pause(100)
        rekabit.setRgbPixelColor(1, 0x000000)
        basic.pause(100)
    }
    zoombit.turn(TurnDirection.Left, 128)
    basic.pause(500)
    zoombit.brake()
})
basic.showLeds(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . # . # .
    `)
basic.forever(function () {
	
})
