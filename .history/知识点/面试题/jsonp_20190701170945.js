// new promise

function jsonp(url, params, callback) {
  return new Promise(resolve, reject){
    window[callback] = function(data) {
      resolve(data);
      this.document.body.removeChild('script');
    }
    let query = []
    params = [...params,callback]
    for(let key in params) {
      query.push(`${key}=${params[key]}`);
    }
    var script = document.createElement('script');
    script.src = url+ '?' + query.join('&') ;
    document.body.appendChild(script);
  }
}


// 普通形式 

(function(global){
    function jsonp( options ) {
      var scriptNode = document.createElement('script');
      var data = options.data || {};
      var url = options.url;
      var callback = options.callback;
      var query = [];
      for(key in data) {
        query.push(`${key}=${data[key]}`);
      }
      url = url + '?' +query.join('&') + '&' + 'callback=jsonp';
      scriptNode.src = url;
      global['jsonp'] = function(data) {
        callback && callback(data);
        document.removeChild( scriptNode );
        delete global['jsonp'];
      }
      document.appendChild(scriptNode);
    }
    global.jsonp = jsonp;
})(this)