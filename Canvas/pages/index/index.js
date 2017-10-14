//index.js
let ctx;
Page({
  data: {
    pen: {
      lineWidth: 5,
      color: "#ff9900"
    }
  },
  onLoad: function (options) {
    ctx = wx.createCanvasContext("myCanvas");
    ctx.setStrokeStyle(this.data.pen.color);
    ctx.setLineWidth(this.data.pen.lineWidth);
    ctx.setLineCap('round');
    ctx.setLineJoin('round');
  },
  // 定义一个绘制起始坐标的方法
  touchStart(e) {
    ctx.setStrokeStyle(this.data.pen.color);
    ctx.setLineWidth(this.data.pen.lineWidth);
    ctx.moveTo(e.touches[0].x, e.touches[0].y)
  },
  //一次性绘制起点到绘制结束的方法
  touchMove(e) {
    let x = e.touches[0].x;
    let y = e.touches[0].y;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.draw(true);
    ctx.moveTo(x, y);
  },
  //拿到画笔的信息
  penDraw(e) {
    this.setData({ 'pen.lineWidth': e.target.dataset.param });
  },
  colorDraw(e) {
    this.setData({ 'pen.color': e.target.dataset.param });
  }
});
