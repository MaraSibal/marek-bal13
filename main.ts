input.onButtonPressed(Button.A, function () {
    basic.showString("AHOJ")
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # . # . .
        . # . . .
        . # # . .
        # . . . .
        # . # . .
        `)
    basic.showString("TIPNI POCET ROZSVICENYCH POLICEK")
    basic.showString("LICHY POCET-A / SUDY-B")
    basic.pause(1000)
    basic.showString("3 2 1 !")
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("SUPER")
    } else {
        basic.showString("NEVADI")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("AHOJ")
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # . # . .
        . # . . .
        . # # . .
        # . . . .
        # . # . .
        `)
    basic.showString("TIPNI POCET ROZSVICENYCH POLICEK")
    basic.showString("LICHY POCET-A / SUDY-B")
    basic.pause(1000)
    basic.showString("3 2 1 !")
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("SUPER")
    } else {
        basic.showString("NEVADI")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("AHOJ")
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        # . # . .
        . # . . .
        . # # . .
        # . . . .
        # . # . .
        `)
    basic.showString("TIPNI POCET ROZSVICENYCH POLICEK")
    basic.showString("LICHY POCET-A / SUDY-B")
    basic.pause(1000)
    basic.showString("3 2 1 !")
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("SUPER")
    } else {
        basic.showString("NEVADI")
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("HEJ OPATRNE")
})
basic.forever(function () {
	
})
