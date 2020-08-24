/*!
 * flappy bird.js v1.0.0
 * (c) 2020 Lin.JY
 * Released under the MIT License.
 */
'use strict';

const img = "data:image/jpeg;base64,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";

const img$1 = "data:image/png;base64,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";

const img$2 = "data:image/png;base64,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";

const img$3 = "data:image/png;base64,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";

const img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAdCAMAAADvl95BAAACxFBMVEVHcEw7SEtHZ1d0vrdKeGtGUVRAPz1qrKdho59wuK1HTEs+UVFCRkjIxcRjo51McV02Qyo8QkJdYFEyO0BEXlt1wrxFPT5QgHpDYVdGWlRekY86XVFklYo3Rzo5QE9xh1RKVEpaiYRfe2lRaGBfoJCIl5Y1PTVCNkFjTE2Ndic6Oz5FPErgYVRNZFpDPiprWRlThn1Kg45zn5QvVDQ4QWRKVkIzeERlpZhNblFNYmCDqJtntLBvwb3T3NxrqqhtXEL////8/vz6vQz8uhX6/ub89CI4ODtPQj//vwv7/u0wMi3///f///xJSEAxMEP/cE/7//f+8xU4MjP2akr+/OhFQzUcHRZEREddZmJAPj/p7eqnp6UuPjf//xL68TE8O0v9/d73/v9ITEv8+/L1+O+PkJHW1tPy8CP+xR1pbmd1dHLd4Nr61B39+TP9+k3/xwQgKSX1+yIqMiaMUjxeRz6AbjGoWUDMniD8+/n//gPExLj+yxXy8up4fnfz8/X6+aX38xbY1TBOWUPo5eeHhILLz8z+/SZYRknsYknlrAtNPkvTYUH/ZUirYVZBOzV3QS73wxPx8fDt5Be4ubT59mc3QDyzrC0uRUr3976clzuysbGiopbn5tF+U0/OzrzDWz4nLUYnJxucgDFmWk+Hg0ssI0VzclumoTqVllK8t0yHiyJoWTtaW0H+bj36+jx2SD7erCL+aFL/dlfkbUvTZ1O5aUvk2S+anaDs73ihnR69xLLn4ybVoAr//46dnIjwuxL66Cjv7TUUHDbY0Ba+sx+yjzGkqIaugTy+vMD//8+ugQ7urw0UHkNXUymVajZybyFiZC0kHDCNU1Pt/RDh6eTBaFjj6VFSdWrsb1lSU1Hx/9zr3d/b3nSKgW+lmgjizRjh4p5iYHDp9e/QmSjSzVjIS1WzVFBsdkCXXkzV6iKuZX2hdkVoOryJAAAAxnRSTlMA/WAR08t3BWQ28eHO/kya/OQ//TNW3O9UdiqQ8erd0eCG4t6H0Mqs5fTzvPvq4f2yZ9K75OW6n7vI0HOQ5ezl//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////759zUAAAADmUlEQVQ4y32UBW9bSxCFHXCYscyo0mOGta/ta4TYMVPsmBkhzEwNM4LCCGVmVJkeM/6J3rRV0e1oJUnaT3N25swsCvV6BKwJC2tmJX8TGIV6V4SGb1AIyDklQr49BLUlxCcTHBCFjggnkwW6EiEV5BR/vTVmi08w5PMN5H5a40EZDQOoXoMQ6O2bPvvQR9KNXJ7oSA8128r3yr0YAEo6ItU59vfe4BK/OJEpB6SiE6oeChODAZF8nQF0cqNfw6I2btJlgrS8Qz9yDlIoFAwTo+ZzO8ClSvSr2qGb+/sFF/KabEfH6QqQy0RyAj1XlZurIgcGvFxw4mZdsegXU36+6UAfzVCvpCDaKlbxXSDi7vnqyxcdTQzZWgTAZXMKHt9QSMupV1KpGKDuzGSCSIHiwYPA52Agt8Nr6Do+jYCaFll8tlfpZXoBAEL1JT2BwNoRF5fwDIzRiX4dl2ga8JrSo/TJLoOoiET6zaBWEay1cJljsUaMfuLIqg8Kmwn09tPnWkz5+IbrP41xrCV3hSKCvRaGnUuMKfbu7UiXgkPXcMR+Cp6+sfjWDZvmtLQUPz0ZM/qIUFtZCdcwqtnshXvfBi/rfszhNSsyqSTKBSv/75h2vPRU/n3bv4My+J8FNru6enGGUAknLyuvZTXWZ6em4nDK3OxO8kRpilQqLZ3+v4o9Vz234ODQeIJaWSwCfhr5PQ6XhpzUdCa151bhfdsdqWRf2X8MxkO3E6Y1i+GaJXsSCvVJmF6I+w6h0knMNnPBdfoNCR5/Z7y1zlHnpInF8O3Fcnb5zF7EvAhyF0WZTiKRUtPzJJKxkbMpmhTTyFJVHUHM6r5XVc5gTLl3hCLSfuQjclIa8kSm/PIfN4fMNvwp41Dhw3n37Zre8jnGVO/MIByxXIt/GP8HcxtGjstrMo9d4xUYs7RYuvUvd13V/Dyj19Fdxmr1i3tiS+zwgYzjbYeaTBmSAtf5CiIWgi5e+Z02/Odut8NJiA9fGeT/1L+1re0jowUZEs25w0MDRiKExUJZWqPLdbFbEO+HDlrxfCKCVkd/dObw2ZZR3plrE1oIIkL7sdD+Y5afb24PWpnw6nz7r14/SB+WTbquWCAIoSCiJeuqZ/0qXysYLnMOzBqzsIg0kWg5ecyzk/y+z2WNZrm0lgqPh0jUnqyYHeD0rdu2wifon7R3p2df36OKq7Pny+ixSesS3v6dxG3bhU7eM0GP2BUb/MblY7xfTqU1+1vsAAAAAElFTkSuQmCC";

