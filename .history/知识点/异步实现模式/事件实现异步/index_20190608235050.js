/* 
   事件实现回调本质上是一种发布订阅模式

*/


class Event {
    constructor() {
        this.map = {};
    }

    add(name,fn) {
        if(this.map[name]){
            this.map[name].push(fn);
            return
        }

        this.map[name] = [fn];
        return;
    }

    emit (name,...arg) {
        this.map[name].forEach(fn => {
            fn(...arg);
        });
    }
}

let e = new Event();
e.add('hello',(err,name)=>{
    if(!err){
        // console.log(err);
        return
    }
    console.log(name);
});

e.add('hello',(err,name)=>{
    // console.log(err);
    if(!err){
        // console.log(err);
        return
    }
    console.log(' 第二个',name);
});


// e.emit('hello',"hello nodejs");
e.emit('hello','heelo','nodejs');


/* 链式调用 */

// class ChainEvent {
//     constructor() {
//         this.map = {};
//     }

//     add(name,fn) {
//         if(this.map[name]){
//             this.map[name].push(fn);
//             return
//         }

//         this.map[name] = [fn];
//         return this;
//     }

//     emit (name,...args) {
//         this.map[name].forEach(fn => {
//             fn(...args);
            
//         });
//         return this;
//     }
// }

// let e2 = new ChainEvent() ;
// e2.add('hello',(err,name)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(name);
// })
// .emit('hello',"hello nodejs")
// .emit('hello','heelo','nodejs');
