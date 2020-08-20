// PREVENT page scrolling
document.body.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false)

// WHEN click / touchstart, bird fly up
function touchFn () { bird.speed = -2 }
window.addEventListener('click', touchFn, false)
window.addEventListener('touchstart', touchFn, false)

// DOM
var container = document.getElementById('container')
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')

var bird = new Bird(ctx)

// startBtn.onclick = function () {
//     container.style.display = "none";
//     canvas.style.visibility = 'visible';
// }

var START = {
    limit: 2,
    queue: [],
    flag: 0,
    num: Math.floor(70 + Math.random() * 20),

    init: function () {
        imgs.loadImg(START.draw)
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
            // isHit(pipe)
            // isSkip(pipe)
        })
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

START.init()