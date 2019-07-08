// o1的复杂度 实现一个栈 ,o1复杂度实现pop  push 去最大值

class Stack {
  constructor() {
    this.data = [];
    this.max = [];
  }
  push(data) {
    this.data.push(data);
    if(data > this.max[this.max.length-1] || this.max.length === 0) {
      this.max.push( data );
    }else {
      this.max.push( this.max( this.max.length-1 ))
    }
  }
  pop() {
    if(this.data.length === 0) {
      return null;
    }
    this.max.pop();
    
    return  this.data.pop();
  }
  max() {
    return this.max(this.max.length -1 );
  }
}