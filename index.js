// canvas DOM and context
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// canvas height and width
canvas.width = 840;
canvas.height = 480;

const collisionsMap = [];

//parse JSON file to produce arrays of the array
for (let i = 0; i < collisions.length; i += 70){
   collisionsMap.push(collisions.slice(i, 70 + i))
}

// define booundaries class
class Boundary {
    constructor({position}) {
        this.position = position,
        this.width = 64,
        this.height = 64
    }

    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
};

// booundaries array for pushing boundary  
const boundaries = [];

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        boundaries.push(
            new Boundary({
                position: {
                    x: 0,
                    y: 0
                }
            })
        )
    })
})



// define canvas images 
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
    //draw game map
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

    if (keys.w.pressed && lastKey === "w") background.position.y += 3
    else if (keys.a.pressed && lastKey === "a") background.position.x += 3
    else if (keys.s.pressed && lastKey === "s") background.position.y -= 3
    else if (keys.d.pressed && lastKey === "d") background.position.x -= 3
}

animate()

// key up event listeners
let lastKey= ""
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w": 
            keys.w.pressed = true
            lastKey = "w"
            break
        case "a": 
            keys.a.pressed = true
            lastKey = "a"
            break
        case "s": 
            keys.s.pressed = true
            lastKey = "s"
            break   
        case "d": 
            keys.d.pressed = true
            lastKey = "d"
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