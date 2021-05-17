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
    wdwhdhdArr.push("{\"app_id\":\"41\",\"Pkg-Name\":\"com.whddy.merge.puzzle.game\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"br, gzip, deflate\",\"iv\":\"5481649756531687\",\"Content-Type\":\"application/json;charset=utf-8\",\"X-Unity-Version\":\"2019.3.10f1\",\"User-Agent\":\"game/4 CFNetwork/978.0.7 Darwin/18.7.0\",\"Host\":\"tinygame-api.beijingqianji.com\",\"lang\":\"cn\",\"Accept-Language\":\"zh-cn\",\"Accept\":\"*/*\",\"Content-Length\":\"216\"}")
    wdwhdbodyArr.push("Z+Yb6yqOxpmv8IgNUOGqTTVCCJfYizmc7c1GdyLZDPR1CqzC8QKliInG1y/P0jjo52+Or3GcCwmCJmztRtwhEuSN9vpYt1OQTUzzIrLqByrlL6T+ia06V41Nwbz2zU0MlmQeuXn5XozKMIqgb8Xo4g0KfQxGCTrtJ4gdi/+5dYxffjmVT2IKv2cZTycifWnyQEOzFILbjpM0jgY5xwfMNw==")
    wdwhdspbodyArr.push("{\"message\":\"3kARUddHXH257XQa5erJn4htBflS7S5LakR0iI8PZjbTQ7pwYPbpfehtBqTmFswKs11d6vlrtT+1pZ1jE1JtupLRbh8yibHBBlbcYqOF63iDkraEKLwypkBzoq7a8FxgXEI4ThEDmnQarr7Asdi7XQFVDGLxpPTk8+oCDxWlMN8fObDtXX806tg\\/+eWEnLz4LSSw9i+9XOlGiuhaEcPx2EJ0C94fUuTFAOTlFWFz6g6xJAKMJnVD0FRuh+RqjqMRMyLGBdjTW7MmsbF\\/YAhhf8GkOZDT8tHZ8JR7LjziIzkCe970AxqccLNzwIdcfkTM4PkS27pN2CtwkSne\\/XvYJd2vpARJ868COsC0gs0tyRVfm\\/yK3n8sOx+9NLHwTZWNG+8h6X3xtezuy\\/jvziPgtO24ejR95jabnlLbzW4E\\/MUhtG1G5ZutC2O4dezsv6FdIW4+R45RpUSJZG15k\\/emoAuExcrs+hc0rdhqdxJ+UAKpsh+xv8Ewu7OGkedhYGSOT90Y6O4Gi7Yw4AvxkzUgLib62\\/gFOdVgcqhMKqrLdhRmYxk8P2oI1d4l16hgJ3NMvrgVxZqnk2dXwyrC9GUxqbKOY0WcrS3flx1QnMYrRw3SA4MqafFLTsanj0Hz\\/foRhsawELzGV0mFxIah0w9VB51fDLYSqJhh71uqHRcn0pvK1UhHYwEl\\/PGSQUKbZfFDzyfkcFLQ88BLWPrTGrCYQ3OSykFGxURVawDoTYUpUIqhu2\\/V+5CjfEGFktzAc+PzN7vZ2CtF4sB3i6RuqcC4yISzl3GBGCNg2KX03GnHoGZaGZ6Q1jr+6NANK0SOG\\/PVJXTknWkZsRTWEj2Emmu98FOxF+vx47L5J4x3JKCMceooDpUp1ZzCeuUSN442Mjp\\/XeO2axBb8IlgVzisN8eaa0DOZhLcoQI3QaF8C\\/+JeRBSmnbB5I7jIXf0KT\\/ROkyuIN3IdH4s+fY2VlFfrehhQOQmSOqrZdTxSWB5BPb3y1nnd6KKavyAc20etEo6RbTtcMhhVl+ZAzdbLUMeWVYQRC3zQb9CzqmaNNCEd4pMdLzgtm2P+lCvdj9L80a08f4dIDvx8xB+h3B+PPaQa8jDSF4bXGZMJBkhvDIHCsXDPS9W6\\/L4JJXoY5mPaXbAZZxLieXfuijo6PAETu5WcCanPekh0b2Q1QoBjDrOeU+GpDqLmBkLO6\\/Y3X8R1fZHl46RNAJRlhBI71s7ZISoSW05JwbxqXUDrv2MFb3Vae5heIKA5jIx3P7J3u14dsM+pcvSWTTRmbldYurC1tAZ+vf+jFyCIe8ZLzckpFHO0RoPzGwg03KqOwJ8sIJs+8BmpLp0qtRBVe7lGFfDWn637iScB3RwXjrSs813H4EnQjNPs591fiMH4UgVu31HGVazG4ELnVI3UB3RPI+eYhPy2Iz5GN6n8KwryHn9j\\/2e+QRMmOEDgU3IGQYdglFKOAMotXxvF\\/O60U2CHv1+xmr0HI6\\/22KCa+GZZ7ELSdbw8KGk+rc0oA4MBPVqZG5vqQ7npBJJnyKrMv4s9X3RZGsa3gfnKS7nBq8L9hr3JNd7Inu+5iXCWrIJFXd5OMcT4vhSjyFbVD\\/fKsU2VA47uYAxY2k9+7ES4qZPIuq43RLqFgvw41JfonyhxhUHBTELGu4mX4QqMFHttpmb+7aQ8s+CwJPBE3dYSj8TLf92CUQ9SzMwQGGlWV75l+PTErgOxBLxh6gw1MuQ79PPFNvayU8g+M0W6sOqFAV2fHY0AAqfUvxHIKJRSMLqS\\/bkAeUqKvCBLeOl5CFdaqMSyJRMVT9fKJJ1Di8pRSImHBwg7e3P4blm9Px7a2yfQZ+zjNaj5I5Xxd2PfFQERCo1Gvya0jQVEOHfJilUlJ1bP8YD\\/UjaCD+kVy6JcSfvu2AzftostFjOskmGj+MvM3FlBCERKiA7j9pZaSQoIaMK\\/C0aIt4DK8JdWb3HcoXTT3\\/w+1Vk9uPP1eVW4xs33TQrEyw9jpU+afpEC\\/kb7Y+IcyzN1jKrBKmZnp7iMktdN4+rnRwgSgUnCXEk99pE15qWrmZ1rDxPT56004jIczOX3laRvxqWmUi\\/dc1kVCMYx09w51nQ\\/ue3xsAPM25DDZ01yGjyrxnkOKhQpQ79iELcOROTfrU5VwpuhxrYgFvou09nd4QZc52MdV65JzBQy79ekkeDjibKvatQn4sDfLYF3qUH9yjmJg0NvU0dxExJApZS6DU29HUguGaG1Ho240FLrqffg0ugUIYeRz6JwYrqUmctQyMuiKXM\\/GdfKGK65jzIoyzXYEinvRXJHgUifKI8lMSYvdrug\\/s4abzfFhFlbGSQxhUSHA+mkzo4pTLnRawYWdattI48F0PVzlnPFplOOq56RoiVnskuzdAZNUbOiHkkPDsTn5MnjHC5ckRVJ4m104v+WSBNfHhWszGXgw6lcZ0daZV18IakJfg38QTaxQYZbc746SABoT\\/S8YIHYvxJ\\/hHM3A8jHcvlBsB4ic47vOt6JrFjed6Mj6UFrVXY1jEwIMg02NU+O4Zv5H7LO7pRY\\/Xdnsyo\\/\\/59vldrvoDV2kX1TfjtHRe8VEZNqpU8TqY2\\/XJE0xFnMZG\\/i7K4KnxzpmSnSZnQGwPqB0gpaLv+rBpJnpqiATI0M3nwmoWPfcnSJSgDyyvbaIPCx206KsVtkJIxm0Ugs9V3tMbnb7iF0oJS5L3cio2EuCDclgqkdM3o30ZB9iSRwBFYxPETXkOKCEJs8AwfqJsIjZe54dsXhBrU1WtTWM6makkkT1TkLiIfrEdwLhSTWsX3KpUaWI+EPX3YdEpbmuiwG1PWkV704eXKvVEhl2WjpvZa6SwMEjL7\\/\\/PwjgefZygeDRov\\/\\/VlofQvWR2TzYZ5PiikSqXFrl2V6t9udIFc0\\/+oLOgsd6mHZs9eXdwruK3+xzRT3HB6jfC6Nwn4RBmxuPZ\\/MMSPEG7vv4\\/GZ\\/bbNNKV1YnN32UfanOQ0hU2SPsq0LYyTzown0IghL2ZyjQJ0uRAtjzx8\\/mz7TizfSJ92wqcEgaNyhVLLTHto18HhpXzG5DwX5HNKLRfqLPBqhZZsXewV716TB6GOE6DZhBEjsfOFqn7XU2PpKmKPcT2sKCrSXR\\/9F2ag3e4k9JkRb9gDTaM8ViUHUeHtGS3lqJg+Qk468dW5M50popqxugnpvYHQQeGOPhDGqPK7dxOHIKWZ\\/TECE2mtQqqH1g\\/lEGZKzSqdQQcJkhlH65yJ3MMt8MONRScoCotMzgJhC1LIVwffqEoL7jH+\\/lOJUY0OPVbM+1YdMnrm7OTEYkuqZ\\/j52mAw0wsvSlm5df47Ys8R0FK+JRvPioscsQNkGw0Ga2I0zXeHcoG4byHZpZWbis\\/FUoF7EXcs2THz0ocT0BwQWcnZ9Sud4UXfOpYBRTei3G+1kM4azkAZ10sVJk9Xj\\/tRidGcPTWh6mBamSCROgAu6mR0\\/PLnJb+rAZbta3cgp\\/ZOvJGmepwFq7wA4X3w4h7pRR\\/XELvlM05sWN7h8k4dp36dR3T498\\/mTrNeKnrxY18ovgKcrCG6fWMLMZ18rLFi+gchbVNq\\/jdl+iFaWK6sOPRvrQoRezlk+htPBzQ8LLpZ99dLG+qP9D4RbIJNJu8RgR6A5R0MVfi1pFgZ8+alY3mSFJSMWG0jDSi468wlz1RiMfUMxYzMPkC+G6swFt5KdBSZnT71SgCQRD4QxGCuuu9oojNOKSumclcav0VKkvG4YB8jkxtxgh8iuVQJOYpTqjA60g228Kero4hsnkvNgOVUo76MuC4t3H4vTFtwOa+B\\/Z7g\\/166e02lQzM6EovQTvNWA+ss1VmsdefGYXIawAOFiiXBcj2ij3LicB8g8zAkMK8M6tJguyP1vXnRKA1ejFKjJlh4neGeeIUFJvZQyLuEYp6NmgscZ3Xuf\\/f7IMpm3UNqw6q+SuQwccDRoaUCOJL+K\\/s4vcEkYZYyDF6Df4QYT3WHAxEf1Tw9TaOLsRXvxDB5IxOy4tpjCXglz1my6YVWWvLxI0OPVeKQQTYszvpewcAdi1HhCHgZ8Ikxt\\/jyMkRTOXewZLhuimY3eE8DyjzNrM+lK4QhQ0fvUbTd78jVRpfylJRnYSOAE2\\/dCbKaGDocZKTI9+POEGPFWQX85FQ4qlkBfLwAkcyEGkBfu0J\\/+GLa4QbDWwkfgMjhlMmoQvo7zURUBJaYSb5kgp9AYYcaAtLgKqXhT9VpPGC+S0Tj05s5ArDwSbMmZV+2E9qAHMlVK653RCpxx6LJ6oesuiLJdXCeV4jTmIL2yDRxbkv1i+ODgHgZ8yYzbdVPtSdlnM5\\/CpNma7ramMhueRv5zBW9\\/Vzd\",\"cypher\":3}")
    let wdwhdcount = ('1');
 
    console.log(`------------- 共${wdwhdhdArr.length}个账号-------------\n`)
    for(let j = 0; j < 217; j++) {  
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
