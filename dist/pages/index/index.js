//index.js
// 获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎来到前端秘密花园！',
    userInfo: {},
    grids: [{
      name: '新闻',
      url: '../new/new',
    }, {
      name: '音乐',
      url: ''
    }, {
      name: '视频',
      url: ''
    }, {
      name: '读书',
      url: ''
    }, {
      name: '学习',
      url: ''
    }, {
      name: '记事本',
      url: ''
    }, {
      name: 'TodoList',
      url: ''
    }, {
      name: '游戏',
      url: ''
    }, {
      name: '动画',
      url: ''
    }],
  },
  // 事件处理函数
  bindViewTap: function () {
    console.log('1');
    wx.navigateTo({
      url: '../yuedu/yuedu'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    // 调用应用实例的方法获取全局数据
    // 该接口即将废弃
    // app.getUserInfo(function (userInfo) {
    //   // 更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
  }
})
