
class Pipe {
    constructor () {
        this.up = imgs.up_pipe
        this.up_mod = imgs.up_mod
        this.down = imgs.down_pipe
        this.down_mod = imgs.down_mod

        this.X = 300
        // distance between up and bottom is 50px
        this.up_Y = Math.floor(Math.random() * 50)
        this.down_Y = (50 - this.up_Y) * 3
    }

    draw () {
        // draw pipe head
        ctx.drawImage(this.up, this.X, this.up_Y * 3)
        ctx.drawImage(this.down, this.X, 362 - this.down_Y)

        // draw pipe body
        for (var i = 0; i < this.up_Y; i++) { 
            ctx.drawImage(this.up_mod, this.X, i * 3)
        }
        for (var j = 0; j < this.down_Y; j++) { 
            ctx.drawImage(this.down_mod, this.X, 420 - this.down_Y + this.down_mod.height + j)
        }
    }

    move () {
        this.X -= 3
        this.draw()
    }
}