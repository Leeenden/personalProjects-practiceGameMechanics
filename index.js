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
    // static property for zoomed in map image (16px actual x 4 zoom)
    static width = 64
    static height = 64
    constructor({position}) {
        this.position = position
        this.width = 64
        this.height = 64
    }

    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
};

// booundaries array for pushing boundary  
const boundaries = [];
const offset = {
    x: -2508,
    y: -1435
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1144)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            );

    });
});

console.log(boundaries);

// define canvas images 
const image = new Image();
image.src = "images/map.png";

const playerImage = new Image();
playerImage.src = "images/char.png";

// class definining
class Sprite {
    constructor({ position, velocity, image, frames = {col: 1, row: 1}}) { 
        this.position = position
        this.image = image
        this.frames = frames

        this.image.onload = () => {
            this.width = this.image.width / this.frames.col
            this.height = this.image.height / this.frames.row
            console.log(this.width)
            console.log(this.height)
        }
        
    }

    draw() {
        c.drawImage(
            this.image,
            0,
            0,
            this.image.width / this.frames.col,
            this.image.height / this.frames.row,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.col,
            this.image.height / this.frames.row
        )
    } 
}

// creating class objects
// player
const player = new Sprite({
    position: {
        x: canvas.width / 2 - 128 / 4,
        y: canvas.height / 2 - 384 / 8 
    },
    image: playerImage,
    frames: {
        col: 4,
        row: 8
    }
})
// background


const background = new Sprite({
    position: {
        x: offset.x, 
        y: offset.y
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

// moveables 
const moveables = [background, ...boundaries]

function rectanglularCollision({rectangle1, rectangle2}) {
    return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}
// animate function 
function animate() {
    window.requestAnimationFrame(animate);
    //draw game map
    background.draw();
    boundaries.forEach((boundary) => {
        boundary.draw()
        // collision detection
        
    });
    player.draw();

    // movment tracking
    let moving = true;
    if (keys.w.pressed && lastKey === "w") {
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })
            ) {
                console.log("colliding")
                moving = false 
                break
            }
        }
        
        if(moving)
            moveables.forEach((movable) => {
                movable.position.y += 3
            })
    } else if (keys.a.pressed && lastKey === "a") {
        moveables.forEach((movable) => {
            movable.position.x += 3
        })
    } else if (keys.s.pressed && lastKey === "s") {
        moveables.forEach((movable) => {
            movable.position.y -= 3
        })
    } else if (keys.d.pressed && lastKey === "d") {
        moveables.forEach((movable) => {
            movable.position.x -= 3
        })
    }
}

animate();

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