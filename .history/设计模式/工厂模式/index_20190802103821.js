// 根据不同的输入返回不同的类的实例 ，一般用来将对象的创建和对象的实现分离

class Factory {
  static getInstance(type){
    switch(type) {
      case 'p1':
        return new P1();
      case 'p2':
        return new P2();
      default:
        return new P3();
    }
  }
}

class P3 {
  constructor() {
    this.name = 'p3';
  }
  opearator(){
    console.log(this.name);
  }
}

class P2 {
  constructor() {
    this.name = 'p2';
  }
  opearator(){
    console.log(this.name);
  }
}

class P1 {
  constructor() {
    this.name = 'p1';
  }
  opearator(){
    console.log(this.name);
  }
}