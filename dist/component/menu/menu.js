let _compData = {
  '__menu__.isHide': true,
  '__menu__.grids': [{
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
  }]
};

let _compEvent = {
  __menu_close: function() {},
  __menu_show: function() {
    this.setData({ '__menu__.isHide': !this.data.__menu__.isHide });
  },
};

let menuPannel = {
}

function MenuPannel() {
  // 拿到当前页面对象
  let pages = getCurrentPages()
  let curPage = pages[pages.length - 1]

  // 把组件的事件“合并到”页面对象上
  Object.assign(curPage, _compEvent)

  this.__page = curPage
  Object.assign(curPage, menuPannel) // 小程序最新版把原型链干掉了。。。换种写法

  // 附加到page上，方便访问
  // curPage.menuPannel = this
  // 把组件的数据“注入”到页面的data对象中
  curPage.setData(_compData);
  console.log(curPage);
  return this;
}

module.exports = {
  MenuPannel
}