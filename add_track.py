
# 解析dist的index页面,添加脚本到index的head中.

from bs4 import BeautifulSoup

file = open("./dist/index.html", "r")
# 通过html.parser解析器把我们的HTML解析成了一棵树

bs = BeautifulSoup(file, "html.parser")
# 1.Tap
# bf.new_tag("link" ,rel="icon", href="favicon.ico", type="image/x-icon")
new_tag1 = bs.new_tag('script')
print(new_tag1)
new_str = """!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '307602614935411');
  fbq('track', 'PageView');"""
new_tag1.string = new_str
bs.head.append(new_tag1)

time_str = """
var timestamp = new Date().getTime();
localStorage.setItem("initWebTime", timestamp)
var xmlhttpInit = new XMLHttpRequest();
xmlhttpInit.open("POST", "https://happyacerummy.win" + "/api/sys/chnup/", true);
xmlhttpInit.send("action=load_index" + "&page=" + encodeURIComponent(window.location.href) + "&chn=" + "com.sudo.match.smha" + "&refer=" + document.referrer);

"""
time_tag1 = bs.new_tag('script')
time_tag1.string = time_str
bs.head.insert(0, time_tag1)

with open("./dist/index.html", "w") as f:
    f.write(str(bs))
file.close()