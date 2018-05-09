var util = require('../../utils/util.js');
var config = require('../../utils/config.js').default;

const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isLoading: false,
    index: -1,
  },
  // 事件处理函数
  bindViewTap: function (e) {
    var index = e.currentTarget.dataset.id;
    var i = index === this.data.index ? -1 : index;
    this.setData({
      index: i,
    });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    new app.MenuPannel();
    
    var me = this;
    me.setData({ isLoading: true });
    var url = 'http://api01.bitspaceman.com:8000/post/leifeng?apikey=' + config.apiKey + '&kw=' + config.kw + '&pageToken=' + config.pageSize;
    util.get({
      url,
      success: function(res) {
        me.setData({ list: res.data, isLoading: false });
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
