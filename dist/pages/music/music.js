var util = require('../../utils/util.js');
var config = require('../../utils/config.js').default;

// audio.js
const app = getApp();
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');
    console.log(this.audioCtx, this.audioCtx.detail);
  },
  data: {
    list: [],
    isLoading: false,
    status: 0,
    currentTime: '0:00',
    duration: '0:00',
    currentProgress: 0,

    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
  clickAudio: function() {
    if (!this.data.status) {
      this.audioPlay();
    } else {
      this.audioPause();
    }
  },
  audioPlay: function () {
    this.audioCtx.play();
    this.setData({ status: 1 });
  },
  audioPause: function () {
    console.log(2);
    this.audioCtx.pause();
    this.setData({ status: 0 });
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  funplay: function () {
    console.log("audio play");
  },
  funpause: function () {
    console.log("audio pause");
  },
  funtimeupdate: function (u) {
    var progress = (u.detail.currentTime / u.detail.duration) * 100;
    this.setData({
      currentTime: util.secToTime(u.detail.currentTime),
      duration: util.secToTime(u.detail.duration),
      currentProgress: progress + '%',
    });
  },
  funended: function () {
    console.log("audio end");
  },
  funerror: function (u) {
    console.log(u.detail.errMsg);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    new app.MenuPannel();
  }
})