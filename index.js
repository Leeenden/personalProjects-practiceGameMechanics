// canvas DOM and context
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
console.log(battleZonesData);

// canvas height and width
canvas.width = 840;
canvas.height = 480;

const collisionsMap = [];

//parse JSON file to produce arrays of the array for collisions
for (let i = 0; i < collisions.length; i += 70){
   collisionsMap.push(collisions.slice(i, 70 + i))
}
const battleZonesMap = [];
//parse JSON file to produce arrays of the array for battleZones
for (let i = 0; i < battleZonesData.length; i += 70){
    battleZonesMap.push(battleZonesData.slice(i, 70 + i))
}
console.log(battleZonesMap)


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

const battleZones = [];

battleZonesMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1020)
            battleZones.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            );

    });
});

console.log(battleZones)
// console.log(boundaries);

// define canvas images
//map
const image = new Image();
image.src = "images/map.png";

const foregroundImage = new Image();
foregroundImage.src = "images/foregroundObjects.png"
// player
const playerImage = new Image();
playerImage.src = "images/char.png";


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
// foreground
const foreground = new Sprite({
    position: {
        x: offset.x, 
        y: offset.y
    },
    image: foregroundImage
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
const moveables = [background, ...boundaries, foreground, ...battleZones]

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
    battleZones.forEach((battleZone) => {
        battleZone.draw()
        // collision detection
        
    });
    player.draw();
    foreground.draw();

    // battlezone collisions detection
    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        // loop through array
        for (let i = 0; i < battleZones.length; i++){
            const battleZone = battleZones[i]
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: battleZone
                })
            ) {
                console.log("collision in battle zone")
                break
            }
        }
    }

    // movment tracking
    let moving = true;
    player.moving = false
    // w key function
    if (keys.w.pressed && lastKey === "w") {
        player.frames.rowVal = 3
        player.moving = true
        //boundary collisions
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
        // stop movement 
        if(moving)
            moveables.forEach((movable) => {
                movable.position.y += 3
        })

    } else if (keys.a.pressed && lastKey === "a") {
        player.frames.rowVal = 1
        player.moving = true
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                console.log("colliding")
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
        moveables.forEach((movable) => {
            movable.position.x += 3
        })
    } else if (keys.s.pressed && lastKey === "s") {
        player.frames.rowVal = 0
        player.moving = true
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ) {
                console.log("colliding")
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
        moveables.forEach((movable) => {
            movable.position.y -= 3
        })
    } else if (keys.d.pressed && lastKey === "d") {
        player.frames.rowVal = 2
        player.moving = true
        for (let i = 0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (
                rectanglularCollision({
                    rectangle1: player, 
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y 
                        }
                    }
                })
            ) {
                console.log("colliding")
                moving = false 
                break
            }
        }
        // stop movement 
        if(moving)
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