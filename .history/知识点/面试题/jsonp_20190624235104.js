// new promise

function jsonp(url,callback) {
  return new Promise(resolve, reject){
    window[callback] = function(data) {
      resolve(data);
      this.document.body.removeChild('script');
    }

    var 
  }
}