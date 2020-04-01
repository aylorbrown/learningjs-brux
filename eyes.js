const irisLeft = document.querySelector("div.iris-left")
const irisRight = document.querySelector("div.iris-right")

// function that moves each iris based on mouse position
// which eye, where is the mouse x & y 
const moveEye = function (tag, mouseX, mouseY) {
    // tag.style.left = mouseX + "px"
    // tag.style.top = mouseY + "px"
    // center of the eye 
    const eyeMidX = tag.getBoundingClientRect().left
    const eyeMidY = tag.getBoundingClientRect().top
    // find the difference between the eye and the mouse 
    const diffX = mouseX - eyeMidX
    const diffY = mouseY - eyeMidY - window.pageYOffset

    // pythagareous theroem 
    const diff = Math.sqrt(diffX * diffX + diffY * diffY)

    // what is the capped radius?
    const radius = Math.min(3, diff)

    // tan in math 
    const angle = Math.atan2(diffY, diffX)

    // the capped version of this, based on the angle
    const cappedX = radius * Math.cos(angle)
    const cappedY = radius * Math.sin(angle)

    // this moves the div in the html 
    const eyeTag = tag.querySelector("div")
    eyeTag.style.left = cappedX + "px"
    eyeTag.style.top = cappedY + "px"
}

document.addEventListener("mousemove", function (event) {
    moveEye(irisLeft, event.pageX, event.pageY)
    moveEye(irisRight, event.pageX, event.pageY)
})