// var prefix = '../img/'
// import bg from '../img/bg.jpg'
// import bird0 from '../img/bird0.png'
// import bird1 from '../img/bird1.png'
// import up_bird0 from '../img/up_bird0.png'
// import up_bird1 from '../img/up_bird1.png'
// import down_bird0 from '../img/down_bird0.png'
// import down_bird1 from '../img/down_bird1.png'
// import up_pipe from '../img/up_pipe.png'
// import up_mod from '../img/up_mod.png'
// import down_pipe from '../img/down_pipe.png'
// import down_mod from '../img/down_mod.png'
// import start from '../img/start.jpg'

const bg = 'https://i.niupic.com/images/2020/09/04/8CXx.jpg'
const bird0 = 'https://i.niupic.com/images/2020/09/04/8CXA.png'
const bird1 = 'https://i.niupic.com/images/2020/09/04/8CXC.png'
const up_bird0 = 'https://i.niupic.com/images/2020/09/04/8CXO.png'
const up_bird1 = 'https://i.niupic.com/images/2020/09/04/8CXP.png'

const down_bird0 = 'https://i.niupic.com/images/2020/09/04/8CXQ.png'
const down_bird1 = 'https://i.niupic.com/images/2020/09/04/8CXR.png'

const up_pipe = 'https://i.niupic.com/images/2020/09/04/8CXS.png'
const up_mod = 'https://i.niupic.com/images/2020/09/04/8CXT.png'

const down_pipe = 'https://i.niupic.com/images/2020/09/04/8CXF.png'
const down_mod = 'https://i.niupic.com/images/2020/09/04/8CXU.png'

const start = 'https://i.niupic.com/images/2020/09/04/8CXI.jpg'

// Images
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
      this.bg.src = bg;
      this.bird0.src = bird0;
      this.bird1.src = bird1;
      this.up_bird0.src = up_bird0;
      this.up_bird1.src = up_bird1;
      this.down_bird0.src = down_bird0;
      this.down_bird1.src = down_bird1;
      this.startBtn.src = start;
      this.up_pipe.src = up_pipe;
      this.up_mod.src = up_mod;
      this.down_pipe.src = down_pipe;
      this.down_mod.src = down_mod;
      var that = this;
      //添加定时器，判断图片是否加载完成
      var timer = setInterval(function() {
        if (that.bg.complete && that.grass.complete
          && that.title.complete && that.startBtn.complete
          && that.bird0.complete && that.bird1.complete
          && that.up_bird0.complete && that.up_bird1.complete
          && that.down_bird0.complete && that.down_bird1.complete
          && that.up_pipe.complete && that.up_mod.complete
          && that.down_mod.complete && that.down_pipe.complete) {
          //删除定时器
          clearInterval(timer);
          //图片全部加载完成后，运行此函数
          fn();
        }
      }, 50)
    }
  }
