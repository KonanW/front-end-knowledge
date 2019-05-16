### 移动端端1px像素的问题

问题描述：由于移动端Retina屏的存在，css为1px的元素实际大小并不是1px大小。


解决方案：

1 viewPort + rem 方式：

  通过设备的dpr动态设置 meta中viewport的initial-scale值达到1px的效果

    var viewport = document.querySelector("meta[name=viewport]");  
            //下面是根据设备像素设置viewport  
            if (window.devicePixelRatio == 1) {  
                viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');  
            }  
            if (window.devicePixelRatio == 2) {  
                viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');  
            }  
            if (window.devicePixelRatio == 3) {  
                viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');  
            }  
            var docEl = document.documentElement;  
            var fontsize = 10 * (docEl.clientWidth / 320) + 'px';  
            docEl.style.fontSize = fontsize; 

2.border-image 实现：
    用一张1px的图片填充

            .border-image-1px {
                    border-width: 1px 0px;
                    -webkit-border-image: url("") 2 0 stretch;
            }

3.transform :scale 实现
   根据dpr动态设置scale,达到1px的效果

        div{
            height:1px;
            background:#000;
            -webkit-transform: scaleY(0.5);
            -webkit-transform-origin:0 0;
            overflow: hidden;
        } 