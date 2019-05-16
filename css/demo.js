async function changeColor(duration,color) {
    document.getElementById('a').style.background = color;
    await sleep(duration);
}


function sleep(duration) {
    return new Promise(function(resolve){
        setTimeout(resolve,duration)
    })
}


async function main() {
     while(true) {
         await changeColor(3000,"green");
         await changeColor(1000,"red");
         await changeColor(2000,'yellow');
     }
}

main()