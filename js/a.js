function gcd2(a,b){
    var result = 1;
    for(var i = 1; i <= a && i <= b; i++ ){
        if(a%i == 0 && b%i == 0 ){
            result = i;
        }
    }
    return result;
}


for(var x=1;x<701;x++){
    for(y=1;y<701;y++){
        if(gcd2(x,y) == 5 && x*y == 700){
            console.log(x,y);
        }
    }
}