console.log("js loaded...")

function getSlide(n) {
    //console.log((document.getElementById("presentation"))[n])
    var x = document.getElementById("presentation").children
    return x.item(n);
}

function getSlideCount() {
    return document.getElementById("presentation").children.length
}

window.addEventListener('scroll', () => {
    getSlide(selected).scrollIntoView(true)
})

document.addEventListener('keydown', (e) => {
    if (e.code == 'KeyS') {
        console.log('S pressed')
        selected = selected + 1
    } else if (e.code == 'KeyW') {
        console.log('W pressed')
        selected = selected - 1
    }

    if (selected >= getSlideCount()) {
        selected = 0
    } else if (selected < 0) {
        selected = getSlideCount() - 1
    }

    getSlide(selected).scrollIntoView(true)
})

selected = 0
getSlide(0).scrollIntoView(true)