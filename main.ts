input.onGesture(Gesture.Shake, function () {
    juego = randint(1, 3)
    basic.clearScreen()
    if (juego == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (juego == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let juego = 0
basic.pause(500)
basic.showString("Shake it!")