const img$5 = "data:image/png;base64,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";

const img$6 = "data:image/png;base64,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";

const img$7 = "data:image/jpeg;base64,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";

const img$8 = "data:image/png;base64,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";

const img$9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAADCAYAAADLJbw3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZFJREFUeNqckk2O1DAQhT/bcZzuZmZAoGlaQkKsOAULFrDhIpyAI7Flz0nYIBYwKySkZjLdSfzHc0vDiB2akpxY5bhefa9iaq3cxutXb2o3faN7WTg8nnC2UEPH5tLw5JmnzIWfVwvxWLjY9jzYKbdKZFNxKtMXD8WQ7V3N/48C6qXSgTEYZYZ1z8NH56w3A+M4st//Vk+Oy6db1utB3xVyuyo9z8K2v+D5ZkfwjqvDL77/GPn6+Zovn/bE8oLdu7d8/PC+lW4qd7EqN7h0TZLsLGjrjMAPuCFw7M6oMRHtSHIL2VmSRetIdbqRO6p6t2rB3AvbUKSHTDStgB7FahlLrlbnjmqccvKnnTWV6gTuZVbG2km5G52PTDJn8aOameg0A5PXkM/o4uqv3j/gRYWc6ZuqLkR8EuC84Cbwc8SkzJAzMSWCTAgi97K8zbfTO2TtSiSZep95C7Ceipk2ca1e+6BJBkEvdcblo3YtP59yJ4AGVTYn/CEHwupcwOp/PtAv+hOSjIxzGyVeTLfxR4ABABGJrtB2g7ZlAAAAAElFTkSuQmCC";

const img$a = "data:image/png;base64,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";

const img$b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAACCAYAAAAAeW+SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALpJREFUeNrcjjsKwkAURc/M+MUgUcFGQQsLN+ICbF2TrTux0FaXYWMhasQPEhOTTJIxEVxAWg88eHA59z1hjCFnNl+Y03JNWewZT9uMJi0GfYteo0OoE/beCSd6oFGQKSqXjMT3QpyzQ5LG2HYTy7LwXwGPu0vwjr7dmBRBjBES8imISkXmgRYJ+Sqz+zJQuEfN09FU6tDtlZAVwfVg8C5ZHkXEaYnarU64U+jqkM12JX6dxb/4Ez4CDAAPQUYBroDyhAAAAABJRU5ErkJggg==";

