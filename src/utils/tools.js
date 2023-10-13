
const ServerUrl = process.env.API_HOST
const GameUrl = "http://cdn10.cdngoto.com/hamini_0621_1640_release/index.html?channel=com.ludo.buster.gw"
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    // var query = "https://hamini.net/?p0=116jfs9v&p1=%7B%7Bcampaign.name%7D%7D&p2=%7B%7Bcampaign.id%7D%7D&p3=%7B%7Badset.name%7D%7D&p4=%7B%7Badset.id%7D%7D&p5=%7B%7Bad.name%7D%7D&p6=%7B%7Bad.id%7D%7D"
    console.log(query)
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return "";
}

//name 字段名   
function getCookie(name) {
    if (document.cookie.length > 0) {
        var start = document.cookie.indexOf(name + '=')
        if (start !== -1) {
        start = start + name.length + 1
        let end = document.cookie.indexOf(';', start)
        if (end === -1) end = document.cookie.length
        return unescape(document.cookie.substring(start, end))
        }
    }
    return ''
}

async function download(){
    let adj_t = getQueryVariable("p0")
    let campaign_name = getQueryVariable("p1")
    let campaign_id = getQueryVariable("p2")
    let adset_name = getQueryVariable("p3")
    let adset_id = getQueryVariable("p4")
    let ad_name = getQueryVariable("p5")
    let ad_id = getQueryVariable("p6")
    let fbpid = getQueryVariable("fbpid")
    let fbclid = getQueryVariable("fbclid")
    let cookpid = getCookie("_fbp")
    //console.log(campaign_name, fbclid)
    // chnup("click")
    // // 获取链接参数.进行拼接
    let url_host = "https://dapv7y4era0s5.cloudfront.net/ludobuster/LudoBuster_sign.apk"
    let download_url = `https://ludobuster.go.link/?adj_t=15sd8h0j&adj_campaign=${campaign_name}%20%28${campaign_id}%29&adj_adgroup=${adset_name}%20%28${adset_id}%29&adj_creative=${ad_name}%20%28${ad_id}%29&adj_redirect=${url_host}&adj_fbclid=${fbclid}&adj_fbpid=${cookpid}`
    // let download_url = "../../../../static/pkg/SlotsMania.apk"
    console.log(download_url)
    window.location.href = download_url
    return
}

async function download_v2(){
    let adj_t = getQueryVariable("p0")
    let campaign_name = getQueryVariable("p1")
    let campaign_id = getQueryVariable("p2")
    let adset_name = getQueryVariable("p3")
    let adset_id = getQueryVariable("p4")
    let ad_name = getQueryVariable("p5")
    let ad_id = getQueryVariable("p6")
    let fbpid = getQueryVariable("fbpid")
    let fbclid = getQueryVariable("fbclid")
    let cookpid = getCookie("_fbp")
    //console.log(campaign_name, fbclid)
    // chnup("click_v2")
    let url_host = "https://dapv7y4era0s5.cloudfront.net/ludobuster/LudoBuster_sign.apk"
    let download_url = `https://ludobuster.go.link/?adj_t=15sd8h0j&adj_campaign=${campaign_name}%20%28${campaign_id}%29&adj_adgroup=${adset_name}%20%28${adset_id}%29&adj_creative=${ad_name}%20%28${ad_id}%29&adj_redirect=${url_host}&adj_fbclid=${fbclid}&adj_fbpid=${cookpid}`
    // let download_url = "../../../../static/pkg/SlotsMania.apk"
    console.log(download_url)
    window.location.href = download_url
    return
}

async function download_v3(){
    let adj_t = getQueryVariable("p0")
    let campaign_name = getQueryVariable("p1")
    let campaign_id = getQueryVariable("p2")
    let adset_name = getQueryVariable("p3")
    let adset_id = getQueryVariable("p4")
    let ad_name = getQueryVariable("p5")
    let ad_id = getQueryVariable("p6")
    let fbpid = getQueryVariable("fbpid")
    let fbclid = getQueryVariable("fbclid")
    let cookpid = getCookie("_fbp")

    let url_host = "https://dapv7y4era0s5.cloudfront.net/ludobuster/LudoBuster_sign.apk"
    let download_url = `https://ludobuster.go.link/?adj_t=15sd8h0j&adj_campaign=${campaign_name}%20%28${campaign_id}%29&adj_adgroup=${adset_name}%20%28${adset_id}%29&adj_creative=${ad_name}%20%28${ad_id}%29&adj_redirect=${url_host}&adj_fbclid=${fbclid}&adj_fbpid=${cookpid}`
    console.log(download_url)
    window.location.href = download_url
    return
}

async function loadPage(){
    chnup("load")
    return
}

function chnup(event) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", ServerUrl + "/api/sys/chnup/", true);
    if(event == "load"){
        xmlhttp.send("action=" + event + "&page=" + encodeURIComponent(window.location.href) + "&chn=" + "com.ludo.buster.gw" + "&refer=" + document.referrer);
    } else{
        xmlhttp.send("action=" + event + "&page=" + encodeURIComponent(window.location.href) + "&chn=" + "com.ludo.buster.gw" + "&refer=" + document.referrer + "&action_category=click");
    }
}

function goLoginLimit() {
    let msg = localStorage.getItem("clickTime");
    let nowTime = new Date().valueOf()
    console.log(msg, nowTime)
    if (msg == null || msg == "undefine") {
        console.log("===")
        localStorage.setItem("clickTime", nowTime);
        let url = GameUrl
        window.location.href = url
        return
    }
    let clickTime = parseInt(msg);
    if (nowTime - clickTime < 3000) {
        console.log("time < 3s")
        return
    }
    localStorage.setItem("clickTime", nowTime);
    let url = GameUrl
    window.location.href = url
    return
}

export {
    loadPage,
    chnup,
    download,
    getQueryVariable,
    goLoginLimit,
    download_v2,
    download_v3,
}