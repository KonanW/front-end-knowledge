# 跨域知识详点

### dns 解析过程
 1.客服端向本地域名服务器发出请求，请求域名对应IP地址

 2.本地dns服务器向dns根服务器发出请求，根DNS服务器会告诉本地dns服务器（.com）的地址

 3 本地dns服务器向 .com 域发送请求，得到二级域名的地址

 4 以次类推 ，最后得到IP地址


### 同源策略
浏览器对网络请求有同源限制，同源即协议，端口，域名必须一样。不同源的客户端脚本在没有明确授权的情况下，不能读写对方XHR 的资源。


### 跨域解决方案

+ jsonp:只支持 GET ，不支持post，不安全,容易引发xss攻击（跨站脚本攻击）。
+ psotMessage：配合使用iframe，需要兼容ie 9以下
+ document.domain:仅限于同一域名下的子域
+ cors:需要后端配合进行相关的设置
+ websocket: 需要后端配合修改协议
+ proxy:使用代理去避开跨域请求。需要修改nginx,apache等的配置

#### jsonp
浏览器对script标签src属性，link标签ref属性和img标签src 属性没有同源限制，所以可以将请求放在script标签src属性中。如下：

    //jsonp
    function jsonp(url,params,cb){
        return new Promise((resolve,reject) => {
            window[cb] = function(data){
                resolve(data);
                document.body.removeChild(script);
            }
            parmas = {...parmas,cb},
            let arrs = [];
            for(let key in params){
                arrs.push(`${key}=${params[key]}`)
            }
            let script = document.createElement('script');
            script.src = url + '?' + arrs.join('&');
            document.body.appendChild(script)
        })
    }
### psotMessage
window.postMessage()允许来自不同源之间的脚本采用一部方式进行有限的通信，可以实现跨文本档，多窗口，跨域消息传递。

    otherWindow.postMessage(message, targetOrigin, [transfer]);
    参数详解：
    otherWindow: 其它窗口俄一个引用，比如iframe的contentWindow属性、
    执行window.open返回的窗口对象、或者是命名过或数值索引的window.frames
    message:将要发送到其他 window的数据。它将会被结构化克隆算法序列化。
    这意味着你可以不受什么限制的将数据对象安全的传送给目标窗口而无需自己序列化.
    targetOrigin:通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI。
    在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；
    只有三者完全匹配，消息才会被发送。这个机制用来控制消息可以发送到哪些窗口；
    例如，当用postMessage传送密码时，这个参数就显得尤为重要，必须保证它的值与这条包含密码的信息的预期接受者的origin属性完全一致，
    来防止密码被恶意的第三方截获。如果你明确的知道消息应该发送到哪个窗口，那么请始终提供一个有确切值的targetOrigin，
    而不是*。不提供确切的目标将导致数据泄露到任何对数据感兴趣的恶意站点。
    transfer (可选) 是一串和message 同时传递的 Transferable 对象.
     这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。

### document.domain

对于主域相同而子域不同的例子，可以通过设置document.domain的办法来解决。具体的做法是可以在http://www.a.com/a.html和http://script.a.com/b.html两个文件中分别加上document.domain = ‘a.com’；然后通过a.html文件中创建一个iframe，去控制iframe的contentDocument，这样两个js文件之间就可以“交互”了。

        eg:
        www.a.com的a.html
        document.domain = 'a.com';
        var ifr = document.createElement('iframe');
        ifr.src = 'http://script.a.com/b.html';
        document.body.appendChild(ifr);
        ifr.onload = function() {
            var doc = ifr.contentDocument || ifr.contentWindow.document;
            //操作b.html;
        }

        script.a.com上的b.html;
        document.domain = 'a.com';
### CORS:跨域资源共享
CORS（Cross-Origin Resource Sharing）跨域资源共享，定义了必须在访问跨域资源时，浏览器与服务器应该如何沟通。CORS背后的基本思想就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉

服务端对于CORS的支持，主要通过设置Access-Control-Allow-Origin来进行。
Access-Control-Allow-Origin:指定授权访问的域
Access-Control-Allow-Methods:授权请求的方法


    