// var prefix = '../img/'

window.imgs = {
  // Create
  bg: new Image(),
  grass: new Image(),
  title: new Image(),
  bird0: new Image(),
  bird1: new Image(),
  up_bird0: new Image(),
  up_bird1: new Image(),
  down_bird0: new Image(),
  down_bird1: new Image(),
  startBtn: new Image(),
  up_pipe: new Image(),
  up_mod: new Image(),
  down_pipe: new Image(),
  down_mod: new Image(),
  //加载图片
  loadImg: function (fn) {
    this.bg.src = img;
    this.bird0.src = img$1;
    this.bird1.src = img$2;
    this.up_bird0.src = img$3;
    this.up_bird1.src = img$4;
    this.down_bird0.src = img$5;
    this.down_bird1.src = img$6;
    this.startBtn.src = img$7;
    this.up_pipe.src = img$8;
    this.up_mod.src = img$9;
    this.down_pipe.src = img$a;
    this.down_mod.src = img$b;
    var that = this; //添加定时器，判断图片是否加载完成

    var timer = setInterval(function () {
      if (that.bg.complete && that.grass.complete && that.title.complete && that.startBtn.complete && that.bird0.complete && that.bird1.complete && that.up_bird0.complete && that.up_bird1.complete && that.down_bird0.complete && that.down_bird1.complete && that.up_pipe.complete && that.up_mod.complete && that.down_mod.complete && that.down_pipe.complete) {
        //删除定时器
        clearInterval(timer); //图片全部加载完成后，运行此函数

        fn();
      }
    }, 50);
  }
};

var normal_bird = [imgs.bird0, imgs.bird1]; // normal

var up_bird = [imgs.up_bird0, imgs.up_bird1]; // up

var down_bird = [imgs.down_bird0, imgs.down_bird1]; // down

class Bird {
  constructor(gameoverCb, ctx) {
    this.i = 0;
    this.posX = 100;
    this.posY = 200; // When touch screen, speed change

    this.speed = 0;
    this.alive = true;
    this.ctx = ctx;
    this.gameoverCb = gameoverCb;
  }

  _draw(img) {
    this.ctx.drawImage(img, this.posX, this.posY);
  }

  fly() {
    // this.speed += 0.01
    this.posY += this.speed;
    this.speed += 0.1; // if top

    if (this.posY < 10) {
      this.posY = 10;
    } // if bottom


    if (this.posY >= 420) {
      this._draw(normal_bird[this.i]);

      this.setDeath('fly to the bottom');
      return;
    } // change different images


    if (this.speed < 0) {
      this._draw(up_bird[this.i]);
    } else if (this.speed > 0) {
      this._draw(down_bird[this.i]);
    } else {
      this._draw(normal_bird[this.i]);
    } // config index of bird image


    this._wing();
  }

  _wing() {
    this.i++;

    if (this.i === 2) {
      this.i = 0;
    }
  }

  setDeath(reason) {
    this.alive = false;
    this.gameoverCb(reason);
  }

}

class Pipe {
  constructor(ctx) {
    this.up = imgs.up_pipe;
    this.up_mod = imgs.up_mod;
    this.down = imgs.down_pipe;
    this.down_mod = imgs.down_mod;
    this.done = false;
    this.X = 300; // distance between up and bottom is 50px

    this.up_Y = Math.floor(Math.random() * 50);
    this.down_Y = (50 - this.up_Y) * 3; // position

    this.pos_up_Y = this.up_Y * 3 + this.up.height;
    this.pos_down_Y = 362 - this.down_Y;
    this.ctx = ctx;
  }

  draw() {
    // draw pipe head
    this.ctx.drawImage(this.up, this.X, this.up_Y * 3);
    this.ctx.drawImage(this.down, this.X, 362 - this.down_Y); // draw pipe body

    for (var i = 0; i < this.up_Y; i++) {
      this.ctx.drawImage(this.up_mod, this.X, i * 3);
    }

    for (var j = 0; j < this.down_Y; j++) {
      this.ctx.drawImage(this.down_mod, this.X, 420 - this.down_Y + this.down_mod.height + j);
    }
  }

