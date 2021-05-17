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
    wdwhdhdArr.push("{\"app_id\":\"41\",\"Pkg-Name\":\"com.whddy.merge.puzzle.game\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"iv\":\"5481649756531687\",\"Content-Type\":\"application/json;charset=utf-8\",\"X-Unity-Version\":\"2019.3.10f1\",\"User-Agent\":\"game/4 CFNetwork/1237 Darwin/20.4.0\",\"Host\":\"tinygame-api.beijingqianji.com\",\"lang\":\"cn\",\"Accept-Language\":\"en-us\",\"Accept\":\"*/*\",\"Content-Length\":\"216\"}")
    wdwhdbodyArr.push("R650TDL763/Hsl3dRhP042mxn5ON+q9ju2e8YbCtoXNbO5CF2RDdEN+jl9y91Pn10ddzbJpOcxsP01R3BUEnMZXerDNXknIBsihhVw1/lI6IZYhDkYyHIxPvcYeSKrLgAnGjDjloLA8z/C+xJJlDPkM5RY9QA5gVomGfSbt0TXG4g4b5r/hxXFyONhX8jkC/9Czw8+vutzXBbjHSw2RVUg==")
    wdwhdspbodyArr.push("{\"message\":\"3oNcHh3zHEvCuaeCncuNph9fBD5RTNX7DF4eDriRUi7GwTCdocVz+wsOJt7OPq2O0R7J0B08nE7g5+vieGmStnUMSHmJaB6BlAdUq69MfdBJ2dLwv\\/+fhXdP3YJUMTVaxXRKu70qQTGm1gu3dIJQeGIkEOGNbSZC\\/fpC2jkNrxmmkLOxNjNHdXz1YACFNVdvUV1K0QhQ+s9YeVgOFziDW\\/HaHYTYGUo89IWOVnCyq5Wy85DsyRjfL4s4kOV1UyDyI2lyRdJoV0HuTWgM8UqwyoOvJB80VhJkxxpCC4dsqgBwQL8T9rNlNJ1XlIvB1odSS3wyVmZOicNaBqghUO27tf5CzrREdxH2j0B4rGG+H\\/XTo8MSqD2uHImRmpoZDGB9onzmUNwFhmVRLuQquvQ+8G0qHbhyIb7ZoVeWjnQtI1O\\/tt1ydh04kdNQTJPs\\/t+ZEejqMiu1rMEiS0qKEoC5yGDH4RnMrdYS4Qh+uunQgzwOOdJibMSGxMa9CpFdTCDu+w0wZn\\/vCT4zVmbsqqf3R7bCf+nHmtYteSbog9lRW7NIvrJfv+9xzycLMHz9zkUaudaTDR7U4qVfN8rKr1Pas0DPThTXYNwqxTcI9\\/ejDnkL77O1mraCWkE8rBmXlMGgYGTOwffWtAnLo69gxIiwaTpqOdWVLK4XUTPNQpGArXiPhiQu8Q\\/iwSyBF8Oa6vRp5jUNLhI7lLIsRgl1Tk7AoMsm19FsWf01WiZ12cc+waIkam2JO2FK7lLSgtuzOeaLXkBFUP5YLHeExMAdApvhvINfJ8l+2pHcjPtQy+VLK\\/GrI\\/U0r4nl4nMvS9MRMOuNXuXwmV3aXbCKNYkybzHBfWv2+O5JkQ5\\/cKX3f+m9j7fRWdYVA0DycbWw4oe0k30IgpMoxRvEzHmV8LQZUeN6ki6cIHhpJj7wXg147pGP86BsbuzenBTfUvIZAapG\\/wNzhHTJY1ZI1GmgYPHN8mGfxN4HUoKpTYOBbOAJtHLSsFMFJkrqwwMTttYAN1Weh1KRyVg235Ds3lycLF8ZIdu0DHF\\/EFVfTxdDQ+7IRR5sKNY5rwLs7i5OunhVcAw0BKGMTCnrbvOuOAr4aO2hOwKQ1pRfohfoqDUIYfNj7ojS9\\/tq0PgHbEI5CzYXKmKUNtlWZhewObhTxBMoTj3XyIES3pr695gbmg4bdU0RdZ6btyKGIF\\/dxwYKOjEMH6n81MqvcIanCIpHOWoGUky9PcIJSRkhX6AhWjLk3Wlke2Lbdyfr26JEH51x5xnF8h2bodqd\\/4MCU5Faz7bgwoba28uySuvtL4kiH\\/kWb5glkZEhDsaXQ5At3fDQdK6NsdvQTihYGwRQBQiI5b\\/7WfZzvYf1z7h4lIJcYB95A6gdy8X1\\/aVliuDPqu1jjzsYavXcKZefzwnIarGpPuREKkOyvz4tlLBuWBIPKDEJ4CAThfrhjncQzISEjRctxAyB\\/vlZbETFWEfytbK19llx4TaPiWehLK3XoX51mXAsJMxZDAUKib5jqPyqjbK1874KJqf07qFLo8Yvg67ogNGTr\\/6d\\/rW\\/ZdSCOrklm5TRZavk7FT1UvCn7YnAFOyODnhn6IqpjGaC\\/crgwyG9JnZfDdcuZuzel0RS\\/T5JM4XWfLheMYllbnPjsR+kjyuCZsQg0cMhBvbWRB1fqMnI1LgH3KUTBAyEkl+DixRdGc7wCJy7+Qv1g02S95UHqMTiXMyaNreulxbRVPLP6\\/spXUjL68kX6081lTXzbsDbI\\/5AqvddcLNSBNcs0OvQAlE8puRLn2GCfbuK396VIKB9jP\\/cKxspF8woMkjkdtizKDM210nnigtV\\/2ZNUMzb2j1TsqUaAjD9yi4jvSFsl0BCpEvpRQDlTGmU2d8UnBpr0B44pZSCKrK\\/flphLlVq3ItqzpF9EvY6GDfNViYRzVfKGbMWhh8ijT\\/TvlohgcEBRVd6pY\\/3dGFYEu9oApZsbp7p4TS5cs7OkgErdur4o9Mtu3Er1andLredlQa1yVuwJCVllRQ+FR1XjLLAsF\\/D0BVy6SjxquFrkKEU8UWHTrN65ONRGQo+PdDItEkWbueqL9gXOXx5CGhJ5vmRihaCkrz2J\\/EPrBRhMq6abzSmXOGSVUobxn\\/Vh9cUFksPZ\\/cD173A7QjEHqB\\/r\\/uRBdimPkCmiz7xHh1eIvOWJuJl+VSUpp5t\\/qdhllYNMf3Xg3rIN46QEBNbuTDNk0O9MTHISXyZMIG0KqnvCtqB9IR4HoBS\\/W9rbB6x3YeGbbSISm\\/LWF+JnHfNs6R\\/y\\/\\/EPk4IXC0RvoaS1U8970\\/1KrSv8yrBwhT7xmZJcUHUpepptfJeUcgBlWfxW9DPRhAOr7g3Tkl5Zlbap7eDx6NYBoL7xV2incDw3rN\\/4d2MZo8IgaWaJkMr0lPFWWorbeIp6MkKMV0FlubFYQTwm8GCnIui0SOvohM80v+Bjl6plg5xd0NIqvd3lsfnMLTIe+g8Fk3810Nppj0DFlegA0gWHTeuyNQzCJOTCcHmFYD+ZwquV5iyxNSlJyFw5yOassy3dCXNedAjqy6XqiM9GniYhFCcBDp6m+6m9cH83Vl7P3h0k7wRrZpf3ja3UsOOFNn\\/x1hi1XTPcEPF4JZSvxx2CFPtdgr4Vw6G\\/VN7AFIyG6DIwYsNvnZeTrjIiqc0MGpm4z0JhGwWX\\/rRrk1otV3eB9e0OrZRK7LQSb7VcfbSltnDSXHXq+\\/6\\/ys0+1KTePL7N58iLhIfAee0MEW657m0GJ5rslRNFDA+c2mF+Da\\/v0JGugYqSKvl5ssL\\/zsRMvZBJJsQM7te\\/7M8oaO4OAnONR5YX45fdGnlwt3n1RptY9hYEQERNaqGNcmrFuXqzO8XeE5qWmE65JzQTl0FUxjWMnBuwY2t5lLpxGQ\\/MB4fbFvHAXhMhBj\\/tSUk122zQJWLMpK6mPwQUoMSmsVbsknhR5ohs8nfZwzBcT5RkL6ejehojorKfJXQoASOPo3PgyqZHoVSG4NQJeD8+1FNWw9CBxRLM3UwvbVRpgpQc+X6Vaw5K\\/s+G0lDBhSz\\/79\\/wA9mp7ANDa6vE5qNcKQ679o20sl00y\\/AlUzOFRdSOhGmKZgAhd5tZesSKle9A9dw5UTwLi27HY4Y6HKAU36mSmw+amSwb2dCsszVnWYMOQkgjwRRKGhtPHzzAapplDIMf7c\\/8kU0sq2AunoIaKjLibPNzUOTkmY116n3WbceaQSOb24WNLBE=\",\"cypher\":3}")
    let wdwhdcount = ('4');
    wdwhdhdArr.push("{\"app_id\":\"41\",\"Pkg-Name\":\"com.whddy.merge.puzzle.game\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"iv\":\"5481649756531687\",\"Content-Type\":\"application/json;charset=utf-8\",\"X-Unity-Version\":\"2019.3.10f1\",\"User-Agent\":\"game/4 CFNetwork/1220.1 Darwin/20.3.0\",\"Host\":\"tinygame-api.beijingqianji.com\",\"lang\":\"cn\",\"Accept-Language\":\"zh-cn\",\"Accept\":\"*/*\",\"Content-Length\":\"216\"}")
    wdwhdbodyArr.push("kDBy6fk2sGRuKzdiqoQrY1m6ymY+Sp7YgOh1Z7zTOkU9xHtZ8+uPDaDABcAY0CQF2/nZcG/P8STmya4wmsjNibedQ1fAkuqOi3Kh4m2FW7UNZ+h5ONUurV4NnsuU+/oPDb5O5inZzBZPabVm5dAtLwgJ5YcGI10Cz+HMfLK0IgvTrlu6d8XythoGToWKozQpbABeKbX1LchC5NwTFtysSw==")
    wdwhdspbodyArr.push("{\"message\":\"3xRDvqLSGJUT12OJuME9i57RQLceuIGn7fWz8Q0rUcNnf2nwg0eE22v6wiGGQ8Lg12A\\/KaGcS40ssIYfVVx+Ypuv4HFJeT33mYPHJCbS3ztBvPqh9Na20VNUiF37yq7ZMOBGQDj2Yt0OXFCK\\/XEOYMcQ2S4DFTuwUcSedalCdpWoUpfypqybdCpmfEoONKeEf\\/xIFQQnCxb8cV2yu6qzmZigwC1F1sMdH1qF6kuoHlobSgaO0d3RfhR1Y2Zdvx0\\/8MWLXrLjgRZvk\\/GWLGMY7Ca7cdtSIeU3S4QgRHiKd5Rd0SGZD0HeniQZnUvt17ljmnducni\\/+R2Ywh3oTnlWkCQmYqyJahxeCBFIo35qrcM737LHMejkK7P6GD+NNBzSEgMLhxC3xtyW0ZGlc2lfr+y5mN7+BAtiBKI5n58yxuh2VDaw995dO9Mkty7kweMsj\\/jzc1++ePZv7SuMHZlma1O5pj145u6Dg7YLeYD01Lg06LX6lsEEwe7+x\\/D\\/YwY9VFOLmwI4BmzoVuXkz1rwfgIbIPL9vt5T\\/rY\\/6Up5d6lxhmKJODHqUytwP7+MXjHku0ISJNZBShmrpYvGn0VxePJvcI+Ennr76Ah7Qzel6noEpt\\/kY8Cnhi+sbzluL8zD2sNESH1z7vqyvA9oiZgctvoLEdHWAnPTF6YyYnjAPvyMT\\/PNiztSz\\/ZZ1F+6snHpLvM\\/jT6oK\\/pyTGBoLgaEJjGNT43cCol96MwYRySwC8Bskl8lzTXO2ojmnQtRgN+CoTy4zSzuIbpd0LDnlMKBH27LfIu0CcTLTvEclTW4duGwcFmUTbf4GXcdBJStrWAYkY8w0Zc39FTGIOYDxFKWS5fwuW8zwvZdbBUzxDzoaTYBNW7F+H31pZ40MxdDGBxu1LfM1zF6Pl5FAxAMypjSFyKtg1KuG8xK1LIvZkT3FcnlPGv9N93SY8EcUfH9YNR1vWWNknSFH0nRsoozmZQM0U9NSwiFQkkxRgK\\/3qaj66j5vbo4EMLPh6n3EufLbHqVzHxw32IGjrTzLaIyrkMgfy3bpkzoKY6IpsrodNHRlMnseT0r6vUbmDQrHNrJE5fTVElCN3jUhk9dYn2k+8EYga4Dm+AVxj6MEUMUrj4MFgy3lTNARhEz5kRmtbz\\/dpo3U53JxupWXg\\/DDvg\\/Fcy2I9ahUffFJBeCYSEDCdexWcapOdiWXLm03x0WapfU4p3vd8C0Z8YCUEFGzQ5YzwetdjiaRlXXGWY4rKs9Y7RZXf+4YwS10TUBPPhRxbEAyDLot4NkQr+jSsU1IPYjNtGsw4oWGWHCahynSQ0GlW7wYkHM2ZZliPAI2b5yDqHGGhQTXFzIIWlWY5vBLB0in7D5\\/dr1Us\\/UEy0a7f3lb9cwh4EY2d4PldgQZ\\/Nq9Vmry8oaWlqd3z4grRO+nabeVPq4ynsPEZSUUY4g9WEb3+paRYYwIYcyvGhMxBKfSuM7m5SRpwCOHLCRxqc1PkiEkb9vbgytAFCyrADVmMBLft245ErnQP5ggG+pUGgTr2WV4c89EB0d9hjfCcfBGWKxEyvt35L4aG+W9jc\\/GuqYzsk00www4sGXIg+0y2GwFoVeoalvFb9nZ+4kDBXkeVnHqVuwm7jc54pD796ZqyJzz+nKVetP1ArNEJ0rAsh\\/uptUvnmHeu6DnU2DsUbozibXWiLOk+BEq6v9wUYf\\/aQ0fGxbixUqI5g5X+54c5kQKwxAn9gLpd88xTyL9sG7thTksGi2Gg5+GEIV+l3DUp02noZTnGinoVfKwmVaB0JdbalBZ33eU2ygYThh3SbyEt38mM+pkVtt5AjEP+AWE7+GngLexMhxNvjVha1G\\/5YSiQJC2zcXIwaIwn5ijUVYbN5scPub4AsA+Sc04ExAXhE3vDiPSeoHjPHX4KwSSex0stlov0nbnuiRDzmG5UQ6ka7+1njNZaPdb7JfcYyTU1ANVIB8XHzYDCqHQv6rAmcrR8cppRvTdace+Pg1U9PKR6HdkTSbFwhsWX\\/eRknFhjyo9el8zZmYUVfvQahFEWWNJFH6snXpsBy+EG2zPhvm8LAZabULpMTqEo6EyRbSjr6GFivH9bo97lgBbXnAsGRY+7UxoYIA+y2VZ+rzqm\\/ueHIUiCXVnY\\/D1oRlVQU4oFa7I0pLXTwRDbbKyWvQ92ySWwBvNSc9zXd9IiXwohT8Pn3xVs0crWgmtD8JcZXXtLhNwTkWuVtdSeFt5UbcR3\\/ulKCwOV+lRzCKPFmVmVnRxYaTf0xJQ+t7uCSExMd6f9wlGNF4Jh5Z2CUdSZGy20IJehGHo0nvJwvSMnhLo2d+qJwk59BGMr3vVX0N+XbhuSz0LgqDmrSeD61ez+cz6JEyL7ND\\/qEChEJX0ewWx8Og9cPH8pKXd6vPZ9inGlcqK3xXbX\\/C78alguP7kRUAd1T9A0XONoUFFIV2HIB7KXA\\/JNKxwryqzwLhzH2UNm0XI4zavIORf64ldzDdQwUCnwbHc8qnARjEHD\\/FxlnF7fcmrEQP8gHBPR96tdz6PyCIzRcZfzZ3gVvBUotfkRybJcIbm9\\/O+xeGyCIuRe0C8Z2nGU53R7P3tV2+ZZwJsc184PBE6lgWLcx\\/RNpkKC1BUXO9J2MfdvUReYN\\/\\/FEhx2rss+bcq\\/aiT1EiCuCUBj9x0r5Cq\\/UAWwRdMHfIfV1atpBJyRA29B8ilRf7gdnt5MUyRBa6QWuIR2lOPyJpyzhY7gsqVv174C+Erri\\/daRAnut+MIu945CNNLtg1F+pim7zaI759BQ1nwz4N8SsZwH0CcvsnaUaGtHFIJQt25\\/oYP\\/jybAkjClZwbO0CBsCnjZSPypBcQragjnG8IAH4CcMvR6FZG5epVGJl+jBekLWnLjgM7XIKMmprF5mm2TddONbFYGLywFpEHe09Iz1iUSJvzhFQ4ZjrbQdcBhoySuf6Vni6pxLzMy1BLGCOric3igq0alzcn+9ZUdmD1A8S5TRhi6FbwZHUT642HI1E1aJzFtftq0GSuESs4lwGLBfLNbDGAJCm0ZA5qvejHhRscNFeAw2T6R1DtQUxts9vz4MhJOO7RWAKa0rWZfhsTi9s280k\\/SWnHXzcdhhRWL9ryMOI+u2eXrTaRwXgSax8hY6R4SpxvqjBKm5eFefT5sibhoKn55KNRdFamJ2FG9YBApFfwqgx18J2A6RF\\/SBspWPED6qEABCWug0HPUA\\/PBmfy+CbmcNpywwS9G6xL1xY7j2w6rovmzS\\/XT5fFI+x7\\/VN0BLaivdiL2rhk53jlFRAeC7k72Dq2afoqVCjTHzg1PNLwsBWWWkQ3zWorQntpAua\\/H0iwf652WjvPVb5bL+ZsqLNQn8frPSt9O+655BUbisAv870rjhfB2VUZJ4Uo+LBw6ZkcoliZvNG6WBQyH9767o5MUmfAzMkR31RPV2yFR2fEAtB8naYHhX\\/XNHdsKJMZ4fnFGzcB6IwZalwf\\/Bprvd5OFjqTEVYDyeLUqfz4bqEcQ7cjPY\\/lePFNO0B7V0i75c0Xo7pBrLHkU7ohzobLEN6B3fcDE5gq8rTwFNza+S4KEdDTovxkUR8OD1vG9DqRNM5TXJ466Cl\\/cpvJK3LdQ2DR9QNklxZXDHceCo9XxxfJ\\/EWE7488FzMaLcT8QbeOjLxu4q7C0e6ci\\/EG1lSKe0lWF+ywrXps1yJ+YMnwRDQInsqlxogsPQv13o0boXvxAhWaumLAfOwuyay4Nc4GoNW88LkpNNQ7a870ZR4pkInpqvwsvHc8uCMQtj1hVTeOBxJWNUz93s34FkH2Dmg73wL0ds0U1NLzK6AD76dsT0xikXXxotAXTsnvrX06oMvaHWgknwChrLUyT\\/wKvTRM5JKhJf9O\\/idx8AgxfdvoUSHlqW47lNQcMArO9XXABDdSDMtI2wy\\/EjOS9JoZQQrbMC1F\\/nlANJTt5kSFBj0gUe7YvePfaU7YLy4AtobhO6nC0qIL9TZacChl8oBYYX4If3\\/apwDHOG8ErXVHqKloogwxPhhANnXjilAiD3lBQoSdQ\\/mqNrDPh\\/2EAq8PtTtosB1bMKL5gLUxo3MEbauHtlQ10s227ByJlqONiG2Qe4r76lHAr82wr6wlyOdzmARyiMRxo13NYrtpXJiESRpwtJ1bPoPm8zkPw4TEn7y\",\"cypher\":3}")
   
    wdwhdhdArr.push("{\"app_id\":\"41\",\"Pkg-Name\":\"com.whddy.merge.puzzle.game\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"gzip, deflate, br\",\"iv\":\"5481649756531687\",\"Content-Type\":\"application/json;charset=utf-8\",\"X-Unity-Version\":\"2019.3.10f1\",\"User-Agent\":\"game/4 CFNetwork/1209 Darwin/20.2.0\",\"Host\":\"tinygame-api.beijingqianji.com\",\"lang\":\"cn\",\"Accept-Language\":\"zh-cn\",\"Accept\":\"*/*\",\"Content-Length\":\"216\"}")
    wdwhdbodyArr.push("X7ILXRg8TgEih7oV4NTMHBUohCdZoDQaNJn/vdChjHM/IIDm80FXFERJEYu8zNWdpxnrlBRds3vmC+/j9zjTl84C5+KCR7rYyTJvFVdHgAzkbkCk0C90CvHBiFHtwLQs52iTdYWFbAtbte1Uhou8DfEPgp4IRKsh+FNGcGD7rqlOfzvy0vFZGTO1y0N+jI5McQ3LV6QEHmU4KLo90hUIXg==")
    wdwhdspbodyArr.push("{\"message\":\"3n3sWLUzeJzh6uuv3FiXjoOTFDMUwgOf8MqvOm0hFVRvKPjb6JuJOqgYP6nqHIwIvDkvQQMBNzMP26e5LcW+wusR2R\\/BspQbRYuuEKdtddaI1fPBsOByepLLLDDtYJvqtyYppXDcl6J8hKG4afVaStXEwk4XAxFELTZCQ4b7bYJtbsP94IpbsgVBGZXE+cuKfjCUJz9WQzhMhgTNKj\\/z8r8OWP5o4rcIsbFq9wU1XeoVdOs9GKjtkSDOWsmIZaPMPr7wxywBCyIRadbMFkKIwGwK4ii2ITLqrn+dJ203QtQySDwitS5aoQuObNQw5dUe4j5OIvUSiiUzPj7RwjZQQ+kwGcfqQsgbvOkzKEVAfjrf9BJPYpgn\\/F9grpAA9HYIMTLwFsk2qW84DUe3vDiUDekVbXr2fb7NzOwT\\/yQB7IH8BCizITG1HrWRe5AGRPmMnzS48PGjfq+zIse5r0wOCabu14IuYhcd+DryGRFejvgOxLk+7SW7omD+EoKL+N0rx1KQ24rpUd\\/vG02WKXHWFCBjnw3QTLqNl2WZw5gB\\/BLjJcCMdLMI59VzG076sy0kR7vqvhHlvGU+AMRfIHyXmr89g6mdZ\\/R9KBvXv2lN7ntdDokt4zLMgWsUVEH38iyJxzXCHMXNw8fpK6LktvYBuvUWz4EAED\\/0KnuwixgSOS7gvhWLKfMYAzYACqsiKbnK7Fd7xgk4Cl14MpzAC7XPljElDUYLZFjBRke7kgrLGX5VzBXsnp4E\\/2AqWj45YFEW1kn9wLa5y6ksWf\\/WbIEQkZcJfyDxOuB7GW7mbgumqtNwod80+1sA\\/oaCw3FD1JBFvWF5UxjMASfx\\/nFo1vfhGIQyVwZbBcEyMbaGP4UYGkHiC5LpOCFwG1L10jMAz36CqI1LbZlaWS0Qz8zuUFLhRDYOIiDwOD\\/bhdZ0Wuv1dxJgZ\\/PqPNHcAPsMQbOCfFRFG+v9zJnyw4uvbIlPlTfaEZD7QZE+zeMW0mPP1OMJyypmUpX48f4c6Q4BSdJkyAfJHeSZI43LNyK8mzc3ucQtsPudyCugXbqyD0stw1m1c0pbpLX8gbgUCWtMWZ2jzabBA0UqHlrEiGqym8TM\\/mV+h5P7cRIBFAqCZi41imDf\\/7\\/aWw4EU+o\\/8bWWM2xdgZPleFVkhRDuqsIWQ92XjulLbWc\\/xxM3m\\/UPUIOVlx9PldK8a5Y6SzcuPdIYiJTWtMKS3bLAwrYVuY5S053+wAOTK5vkjpRxY+W+HH3\\/Lx4toH0JHcU9uW\\/iJ51Vrewx+YuGHe99QQClqnBVdjysiVo7A11LVuR8uWVXXPJz+WswhIGhaQmb8fO3YZndiSdkgPEUQp11jwFFmtmNlUn\\/EN+AHqEYtNSX+01c\\/2QzyrZOGBOgG7reKgZ55PQucPpXkKe7lZKsmpzu2\\/m3tk8mKTI3saeemJ6RiWgckySrkB+sClFTiAPH6GqYL+tfqGesO6UkcsA0gBl5yvE+y\\/iGu06wdDdIJJSVOWr3641VxMtKHwOO1wB0AEkF6nUp10NyfA8tw6d5LHyrnGCSHLq3TDuzxXP8kdAlmIw\\/IvDvQctZDAoTSSaeT9yWiqgozDhgHd5wxlhTg0R+Xw5T3l88T33ZdM16Tyq5TJUDqcXr780VeTOgKDNGHfxxX1dZJfgoJ8aLec2DbeeSAO55RbP1RfqQalqeQ9Jf2fUR5btim777616wys0ignzV09s5DYDWaI+GBheH18OAp65OjIPYEs6IsCMSzQNeD86QiVndimhJd\\/YAZhAl3k9Q+KXW1EKOi1j\\/s4b6VmkZJRV6QN4TsGKQHwyV6Mj\\/L1bv+6eyDP9FJ3PY8g2SPsjVhSnP3j0t9Xx53mUVhSnKCHcf1EvX+8y3vC1otbKzKDapcbonu3d0RCs64vtRFg6nI+e2EtUiThTQLkBjSuzJTiawTXtbZPAi7YzigTZTnETY7WM3rY9zd\\/lhnTidiJDd4FqvpKhX4QW2YlTMfsB+z1tg\\/7EROmpZ5KsrvCWSeeVnk93x7dpPVoDKIFJOT7Obhp4ixsI2p9gegi7ZItxIj+WFi4HGWvVRRLhQcft9TvCZfpcF0hSg5\\/etQEN9e2QF3rbTTxKYSNSymu\\/Sl5xygSTaopmkff0quMnpwCcocemPnj9Nqt5o7t\\/gdSG2KBBKCVcReNHutiZBa1NvAo1k5tUb\\/Si2vPOL+aTjypklEOHU0sJZLiXpPgXBMpRVBVHQ\\/jmPDL3aZl0IUwqQLG5Ol3GZ2ECOZsr2fKZNFL0WbnEz+mIANwlma6I1FoBiZXkXcCd7gQeUlCLxTQrJlidD233bCPYNs8KfH8iD5Xl+pYQb3hKE91Rscw9ZO\\/5rVHI3OWeRO2yCWPLPory+fdqWr83zZlTx1y4CRMM+3JBy38YzOEyer6KJZ\\/H5TQXXRJlcI3Ahxe4zK2Ntpra4AdMI0VL7TIcyZoQ5L+PDmiprBUoAjyIrRkKuaZxT0orAbQwnnuflFaoyHoTV79YVYmI+BL4W6My7wp\\/LmtiX+MBmvfM8CDQfYs5u+OKHMvxVTX+byofsBackR8aaRlaIDu6FHF\\/t+8c2tcKnhE\\/FZjLQlY6RNLX4+rjzQFDkdjkU8+1DR92DJsSA6RJbdCfi9WRwEvQdSvSQes+RzzjaRf1KVNmmPVJKQHaczgXPfIe92XF1jFxQwrbWQ8lkAOxqqGeJJIBPMVmnYuyRpX7MyyXIq9iQAJkCYnynEwmoMYAK+EHS+zmbZn7toTS9qUQvoEpMikZ\\/1u7P2tjD5mv1I7VPNPemoZ04vwe72BISR27lPo9yxG3lLqe3NkUNBlIKOACX8IXVz8AhIwu7t7WhqKyoCWfKBYss3MJMGkx+mi\\/NREmzrV5c9uo\\/riVH2zHN1Q0\\/m46xRUiIljpeCBAFWjvDiSEzQF70R410K0KcplGO498olipOx1B6wFLJo\\/DtYq+25S7J77sxWaqhDEO02fUzHay98c2o29\\/Flae8H054U89p3Mw76IJVw1lFhQr0GcRZabqTR3J1ByFNSHaVRFjkzroEMMYC0y0Y8rq56L5AT\\/9sxbbrZUBHCcND9MQxQn8YDuj9BnA5pybBj9+PH2Oo9rCkHb4JVrjkD448Ed1F0kU9\\/bmIH6DcrFC73qRnGHjx6cgB16LjvdmLGDeHJ\\/sc=\",\"cypher\":3}")
    
    wdwhdhdArr.push("{\"app_id\":\"41\",\"Pkg-Name\":\"com.whddy.merge.puzzle.game\",\"Connection\":\"keep-alive\",\"Accept-Encoding\":\"br, gzip, deflate\",\"iv\":\"5481649756531687\",\"Content-Type\":\"application/json;charset=utf-8\",\"X-Unity-Version\":\"2019.3.10f1\",\"User-Agent\":\"game/4 CFNetwork/978.0.7 Darwin/18.7.0\",\"Host\":\"tinygame-api.beijingqianji.com\",\"lang\":\"cn\",\"Accept-Language\":\"zh-cn\",\"Accept\":\"*/*\",\"Content-Length\":\"216\"}")
    wdwhdbodyArr.push("PzD6CpT3kIdZIB9g0/oRI9Ciu2V+Mv03GXWbLTpf0eEZyJEdqKj++XQRlLvds4qTgtLdywa5d7IJN19b8dZDUGH51CuTf8Ty1IqwsrFBmmJ9T4QCQR2yHPwcr6seYuekRTfx/6czkMfb9FfcF1B1AqRRj3PgKPvMz4hBRj/rdIH0HqZcSKmesnU7KNJrFNGGPbsPZHTQOGQ6nkSBtxfJTQ==")
    wdwhdspbodyArr.push("{\"message\":\"39grimD4ur4j2C6ntec4ScSNtgLSIU9ex7JAwK5nS1FxJZ2cCIPAL7wP2fQurUy3glto1+jWPn4lFWn3xjDd4onBIcGDiKZUT8tYq7wHAoqrdFMzPhy1YhNuMXFdHlQ5M3H8f6OOCA6yOaNb\\/me6SmUNa\\/IaMyAvRrPWh8mdhzqBkimmTcJoXbZSvD+cGFbN4V2DPYq5WviqPe7b\\/DJrEXgOctmQoImplNUkwqTohFQm0tN8vCVOFQXkqpZ+\\/ZlUId2c3AWLQQa8N37vTbpwGAS9ne43I0vatTaVwrZs9XPHsv543aytufcsAoPS7PEIE4vJC7nOR7dl6Z7QFz8uT+co5HRJeAeV+ME79uAG1HEcOYR4LkETfEgjVRfxipo5rnJXk5irZX6vRY7SH9FnpV4s\\/LrMX8vH2x78DfZt6JRB+ODQlXEsJsx3mU2bS\\/BRBl\\/lp+lT2XFHYMQcskTGt5YbLb91FXbOSaG1rYFu2AtQSiTcPQ+VSLuaPLmEc+c2c5bMs98b9ScyCK\\/Gcl05oKgADyqja7Mc8KaCEB6wnngpOGDzHgfgl0HqFAOyVo5yPFW64HImlgbBEPbQIshI51jrs+REXvKrDiJYR\\/NIAl2ZfQqqdLv2+mRQOaQ41Hh3pDFiqHyg8T2Qr4ewOsLddKyZommgKvhfTLc\\/WcuVjjTmZ4qoUUPSy+9XwbQogF2cRm6QlZk8xIls78OmFqj\\/X0aifTwWxN1E4kYGTrmyk08cwYmFdrbqWw1H1BF0w+d7KucxI8Pqh8fFEYeTrHSEoAPzNlua9BpuYCXsF\\/gTSAhzqN+zjPydgew4nDgAvWSyBTpUawZVkW7T9Z56mxODrImDRyMbNeqY5v26rLpFAgLepHsy5pPUQXLbrxFfa0pl4JWqRWQiyhGNHBH3dshVOlD4NJ1DxdIvU94VD2eBKyYR+6WUEztvPLUvGBKXl5uhgWPf3MsDpJBCCZEYAzgi1chTCeHFZbYetBerWwSXcLzggTHzPng2MEZhMKe4dE5ebTVDDV2XX\\/GcFPezoXha4XMayvoLVv\\/c3cIvvgpN04qZvZohMus0zmNTmNFaWCTXjYO3AAR7vUNYphj9ubUZ7B4BnFpHL3H9XS4uhg5i7JgXPdGGviUsM9oOc+4afCYfACQQmzrvjX7FbtufMzGRE25AzM6EzGL1taqddqJcnjo7TQMtrqLFYT+6bm3Eur6s2opNgWLJh8ipi\\/WrE2Xiv8ck7Cp+Xevc2TjbdRHktSGIO5zt+gO9YRQ\\/ZjUjJiPzEfmxeukjPXcyX8BZ9A01+VPQS98kqbmxj669pXhhtw7eKqrDtI\\/lQF7TRfj6EyR6QTnm4vHeDSNl7sVbArRYc61aArhvtuLT+PBHcQPJkVnZujF8WnVHPXE\\/f1eJ6y6FZv0f6s021abT+bgZyB\\/Wjnwkivf0tit1j+19HM3bDwGApDSclNi32by4q+2bNbWqwUHfGLpiki64GfCb99oN58MvUbf6Fl6y8bkjxdt4cIC9ieImfaMFmcfPS8R5ewhiDjkHgWHRw\\/cE9M5EEQleJ4YWmQ8Yx96aMxcz5j+XhwlbtJElWI+NVnwzA+pTxDIySF2oCp3VI5vlVI1LXUqsi8+l4c7vIUk4e7r8fuZ4ZhawFAIUfOa6GpZiuxNP6GbzviR0jm5DkAHOGydeDmunpP\\/FCyGKBKdK7\\/RQE50jx2WqQ5aLD1hrEj0iyfNVxU2PVRrShGXNjdAdQpL4hw3um5e6BwKhJV1ooICko3DvLO+z2BeL\\/r13azf1oERK9pAJ+pjr5J3TIP1u4M6jxQPNLx+OxO5ZAzCuXIYnftJuFWR9zO+Jj+VMVPk92vDuIW6LIC37imszWZa7UsvsnQT3JqwSUlXxMjMx3WGueesKhN0KPoWZLXJqO7OeXfbnKheZ5oUjVNcOTTqOKEbpSWSUbw\\/TuD8yC3mPVsrsrkDoFk8\\/yRTsns8PTfC4NUR1VXOBFTXP\\/D6ss0m6HsgBLzq9VGRKmQ2Pcu1UlxkHD77IaeDnvbhGqN+SeweLoVKeggMrslsgOxGfTZanPO9AE93Gw4sAadxexXquvbNeSeq3rzaNHz\\/23BIUvpPtupI\\/5SxblZhAapOdMjidkbwFfFTjEdJ9HjIACBtiOC0RvHwIlHm\\/FOFJuwQ7pQu\\/YnzqPgP2VOvgjTIES9NH1lBUR5ZbtQdVxnp7O+W\\/4GIA\\/gHyOapSU9fJ6Njf2+LvEl\\/0lzplF0oN3O34LBctLjN14Y10Pvc9fdkYIIiGR3Cm7RBJAHIJG+5xtWVf7zi73lJtEr0fQZP7Zcis1wIhrZ1cyjcbcQlPZDu68znU9ZDP\\/L8BKUsZskLSwYa0QLeklc5aNl19rtzKjg3FnxD+POAjPXp84UsfALZqlwvvuAnYAZuUgoPq8uFFc8rqN\\/HYdkypJyg2pS6980exwawLtsjmF2dY5kij050NJPsf5VHdx+PaRc4k2y2ELZEOhL+1nJhtfvHHoAhzuyctMI1JdOSkBuMUr3KXQq5ZvMnPHjduoHUBa7G2Ybxfc6oVFwYrY75PCi0wfkTi+gLcAEy+VGD535eAoqRQ44ZyBiUw4m6fV3pjAXyfGfT7Gwf6twerjAEOzVgPnF3VAPsWdGliruwUUo3+eC3ni0s6XnXUOFCTEGUMRXSrVToiB8XiKifzEzLcDAILGzVnjq62Pp\\/tUYhhtsHAnM4JOTJNtgWk747uu7eAZDnYnXdwNVFU26\\/X6R4ORIrI4GQ38SBIdXfjfRQL00dpL3M+J+DtaezRAtVKBCDX+BfkGxm09VFhuNyefo0IhAVShLR3Ff5D6nYbpsKCicOLdMpR8+f20gC5AHRpC9TnFoPLDOP2pZTpR7jQA7cxlwDV+rEg3hYZb6uopkrZ9BVVYhuqI1+2KWzVjJ3wDjehvQi0UU+RypQyqq0C48\\/d+vjirUrSobZdc1iCOLERq0HfmpcV4RTmhgv15pltFmESjeAJOPhU8uW\\/pwCOp5mzmruIWLuk33gb11psTyKokYE0tDyYRVH6\\/zpStSH5TwsSN+fft6QW+ONZPIBDMrlTsus1QcmYluKWnrqCwmkpfyjEmoNsizNbWlsXKIdVqVUqTZ1qk5c4Ck+8YkOVnNmm7jM0GwQs0Y5usfkTfKGeKZii2DDsHEd522yJDALjMSxQQI9+SZJxXO0ErDc3DsSGQfwqpxkP1iSalDCjjX6uYMhOHFwboKlG1EjOAcy2YHhdaDFbbMwHqI6Z50UgGjYZv17PLcR9stctvXqPgCNXs0Vl09JuG8wUWeWXD8jslgDdKkvTDJ29TIiHAYrk\\/ag40VFJpOnCPOv+cdSfEJVYlCl3ydnc65pXAdxvzlFYWvpndn4EAEXqU0SY8ps2DS1EDu2JxIcJsPsvTcE5ozqRVZdMnoc1ByuVNWB57oQHd4SuXAB6rdDht\\/R31lS+HTyQz8unF\\/RbFFVSYo9O2iYSQ0epOZxu9YwPxNy1at6NLco3qokMeVlp4yX1JfhMuVbIK3EeOYlZ4gYDdKebttakP8\\/\\/c9MyRxlG\\/BtEirIbgXZZO6eog0C8K7J1Rfh3tP0\\/RQc8rdUffeCB1yZaSpZmVqwfN7OHgzV5AmaKGtbjm+k6E44S84CZyOnRwXF2i9PHjIa+Jb78Ska1ifHATov26gLpKz2lIKDq4C+lfGTWov3qzU3AjfNKPEb9syZTnTYc+Ntx8JvD3Ca1yUMJGOhSJb5U\\/aSeGmsdhATeL5Aq3Wka9X3oRts1WB6HZtsHotp683cPIARLbYdBui4bywZek921jtsit5dMNBdcYas4kX9ka+3YyqPyJm7+9kz8t+b8E\\/yRoe5Zli2HCEb9z+HSFZvlxudzdnhL4b1y1vq+lF2Be7Aiz4VflURfh82N5+EPOJm9Z5Ynp0+VXVBmMCg0w+gpujEZRU4RGDglIs9d5rJfx+pievy1TpEYU8Kj+hkXjfdpmxGy5H3I1GOaNl4bAZtbn28Jr31JB2hsILdS8IUbpa7WE4Blu8WKBXFJiHXyK3rJF+Lk4Ysym+DX8DrIuuFxmtOLGzz\\/7Qm+VEg2T1mRbtdUcAz1Kb6i5s33gqp1qGdqoHMSxl4RsJCWVDg\\/Jh7Y8ORWP+URcStXrUX8FBpxXYZZxYEpEaH2YLVzPQsmrKw2k\\/sncR77rebLgU3IjeUqYtXNPTWOWOxyysm80UhJ558sgvoJY\",\"cypher\":3}")
 
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
