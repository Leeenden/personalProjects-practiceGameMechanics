// class definining
class Sprite {
    constructor({ position, image, frames = {col: 1, row: 1}}) { 
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
        c.fillStyle = "rgba(255, 0, 0, 0)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
};