  move() {
    this.X -= 3;
    this.draw();
  }

  setDone() {
    this.done = true;
  }

}

var container = document.getElementById('container');
var canvas = document.getElementById('canvas');
var startBtn = document.getElementById('startBtn');
var scoreDom = document.getElementById('score');
var ctx = canvas.getContext('2d');
var bird = new Bird(gameOver, ctx); // PREVENT page scrolling

document.body.addEventListener('touchmove', function (event) {
  event.preventDefault();
}, false); // CALLBACK game over

function gameOver(reason) {
  console.log('#reason', reason);
  ctx.font = "50px blod";
  ctx.fontWeight = '1000';
  ctx.fillStyle = "white";
  ctx.fillText("GAME OVER", 20, 200);
  ctx.font = "20px blod";
  ctx.fillStyle = "white";
  ctx.fillText("✋ PLAY AGAIN", 100, 250);
  canvas.addEventListener('click', START.reset, false);
} // WHEN click / touchstart, bird fly up


function touchFn() {
  bird.speed = -2;
}

window.addEventListener('click', touchFn, false);
window.addEventListener('touchstart', touchFn, false);
startBtn.addEventListener('click', function () {
  container.style.display = "none";
  canvas.style.visibility = 'visible';
  START.init();
});
var START = {
  limit: 2,
  queue: [],
  flag: 0,
  num: Math.floor(70 + Math.random() * 20),
  bird_width: 0,
  pipe_width: 0,
  score: 0,
  init: function () {
    imgs.loadImg(START.draw);
    this.bird_width = imgs.bird0.width;
    this.pipe_width = imgs.down_pipe.width;
  },
  reset: function () {
    START.limit = 2;
    START.queue = [];
    START.flag = 0;
    START.num = Math.floor(70 + Math.random() * 20);
    START.bird_width = 0;
    START.pipe_width = 0;
    START.score = 0;
    bird = new Bird(gameOver, ctx);
    ctx.clearRect(0, 0, 343, 480); // clear canvas

    scoreDom.innerText = 0;
    container.style.display = "block";
    canvas.style.visibility = 'hidden';
    canvas.removeEventListener('click', START.reset, false);
  },
  piping: function () {
    if (this.flag < this.num) {
      this.flag++;
    } else {
      var ins = new Pipe(ctx);

      if (this.queue.length < this.limit) {
        this.queue.push(ins);
      } else {
        this.queue.shift();
        this.queue.push(ins);
      }

      this.flag = 0;
      this.num = START.num;
    }

    this.queue.forEach(pipe => {
      pipe.move();
      this.isHit(pipe);
    });
  },
  isHit: function (pipe) {
    // bird: X + body width
    var b_X = bird.posX;
    var b_Y = bird.posY;
    var p_X = pipe.X; // Evaluate X

    if (b_X + this.bird_width > p_X && b_X < p_X + this.pipe_width) {
      // Evaluate Y
      // console.log(b_Y, pipe.pos_up_Y)
      if (b_Y < pipe.pos_up_Y) {
        bird.setDeath('HIT UP_PIPE ');
      } else if (b_Y + 30 > pipe.pos_down_Y) {
        bird.setDeath('HIT DOWN_PIPE');
      }
    } // Score


    if (b_X > p_X + this.pipe_width && pipe.done === false) {
      pipe.setDone();
      START.score++;
      scoreDom.innerText = START.score;
    }
  },
  moving: function () {
    ctx.clearRect(0, 0, 343, 480); // clear canvas

    ctx.drawImage(imgs.bg, 0, 0); // draw bg when position of bird changes

    bird.fly(); // draw bird when position changes

    START.piping();

    if (bird.alive) {
      window.requestAnimationFrame(START.moving);
    }
  },
  draw: function () {
    ctx.drawImage(imgs.bg, 0, 0);
    window.requestAnimationFrame(START.moving);
  }
};
