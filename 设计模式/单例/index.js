// IFFE 

const Singeton = function() {
  let instance = null;
  const Singeton = function() {
    if(instance){
      return instance;
    }
    instance = this;
    this.init();
    return instance;
  }
  Singeton.prototype.init = function() {
    this.foo = 'singeton';
  }
  return instance;
}();