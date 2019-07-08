// new promise

function jsonp(url, params, callback) {
  return new Promise(resolve, reject){
    window[callback] = function(data) {
      resolve(data);
      this.document.body.removeChild('script');
    }

    var script = document.createElement('script');
    script.src = url+ '?callback=' + callback;
    document.body.appendChild(script);
  }
}