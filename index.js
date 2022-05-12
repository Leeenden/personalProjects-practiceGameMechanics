// canvas DOM and context
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// canvas height and width

canvas.width = 840;
canvas.height = 480;
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./images/map.png";

const playerImage = new Image();
playerImage.src = "images/char.png";

// class definining
class Sprite {
    constructor({ position, velocity, image }) { 
        this.position = position,
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

const background = new Sprite({
    position: {
        x: -2475, 
        y: -1400
    },
    image: image
})

// keys object
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

// animate function 
function animate() {
    background.draw();
    window.requestAnimationFrame(animate);
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height / 8,
        canvas.width / 2,
        canvas.height / 2,
        playerImage.width / 4,
        playerImage.height / 8
    );

    if (keys.w.pressed) background.position.y = background.position.y +3
    if (keys.a.pressed) background.position.x = background.position.x +3
    if (keys.s.pressed) background.position.y = background.position.y -3
    if (keys.d.pressed) background.position.x = background.position.x -3
}

animate()

// key up event listeners
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w": 
            keys.w.pressed = true
            break
        case "a": 
            keys.a.pressed = true
            break
        case "s": 
            keys.s.pressed = true
            break   
        case "d": 
            keys.d.pressed = true
            break
    }
    console.log(keys)
});
// key up event listeners
window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "w": 
            keys.w.pressed = false
            break
        case "a": 
            keys.a.pressed = false
            break
        case "s": 
            keys.s.pressed = false
            break   
        case "d": 
            keys.d.pressed = false
            break
    }
    console.log(keys)
});