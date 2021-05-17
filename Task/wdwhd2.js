const $ = new Env('我的网红店');
let status;
status = (status = ($.getval("wdwhdstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const wdwhdhdArr = [],wdwhdbodyArr = [],wdwhdspbodyArr = [],wdwhdcount = ''
let wdwhdhd = $.getdata('wdwhdhd')
let wdwhdbody = $.getdata('wdwhdbody')
let wdwhdspbody = $.getdata('wdwhdspbody')
const sphd = {
'Accept' : `*/*`,
'Accept-Encoding' : `gzip, deflate, br`,
'Connection' : `keep-alive`,
'Content-Type' : `application/json`,
'Host' : `api-access.pangolin-sdk-toutiao.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
'Accept-Language' : `zh-Hans-CN;q=1`
};
!(async () => {
  if (typeof $request !== "undefined") {
    await wdwhdck()
   
  } else {
    let wdwhdcount = ('1');
    wdwhdhdArr.push("{\"app_id\":\"41\",\"Pkg-Name\":\"com.whddy.merge.puzzle.game\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"iv\":\"5481649756531687\",\"Content-Type\":\"application/json;charset=utf-8\",\"X-Unity-Version\":\"2019.3.10f1\",\"User-Agent\":\"game/4 CFNetwork/1220.1 Darwin/20.3.0\",\"Host\":\"tinygame-api.beijingqianji.com\",\"lang\":\"cn\",\"Accept-Language\":\"zh-cn\",\"Accept\":\"*/*\",\"Content-Length\":\"216\"}")
    wdwhdbodyArr.push("kDBy6fk2sGRuKzdiqoQrY1m6ymY+Sp7YgOh1Z7zTOkU9xHtZ8+uPDaDABcAY0CQF2/nZcG/P8STmya4wmsjNibedQ1fAkuqOi3Kh4m2FW7UNZ+h5ONUurV4NnsuU+/oPDb5O5inZzBZPabVm5dAtLwgJ5YcGI10Cz+HMfLK0IgvTrlu6d8XythoGToWKozQpbABeKbX1LchC5NwTFtysSw==")
    wdwhdspbodyArr.push("{\"message\":\"3xRDvqLSGJUT12OJuME9i57RQLceuIGn7fWz8Q0rUcNnf2nwg0eE22v6wiGGQ8Lg12A\\/KaGcS40ssIYfVVx+Ypuv4HFJeT33mYPHJCbS3ztBvPqh9Na20VNUiF37yq7ZMOBGQDj2Yt0OXFCK\\/XEOYMcQ2S4DFTuwUcSedalCdpWoUpfypqybdCpmfEoONKeEf\\/xIFQQnCxb8cV2yu6qzmZigwC1F1sMdH1qF6kuoHlobSgaO0d3RfhR1Y2Zdvx0\\/8MWLXrLjgRZvk\\/GWLGMY7Ca7cdtSIeU3S4QgRHiKd5Rd0SGZD0HeniQZnUvt17ljmnducni\\/+R2Ywh3oTnlWkCQmYqyJahxeCBFIo35qrcM737LHMejkK7P6GD+NNBzSEgMLhxC3xtyW0ZGlc2lfr+y5mN7+BAtiBKI5n58yxuh2VDaw995dO9Mkty7kweMsj\\/jzc1++ePZv7SuMHZlma1O5pj145u6Dg7YLeYD01Lg06LX6lsEEwe7+x\\/D\\/YwY9VFOLmwI4BmzoVuXkz1rwfgIbIPL9vt5T\\/rY\\/6Up5d6lxhmKJODHqUytwP7+MXjHku0ISJNZBShmrpYvGn0VxePJvcI+Ennr76Ah7Qzel6noEpt\\/kY8Cnhi+sbzluL8zD2sNESH1z7vqyvA9oiZgctvoLEdHWAnPTF6YyYnjAPvyMT\\/PNiztSz\\/ZZ1F+6snHpLvM\\/jT6oK\\/pyTGBoLgaEJjGNT43cCol96MwYRySwC8Bskl8lzTXO2ojmnQtRgN+CoTy4zSzuIbpd0LDnlMKBH27LfIu0CcTLTvEclTW4duGwcFmUTbf4GXcdBJStrWAYkY8w0Zc39FTGIOYDxFKWS5fwuW8zwvZdbBUzxDzoaTYBNW7F+H31pZ40MxdDGBxu1LfM1zF6Pl5FAxAMypjSFyKtg1KuG8xK1LIvZkT3FcnlPGv9N93SY8EcUfH9YNR1vWWNknSFH0nRsoozmZQM0U9NSwiFQkkxRgK\\/3qaj66j5vbo4EMLPh6n3EufLbHqVzHxw32IGjrTzLaIyrkMgfy3bpkzoKY6IpsrodNHRlMnseT0r6vUbmDQrHNrJE5fTVElCN3jUhk9dYn2k+8EYga4Dm+AVxj6MEUMUrj4MFgy3lTNARhEz5kRmtbz\\/dpo3U53JxupWXg\\/DDvg\\/Fcy2I9ahUffFJBeCYSEDCdexWcapOdiWXLm03x0WapfU4p3vd8C0Z8YCUEFGzQ5YzwetdjiaRlXXGWY4rKs9Y7RZXf+4YwS10TUBPPhRxbEAyDLot4NkQr+jSsU1IPYjNtGsw4oWGWHCahynSQ0GlW7wYkHM2ZZliPAI2b5yDqHGGhQTXFzIIWlWY5vBLB0in7D5\\/dr1Us\\/UEy0a7f3lb9cwh4EY2d4PldgQZ\\/Nq9Vmry8oaWlqd3z4grRO+nabeVPq4ynsPEZSUUY4g9WEb3+paRYYwIYcyvGhMxBKfSuM7m5SRpwCOHLCRxqc1PkiEkb9vbgytAFCyrADVmMBLft245ErnQP5ggG+pUGgTr2WV4c89EB0d9hjfCcfBGWKxEyvt35L4aG+W9jc\\/GuqYzsk00www4sGXIg+0y2GwFoVeoalvFb9nZ+4kDBXkeVnHqVuwm7jc54pD796ZqyJzz+nKVetP1ArNEJ0rAsh\\/uptUvnmHeu6DnU2DsUbozibXWiLOk+BEq6v9wUYf\\/aQ0fGxbixUqI5g5X+54c5kQKwxAn9gLpd88xTyL9sG7thTksGi2Gg5+GEIV+l3DUp02noZTnGinoVfKwmVaB0JdbalBZ33eU2ygYThh3SbyEt38mM+pkVtt5AjEP+AWE7+GngLexMhxNvjVha1G\\/5YSiQJC2zcXIwaIwn5ijUVYbN5scPub4AsA+Sc04ExAXhE3vDiPSeoHjPHX4KwSSex0stlov0nbnuiRDzmG5UQ6ka7+1njNZaPdb7JfcYyTU1ANVIB8XHzYDCqHQv6rAmcrR8cppRvTdace+Pg1U9PKR6HdkTSbFwhsWX\\/eRknFhjyo9el8zZmYUVfvQahFEWWNJFH6snXpsBy+EG2zPhvm8LAZabULpMTqEo6EyRbSjr6GFivH9bo97lgBbXnAsGRY+7UxoYIA+y2VZ+rzqm\\/ueHIUiCXVnY\\/D1oRlVQU4oFa7I0pLXTwRDbbKyWvQ92ySWwBvNSc9zXd9IiXwohT8Pn3xVs0crWgmtD8JcZXXtLhNwTkWuVtdSeFt5UbcR3\\/ulKCwOV+lRzCKPFmVmVnRxYaTf0xJQ+t7uCSExMd6f9wlGNF4Jh5Z2CUdSZGy20IJehGHo0nvJwvSMnhLo2d+qJwk59BGMr3vVX0N+XbhuSz0LgqDmrSeD61ez+cz6JEyL7ND\\/qEChEJX0ewWx8Og9cPH8pKXd6vPZ9inGlcqK3xXbX\\/C78alguP7kRUAd1T9A0XONoUFFIV2HIB7KXA\\/JNKxwryqzwLhzH2UNm0XI4zavIORf64ldzDdQwUCnwbHc8qnARjEHD\\/FxlnF7fcmrEQP8gHBPR96tdz6PyCIzRcZfzZ3gVvBUotfkRybJcIbm9\\/O+xeGyCIuRe0C8Z2nGU53R7P3tV2+ZZwJsc184PBE6lgWLcx\\/RNpkKC1BUXO9J2MfdvUReYN\\/\\/FEhx2rss+bcq\\/aiT1EiCuCUBj9x0r5Cq\\/UAWwRdMHfIfV1atpBJyRA29B8ilRf7gdnt5MUyRBa6QWuIR2lOPyJpyzhY7gsqVv174C+Erri\\/daRAnut+MIu945CNNLtg1F+pim7zaI759BQ1nwz4N8SsZwH0CcvsnaUaGtHFIJQt25\\/oYP\\/jybAkjClZwbO0CBsCnjZSPypBcQragjnG8IAH4CcMvR6FZG5epVGJl+jBekLWnLjgM7XIKMmprF5mm2TddONbFYGLywFpEHe09Iz1iUSJvzhFQ4ZjrbQdcBhoySuf6Vni6pxLzMy1BLGCOric3igq0alzcn+9ZUdmD1A8S5TRhi6FbwZHUT642HI1E1aJzFtftq0GSuESs4lwGLBfLNbDGAJCm0ZA5qvejHhRscNFeAw2T6R1DtQUxts9vz4MhJOO7RWAKa0rWZfhsTi9s280k\\/SWnHXzcdhhRWL9ryMOI+u2eXrTaRwXgSax8hY6R4SpxvqjBKm5eFefT5sibhoKn55KNRdFamJ2FG9YBApFfwqgx18J2A6RF\\/SBspWPED6qEABCWug0HPUA\\/PBmfy+CbmcNpywwS9G6xL1xY7j2w6rovmzS\\/XT5fFI+x7\\/VN0BLaivdiL2rhk53jlFRAeC7k72Dq2afoqVCjTHzg1PNLwsBWWWkQ3zWorQntpAua\\/H0iwf652WjvPVb5bL+ZsqLNQn8frPSt9O+655BUbisAv870rjhfB2VUZJ4Uo+LBw6ZkcoliZvNG6WBQyH9767o5MUmfAzMkR31RPV2yFR2fEAtB8naYHhX\\/XNHdsKJMZ4fnFGzcB6IwZalwf\\/Bprvd5OFjqTEVYDyeLUqfz4bqEcQ7cjPY\\/lePFNO0B7V0i75c0Xo7pBrLHkU7ohzobLEN6B3fcDE5gq8rTwFNza+S4KEdDTovxkUR8OD1vG9DqRNM5TXJ466Cl\\/cpvJK3LdQ2DR9QNklxZXDHceCo9XxxfJ\\/EWE7488FzMaLcT8QbeOjLxu4q7C0e6ci\\/EG1lSKe0lWF+ywrXps1yJ+YMnwRDQInsqlxogsPQv13o0boXvxAhWaumLAfOwuyay4Nc4GoNW88LkpNNQ7a870ZR4pkInpqvwsvHc8uCMQtj1hVTeOBxJWNUz93s34FkH2Dmg73wL0ds0U1NLzK6AD76dsT0xikXXxotAXTsnvrX06oMvaHWgknwChrLUyT\\/wKvTRM5JKhJf9O\\/idx8AgxfdvoUSHlqW47lNQcMArO9XXABDdSDMtI2wy\\/EjOS9JoZQQrbMC1F\\/nlANJTt5kSFBj0gUe7YvePfaU7YLy4AtobhO6nC0qIL9TZacChl8oBYYX4If3\\/apwDHOG8ErXVHqKloogwxPhhANnXjilAiD3lBQoSdQ\\/mqNrDPh\\/2EAq8PtTtosB1bMKL5gLUxo3MEbauHtlQ10s227ByJlqONiG2Qe4r76lHAr82wr6wlyOdzmARyiMRxo13NYrtpXJiESRpwtJ1bPoPm8zkPw4TEn7y\",\"cypher\":3}")
   
    
 
    console.log(`------------- 共${wdwhdhdArr.length}个账号-------------\n`)
    for(let j = 0; j < 950; j++) {  
      console.log(`第${j+1}次运行`);
      for (let i = 0; i < wdwhdhdArr.length; i++) {
        if (wdwhdhdArr[i]) {
          wdwhdhd = wdwhdhdArr[i];
          wdwhdbody = wdwhdbodyArr[i];
          wdwhdspbody = wdwhdspbodyArr[i];
          $.index = i + 1;
          console.log(`\n开始【我的网红店${$.index}】`)
   
    
         await wdwhdsp();
         

    
    
  }
}

    }}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//数据获取


function wdwhdck() {
   if ($request.url.indexOf("imp_callback") > -1) {
 
  const wdwhdhd = JSON.stringify($request.headers)
        if(wdwhdhd)    $.setdata(wdwhdhd,`wdwhdhd${status}`)
$.log(wdwhdhd)
const wdwhdbody = $request.body
        if(wdwhdbody)    $.setdata(wdwhdbody,`wdwhdbody${status}`)
$.log(wdwhdbody)
   $.msg($.name,"",'我的网红店'+`${status}` +'红包数据获取成功！')
  }else if ($request.url.indexOf("reward_video/reward/") > -1) {
 
const wdwhdspbody = $request.body
        if(wdwhdspbody)    $.setdata(wdwhdspbody,`wdwhdspbody${status}`)
$.log(wdwhdspbody)
   $.msg($.name,"",'我的网红店'+`${status}` +'视频数据获取成功！')
  }
}

//红包
function wdwhdhb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://tinygame-api.beijingqianji.com/en/check/imp_callback',
        headers : JSON.parse(wdwhdhd),
        body : wdwhdbody,
}
      $.post(url, async (err, resp, data) => {
        try {
    //const result = JSON.parse(data)
        if(resp.statusCode == 200){
  $.log(`\n我的网红店:成功领取红包`)
} else {

        $.log(`\n我的网红店:领取失败${data}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


function wdwhdsp(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : 'https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/',
        headers : sphd,
        body : wdwhdspbody,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.cypher == 3){
  $.log(`\n我的网红店视频观看成功`)
    await $.wait(15000)
   await wdwhdhb();
    
} else {

        $.log(`\n我的网红店视频观看失败:${data}`)
 
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
