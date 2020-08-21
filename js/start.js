// DOM
var container = document.getElementById('container')
    canvas = document.getElementById('canvas')
    startBtn = document.getElementById('startBtn')
    scoreDom = document.getElementById('score')
    ctx = canvas.getContext('2d')

var bird = new Bird(gameOver)

// PREVENT page scrolling
document.body.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false)

// CALLBACK game over
function gameOver (reason) {
    console.log('#reason', reason)
    ctx.font = "50px blod"
    ctx.fontWeight = '1000'
    ctx.fillStyle = "white"
    ctx.fillText("GAME OVER", 20, 200)

    ctx.font = "20px blod"
    ctx.fillStyle = "white"
    ctx.fillText("✋ PLAY AGAIN", 100, 250)
    canvas.addEventListener('click', START.reset, false)
}

// WHEN click / touchstart, bird fly up
function touchFn () { bird.speed = -2 }
window.addEventListener('click', touchFn, false)
window.addEventListener('touchstart', touchFn, false)
startBtn.addEventListener('click', function () {
    container.style.display = "none";
    canvas.style.visibility = 'visible';
    START.init()
})

var START = {
    limit: 2,
    queue: [],
    flag: 0,
    num: Math.floor(70 + Math.random() * 20),
    bird_width: 0,
    pipe_width: 0,
    score: 0,

    init: function () {
        imgs.loadImg(START.draw)
        this.bird_width = imgs.bird0.width
        this.pipe_width = imgs.down_pipe.width
    },

    reset: function () {
        START.limit = 2
        START.queue = []
        START.flag = 0
        START.num = Math.floor(70 + Math.random() * 20)
        START.bird_width = 0
        START.pipe_width = 0
        START.score = 0

        bird = new Bird(gameOver)
        ctx.clearRect(0, 0, 343, 480) // clear canvas
        scoreDom.innerText = 0
        container.style.display = "block"
        canvas.style.visibility = 'hidden'
        canvas.removeEventListener('click', START.reset, false)
    },

    piping: function () {
        if (this.flag < this.num) {
            this.flag ++
        } else {
            var ins = new Pipe()
            if (this.queue.length < this.limit) {
                this.queue.push(ins)
            } else {
                this.queue.shift()
                this.queue.push(ins)
            }
            this.flag = 0
            this.num = START.num
        }
        this.queue.forEach(pipe => {
            pipe.move()
            this.isHit(pipe)
        })
    },

    isHit: function (pipe) {
        // bird: X + body width
        var b_X = bird.posX
            b_Y = bird.posY
            p_X = pipe.X

        // Evaluate X
        if (b_X + this.bird_width > p_X && b_X < p_X + this.pipe_width) {
            // Evaluate Y
            // console.log(b_Y, pipe.pos_up_Y)
            if (b_Y < pipe.pos_up_Y) {
                bird.setDeath('HIT UP_PIPE ')
            } else if (b_Y + 30 > pipe.pos_down_Y) {
                bird.setDeath('HIT DOWN_PIPE')
            }
        }

        // Score
        if (b_X > p_X + this.pipe_width && pipe.done === false) {
            pipe.setDone()
            START.score ++
            scoreDom.innerText = START.score
        }
    },

    moving: function () {
        ctx.clearRect(0, 0, 343, 480) // clear canvas
        ctx.drawImage(imgs.bg, 0, 0) // draw bg when position of bird changes

        bird.fly() // draw bird when position changes
        START.piping()

        if (bird.alive) {
            window.requestAnimationFrame(START.moving)
        }
    },

    draw: function () {
        ctx.drawImage(imgs.bg, 0, 0)
        window.requestAnimationFrame(START.moving)
    }
}
