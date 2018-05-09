const moment = require('moment.min.js');
moment.locale('en', {
  longDateFormat: {
    l: "YYYY-MM-DD",
    L: "YYYY-MM-DD HH:mm"
  }
});

export const dateFormat = function(log, rule) {
  return moment(log).format(rule || 'L');
}

export const get = function({ url, data, success }) {
  wx.request({
    url,
    header: {
      "Content-Type": "application/json"
    },
    data: data || {},
    success,
  })
}