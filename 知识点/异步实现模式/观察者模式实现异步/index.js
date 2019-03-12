





function create(fn) {
    let ret = false;
 
    return ((next,complete,err)=> {
        function nextFn(...args){
            if(ret) {
                return;
            }
            // next(...args);
            console.log(args[0]);
        }

        function completeFn(...args) {
            // complete(...args);
            console.log(args);
            ret = true;
        }

        function errFn(...args) {
            // err(...args);
            console.log(args[0]);
        }
        fn( {
            next:nextFn,
            complete:completeFn,
            err:errFn
        })
    })
}

let observerable = create(obsever => {
    setTimeout(()=> {
        obsever.next(1);
    },1000)
    obsever.next(2);
    obsever.complete(3);
})

const subject = {
    next : value => {
        console.log(value);
    },
    complete:console.log,
    err:console.log
}

let unsubscrible = observerable (subject);