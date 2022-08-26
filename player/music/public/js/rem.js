function remSize() {
    var deviceWidth = document.documentElement.clientWidth
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 10) + 'px'
    document.querySelector('body').style.fontSize = 0.4 + 'rem'

}
remSize()
window.onresize = function () {
    remSize()

}