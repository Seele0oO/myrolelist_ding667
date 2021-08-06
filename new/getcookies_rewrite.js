
// 京东自动签到
https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
hostname = api.m.jd.com,music.163.com,clientaccess.10086.cn

//网易云音乐
^https:\/\/music.163.com\/weapi\/user\/level url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/neteasemusic/neteasemusic.cookie.js
// hostname = music.163.com

// //10086
^https:\/\/clientaccess.10086.cn\/biz-orange\/LN\/uamrandcodelogin\/autoLogin url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.fee.cookie.js
^https:\/\/clientaccess.10086.cn\/biz-orange\/BN\/realFeeQuery\/getRealFee url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.fee.cookie.js
// hostname = clientaccess.10086.cn

// //10086签到
// ^http:\/\/wx.10086.cn\/website\/taskCenter\/index\? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.cookie.js
// ^http:\/\/wx.10086.cn\/website\/taskCenter\/sign\? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.cookie.js

// hostname = wx.10086.cn
// //米游社
// hostname = api-takumi.mihoyo.com
// ^https:\/\/api-takumi.mihoyo.com\/apihub\/api\/getGameList url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/mihoyo/mihoyo.cookie.js

