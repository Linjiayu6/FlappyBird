var normal_bird = [imgs.bird0, imgs.bird1] // normal
var up_bird = [imgs.up_bird0,imgs.up_bird1] // up
var down_bird = [imgs.down_bird0,imgs.down_bird1] // down

class Bird {
    constructor (gameoverCb, ctx) {
        this.i = 0

        this.posX = 100
        this.posY = 200

        // When touch screen, speed change
        this.speed = 0
        this.alive = true

        this.ctx = ctx
        this.gameoverCb = gameoverCb
    }

    _draw (img) {
        this.ctx.drawImage(img, this.posX, this.posY)
    }

    fly () {
        // this.speed += 0.01
        this.posY += this.speed
        this.speed += 0.1

        // if top
        if (this.posY < 10) {
            this.posY = 10
        }

        // if bottom
        if (this.posY >= 420) {
            this._draw(normal_bird[this.i])
            this.setDeath('fly to the bottom')
            return
        }

        // change different images
        if (this.speed < 0) {
            this._draw(up_bird[this.i])
        } else if (this.speed > 0) {
            this._draw(down_bird[this.i])
        } else {
            this._draw(normal_bird[this.i])
        }

        // config index of bird image
        this._wing()
    }

    _wing () {
        this.i ++
        if (this.i === 2) {
            this.i = 0
        }
    }

    setDeath (reason) {
        this.alive = false
        this.gameoverCb(reason)
    }
}

export default Bird
