//知乎
# 知乎处理用户信息
^https?:\/\/api\.zhihu\.com\/people\/ url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎信息流去广告
^https?:\/\/api\.zhihu\.com\/(moments|topstory)(\/|\?)?(recommend|action=|feed_type=)(?!\/people) url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎回答列表去广告
^https?:\/\/api\.zhihu\.com\/v4\/questions url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎获取黑名单
^https?:\/\/api\.zhihu\.com\/settings\/blocked_users url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎官方消息去广告
^https?:\/\/api\.zhihu\.com\/notifications\/v3\/(message\?|timeline\/entry\/system_message) url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎预置关键词去广告
^https?:\/\/api\.zhihu\.com\/search\/preset_words\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 优化软件配置
^https?:\/\/appcloud2\.zhihu\.com\/v\d+\/config url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎热搜去广告
^https?:\/\/api\.zhihu\.com\/search\/top_search\/tabs\/hot\/items url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎热榜去广告
^https?:\/\/api\.zhihu\.com\/topstory\/hot-lists?(\?|\/) url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎评论去广告
^https?:\/\/api\.zhihu\.com\/(comment_v5\/)?(answers|comments?|articles|pins)\/\d+\/(root_|child_)?comments? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎回答内容优化
^https?:\/\/www\.zhihu\.com\/appview\/v2\/answer\/.*(entry=(?!(preload-topstory|preload-search|preload-subscription)))? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎屏蔽关键词解锁
^https?:\/\/api\.zhihu\.com\/feed-root\/block url script-analyze-echo-response https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zhihu/zhihu_plus.js
# 知乎去除最常访问
^https?:\/\/api\.zhihu\.com\/moments\/recent url reject-dict
# 知乎去除回答下的广告
^https?:\/\/www\.zhihu\.com\/api\/v4\/answers\/\d+\/recommendations url reject-dict
# 知乎其他广告拦截
^https?:\/\/api\.zhihu\.com\/(notifications\/v3\/count|v3\/package|me\/guides|drama\/living-info|ad|fringe|commercial|market\/popovers|.*featured-comment-ad) url reject-dict
# 知乎拦截部分预加载
# ^https?:\/\/www\.zhihu\.com\/appview\/(p|v2\/answer|zvideo)\/.*entry=(preload-topstory|preload-search|preload-subscription) url reject-dict
# 知乎网页版去广告
^https?:\/\/www\.zhihu\.com\/api\/v4/(questions|anwsers)\/\d+/related-readings url reject-dict
^https?:\/\/www\.zhihu\.com\/api\/v4\/hot_recommendation url reject-dict
^https?:\/\/www\.zhihu\.com\/commercial_api\/banners_v3\/mobile_banner url reject-dict
^https?:\/\/zhuanlan\.zhihu\.com\/api\/articles\/\d+\/recommendation url reject-dict
# 知乎品牌提问广告
^https?:\/\/api\.zhihu\.com\/brand\/question\/\d+/card\? url reject-dict
^https?:\/\/www\.zhihu\.com\/api\/v\d+\/brand\/question/\d+/card\? url reject-dict
# 屏蔽消息页面上拉的用户精选
^https?:\/\/api\.zhihu\.com/moments/hybrid\? url reject-dict
# 知乎下发的配置，如皮肤等，目前已知会导致Tab页管理功能失效
^https?:\/\/api\.zhihu\.com\/ab\/api\/v1\/products\/zhihu\/platforms\/ios\/config url reject-200

# hostname = www.zhihu.com,api.zhihu.com,appcloud2.zhihu.com,zhuanlan.zhihu.com
hostname = *.zhihu.com


//bilibili
# 去除动态中的话题
^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr url reject-dict
# 去除动态中的最常访问
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/mix_uplist url reject-dict
# 可能的一些推广(beta)
^https?:\/\/api\.bilibili\.com\/pgc\/season\/app\/related\/recommend\? url reject-dict
# 推荐去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 追番去广告
^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 直播去广告
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 动态去广告
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_(history|new)\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 开屏去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 标签页处理
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 我的页面处理
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 漫画去广告
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/Flash url reject-dict
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/ListFlash url reject-dict


https://app.bilibili.com/x/v2/(splash|search/(defaultword|square)) url reject-200
https://api.bilibili.com/x/v2/dm/ad url reject-200
https://app.bilibili.com/x/v2/space\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20space.js
https://app.bilibili.com/x/resource/show/tab\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
https://app.bilibili.com/x/v2/feed/index\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
https://app.bilibili.com/x/v2/account/mine\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
https://app.bilibili.com/x/v2/view\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
https://api.bilibili.com/x/v2/reply/main\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20reply.js
https://api.live.bilibili.com/xlive/app-room/v1/index/getInfoByRoom\?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20live.js


hostname = *.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com


# 去微博应用内广告 (By yichahucha)
#src同上
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

# 去微信公众号广告 (By Choler\NobyDa)
#src同上
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js
^(http|https):\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url response-body "advertisement_num":\d,"advertisement_info":\[.+\], response-body "advertisement_num":0,"advertisement_info":[],


