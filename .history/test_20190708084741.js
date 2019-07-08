var b = 5;

function foo() {
    var b = 7; 
    return function (){
        b = 9;
        // console.log('b',b);
    }
}

foo()();
console.log( b );