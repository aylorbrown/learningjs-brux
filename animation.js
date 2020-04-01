const animatedTags = document.querySelectorAll("h2, h3, p, section.img, a.button")

// fade out on load 
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

// fade in 
const fadeIn = function () {  
    // look through all animatedTags and see with the getBoundingClientRect
    // if its in the window 
    let delay = 0.25

    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top
        const tagBottom = tag.getBoundingClientRect().bottom

        if (tagTop < window.innerHeight && tagBottom > 0) {
            tag.style.animation = `fadein 1s ${delay}s both`
            delay = delay + 0.25
        } else {
            tag.style.opacity = 0 
            tag.style.animation = ""
        }

    })
}

// on load, run fadeIn
fadeIn()

// on scroll, run fadeIn 
document.addEventListener("scroll", function () {
    fadeIn()
})

// on browser resize, run fadeIn 
window.addEventListener("resize", function () {
    fadeIn()
})