//原声ajax请求 
if(window.XMLHttpRequest()){
    var search = new XMLHttpRequest();
}else {
    //兼容IE6版本即以下
    var search = new ActiveXObject('Microsoft.XMLHTTP');
}


search.onreadystatechange = function() {
    if(search.readyState == 4 ) {
        if(search.status == "200"){
            console.log(search.responseText);
        }
    }
}

search.open('GET',"url");
search.send(null);