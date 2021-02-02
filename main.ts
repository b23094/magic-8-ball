let number = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 3) {
        basic.showIcon(IconNames.Yes)
        music.playMelody("G B - - - - - - ", 250)
        basic.showString("You can count on it")
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
        music.playMelody("F D - - - - - - ", 250)
        basic.showString("It is not advisable")
    } else {
        basic.showIcon(IconNames.Meh)
        music.playMelody("D D - F G - - - ", 250)
        basic.showString("Only time will tell")
    }
    basic.pause(3000)
    basic.clearScreen()
})
