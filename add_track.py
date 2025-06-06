

from bs4 import BeautifulSoup
import os
import shutil

file = open("./dist/index.html", "r")

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
  fbq('init', '700328016089194');
  fbq('track', 'PageView');"""
new_tag1.string = new_str
bs.head.append(new_tag1)

time_str = """
var timestamp = new Date().getTime();
localStorage.setItem("initWebTime", timestamp)
var xmlhttpInit = new XMLHttpRequest();
xmlhttpInit.open("POST", "https://gate.highrummy.online" + "/api/sys/chnup/", true);
xmlhttpInit.send("action=load_index" + "&page=" + encodeURIComponent(window.location.href) + "&chn=" + "com.hind.u777s.lots" + "&refer=" + document.referrer);

"""
time_tag1 = bs.new_tag('script')
time_tag1.string = time_str
bs.head.insert(0, time_tag1)

# link_tag = bs.new_tag('link')
# link_tag["rel"] = "manifest"
# link_tag["href"] = "/manifest.json"
# bs.head.insert(0, link_tag)

# meta_tag1 = bs.new_tag("meta")
# meta_tag1["name"] = "apple-mobile-web-app-capable"
# meta_tag1["content"] = "yes"
# meta_tag2 = bs.new_tag("meta")
# meta_tag2["name"] = "apple-mobile-web-app-status-bar-style"
# meta_tag2["content"] = "black-translucent"
# bs.head.insert(0, meta_tag1)
# bs.head.insert(0, meta_tag2)

with open("./dist/index.html", "w") as f:
    f.write(str(bs))
file.close()
