hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Dial, ThreePort.One) < 1) {
        for (let index = 0; index < 4; index++) {
            hummingbird.setPositionServo(FourPort.One, 0)
            basic.pause(500)
            hummingbird.setPositionServo(FourPort.One, 180)
            basic.pause(500)
        }
    }
})
