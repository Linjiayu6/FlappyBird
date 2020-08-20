// 图片集合
imgs = {
    //创建图片
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
      this.bg.src = './img/bg.jpg';
      this.grass.src = './img/banner.jpg';
      this.title.src = './img/head.jpg';
      this.bird0.src = './img/bird0.png';
      this.bird1.src = './img/bird1.png';
      this.up_bird0.src = './img/up_bird0.png';
      this.up_bird1.src = './img/up_bird1.png';
      this.down_bird0.src = './img/down_bird0.png';
      this.down_bird1.src = './img/down_bird1.png';
      this.startBtn.src = './img/start.jpg';
      this.up_pipe.src = './img/up_pipe.png';
      this.up_mod.src = './img/up_mod.png';
      this.down_pipe.src = './img/down_pipe.png';
      this.down_mod.src = './img/down_mod.png';
      var that = this;
      //添加定时器，判断图片是否加载完成
      var timer = setInterval(function() {
        if (that.bg.complete&&that.grass.complete
          &&that.title.complete&&that.startBtn.complete
          &&that.bird0.complete&&that.bird1.complete
          &&that.up_bird0.complete&&that.up_bird1.complete
          &&that.down_bird0.complete&&that.down_bird1.complete
          &&that.up_pipe.complete&&that.up_mod.complete
          &&that.down_mod.complete&&that.down_pipe.complete) {
          //删除定时器
          clearInterval(timer);
          //图片全部加载完成后，运行此函数
          fn();
        }
      }, 50)
    }
  }
  