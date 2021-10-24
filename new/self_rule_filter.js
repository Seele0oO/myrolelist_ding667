# 知乎去广告，以下规则请放置在filter_local最顶部
IP-CIDR,118.89.204.198/32,REJECT
IP6-CIDR,2402:4e00:1200:ed00:0:9089:6dac:96b6/128,REJECT
HOST,118.89.204.198,REJECT
# 知乎去广告，以下规则的位置越前方越好
HOST,mqtt.zhihu.com,reject
HOST,sugar.zhihu.com,reject
HOST,appcloud2.in.zhihu.com,REJECT
USER-AGENT,AVOS*,REJECT

RULE-SET, https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/ZhihuAds/ZhihuAds.list
RULE-SET, https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Advertising/Advertising.list



IP-CIDR,192.168.0.0/16,DIRECT
IP-CIDR,10.0.0.0/8,DIRECT
IP-CIDR,172.16.0.0/12,DIRECT
IP-CIDR,127.0.0.0/8,DIRECT
GEOIP,CN,DIRECT
FINAL,PROXY