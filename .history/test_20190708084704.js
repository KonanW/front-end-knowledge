var b = 5;

function foo() {
    var b = 7; 
    return function (){
        b = 9;
    }
}

foo()();
console.log( b );