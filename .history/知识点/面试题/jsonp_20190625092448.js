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