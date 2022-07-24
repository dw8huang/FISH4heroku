function click_a(ele){
    /* --------------------------------------------*/
    /* jump to corresponding senA if clicking senB */
        //console.log(ele)
    
        var item = localStorage.getItem("itemnow").toString()
        let leftreportid = '#leftreport_' + item
        let rightreportid = '#rightreport_' + item
        var leftreport = document.querySelector(leftreportid);
        var rightreport = document.querySelector(rightreportid)
    
        //click change sentence's color
        var lastclick = localStorage.getItem("lastclick")
    
        //console.log(lastclick,eleid)
        if (lastclick == 0){
            localStorage.setItem("lastclick",ele.id)
            sena = document.getElementById(ele.id)
            senb = document.getElementById(sendic_a2b[item][ele.id]);
            senb.style.backgroundColor = "#ed4264"
            senb.style.padding = "0.25em 0"
            sena.style.backgroundColor = "#ed4264"
            sena.style.padding = "0.25em 0"
        }
        else if(lastclick != ele.id & lastclick != sendic_a2b[item][ele.id]){
    
            //lastclick cancel color
    
            var lastitem = lastclick.split('_')[1];
            //console.log(lastitem)
            var lastsen = lastclick.split('_')[0];
            if(lastsen == "senb"){
                lastsena = document.getElementById(sendic_b2a[lastitem][lastclick])
                lastsenb = document.getElementById(lastclick)
            }else{
                lastsena = document.getElementById(lastclick)
                lastsenb = document.getElementById(sendic_a2b[lastitem][lastclick])
            }
            localStorage.setItem("lastclick",ele.id)
            lastsenb.style.backgroundColor = "#FFFF66"
            lastsenb.style.padding = "0.25em 0"
            lastsena.style.backgroundColor = "#FFFF66"
            lastsena.style.padding = "0.25em 0"
            //eleid change color
            sena = document.getElementById(ele.id)
            senb = document.getElementById(sendic_a2b[item][ele.id]);
            senb.style.backgroundColor = "#ed4264"
            senb.style.padding = "0.25em 0"
            sena.style.backgroundColor = "#ed4264"
            sena.style.padding = "0.25em 0"
        }
        else{
            event.preventDefault()
        }
    
    
    
        senb = document.getElementById(sendic_a2b[item][ele.id])
        sena = document.getElementById(ele.id); // <-- Scroll to here within ".box"
        scrollToElm(leftreport,sena,600); 
        scrollToElm(rightreport,senb,600)
    
    
        function scrollToElm(container, elm, duration){
            var pos = getRelativePos(elm);
            scrollTo( container, pos.top , 0.87);  // duration in seconds
        }
        function getRelativePos(elm){
            var pPos = elm.parentNode.getBoundingClientRect(), // parent pos leftreport
            cPos = elm.getBoundingClientRect(); // target pos senb
    
            winy = window.pageYOffset;
            //console.log(winy)
            pos = {};
    
            pos.top    = cPos.top    - pPos.top + elm.parentNode.scrollTop,
            pos.right  = cPos.right  - pPos.right,
            pos.bottom = cPos.bottom - pPos.bottom,
            pos.left   = cPos.left   - pPos.left;
    
    
            return pos;
        }
    
        function scrollTo(element, to, duration, onDone) {
            var start = element.scrollTop,
            change = to - start,
            startTime = performance.now(),
            val, now, elapsed, t;
    
            function animateScroll(){
                now = performance.now();
                elapsed = (now - startTime)/1000;
                t = (elapsed/duration);
    
                element.scrollTop = start + change * easeInOutQuad(t);
    
                if( t < 1 )
                    window.requestAnimationFrame(animateScroll);
                else
                    onDone && onDone();
            };
    
            animateScroll();
        }
        function easeInOutQuad(t){ return t<.5 ? 2*t*t : -1+(4-2*t)*t };
    
        /* ---------------------------*/
        /* words color change in senB */
    
    
    
        //get the score
        //console.log(result1.labels)
        //console.log(senbcontent)
    
        //the order should be true or it will cause problem
        //changecolor(ele.id)
    
    }
    function click_b(ele){
    
        /* --------------------------------------------*/
        /* jump to corresponding senA if clicking senB */
        //console.log(ele)
        var item = localStorage.getItem("itemnow").toString()
        let leftreportid = '#leftreport_' + item
        let rightreportid = '#rightreport_' + item
        var leftreport = document.querySelector(leftreportid);
        var rightreport = document.querySelector(rightreportid)
        //console.log(leftreport)
    
    
    
        var lastclick = localStorage.getItem("lastclick")
    
        //console.log(lastclick,eleid)
        if (lastclick == 0){
            localStorage.setItem("lastclick",ele.id)
            senb = document.getElementById(ele.id)
            sena = document.getElementById(sendic_b2a[item][ele.id]);
            senb.style.backgroundColor = "#ed4264"
            senb.style.padding = "0.25em 0"
            sena.style.backgroundColor = "#ed4264"
            sena.style.padding = "0.25em 0"
        }
        else if(lastclick != ele.id & lastclick != sendic_b2a[item][ele.id]){
    
            //lastclick cancel color
            var lastitem = lastclick.split('_')[1];
            //console.log(lastitem)
            var lastsen = lastclick.split('_')[0];
            if(lastsen == "senb"){
                lastsena = document.getElementById(sendic_b2a[lastitem][lastclick])
                lastsenb = document.getElementById(lastclick)
            }else{
                lastsena = document.getElementById(lastclick)
                lastsenb = document.getElementById(sendic_a2b[lastitem][lastclick])
            }
            localStorage.setItem("lastclick",ele.id)
            lastsenb.style.backgroundColor = "#FFFF66"
            lastsenb.style.padding = "0.25em 0"
            lastsena.style.backgroundColor = "#FFFF66"
            lastsena.style.padding = "0.25em 0"
            //eleid change color
            senb = document.getElementById(ele.id)
            sena = document.getElementById(sendic_b2a[item][ele.id]);
            senb.style.backgroundColor = "#ed4264"
            senb.style.padding = "0.25em 0"
            sena.style.backgroundColor = "#ed4264"
            sena.style.padding = "0.25em 0"
        }
        else{
            event.preventDefault()
        }
    
        senb = document.getElementById(ele.id)
        sena = document.getElementById(sendic_b2a[item][ele.id]); // <-- Scroll to here within ".box"
    
            //console.log(senb)
        scrollToElm(rightreport,senb,600)
        scrollToElm(leftreport,sena,600);   
        /*
        if(window.pageYOffset>120){
            window.scrollTo({
                top : 120,
                behavior : "smooth"
            });
        }*/
    
    
    
        function scrollToElm(container, elm, duration){
            var pos = getRelativePos(elm);
            //console.log(pos.top)
            scrollTo( container, pos.top , 0.87);  // duration in seconds
    
        }
        function getRelativePos(elm){
            var pPos = elm.parentNode.getBoundingClientRect(), // parent pos report1
            cPos = elm.getBoundingClientRect(); // target pos senb
            //console.log(elm.parentNode)
            //console.log(pPos)
            //console.log(cPos)
            //console.log("parent's scrollTop:",elm.parentNode.scrollTop)
            winy = window.pageYOffset;
            //console.log(winy)
            pos = {};
    
            pos.top    = cPos.top   + elm.parentNode.scrollTop- pPos.top ,
            pos.right  = cPos.right  - pPos.right,
            pos.bottom = cPos.bottom - pPos.bottom,
            pos.left   = cPos.left   - pPos.left;
    
    
            return pos;
        }
        function scrollwin(element, to, duration){
            var start = window.pageYOffset;
            change = to - start;
            startTime = performance.now();
            function animateScroll(){
                now = performance.now();
                elapsed = (now - startTime)/1000;
                t = (elapsed/duration);
    
                element.scrollTop = start + change * easeInOutQuad(t);
    
                if( t < 1 )
                    window.requestAnimationFrame(animateScroll);
                else
                    onDone && onDone();
            };
    
            animateScroll();
        }
        function scrollTo(element, to, duration, onDone) {
            var start = element.scrollTop,
            change = to - start,
            startTime = performance.now(),
            val, now, elapsed, t;
    
            function animateScroll(){
                now = performance.now();
                elapsed = (now - startTime)/1000;
                t = (elapsed/duration);
    
                element.scrollTop = start + change * easeInOutQuad(t);
    
                if( t < 1 )
                    window.requestAnimationFrame(animateScroll);
                else
                    onDone && onDone();
            };
    
            animateScroll();
        }
        function easeInOutQuad(t){ return t<.5 ? 2*t*t : -1+(4-2*t)*t };
    
            /* ---------------------------*/
            /* words color change in senB */
    
    
    
            //get the score
            //console.log(result1.labels)
            //console.log(senbcontent)
    
            //the order should be true or it will cause problem
            //changecolor(ele.id)
    
    }
    function onmouse(ele){
        eleid = ele.id
    
        changecolor(eleid)
    }
    function outmouse(ele){
        eleid = ele.id
        cancelcolor(eleid)
    }
    function changecolor(eleid){
        var item = localStorage.getItem("itemnow").toString()
    
        //console.log(score2color(0.4))
        //console.log(Object.keys(score[ele.id]).length)
        //get score2color
        let color = []
        //console.log(score[eleid])
        for(var j=0; j<Object.keys(score[eleid]).length;j++){
            c = score2color(score[eleid][j])
            color.push(c)
        }
        //console.log(color[1])
    
    
        //console.log(color,item)
        //console.log('.'+ele.id +' .senbwords')
        let senbword1 = document.querySelectorAll('#'+eleid+ ' .senbwords_' + item)
        //console.log("senbword1",senbword1)
        //float up? 
        //senbword1.style.transform = "rotate(7deg)"
    
    
        //console.log(senbword1)
        for (var i=0; i < color.length;i++){
            //background: linear-gradient(90deg, #FFC0CB 50%, #00FFFF 50%)
            // senbword1 : 0, 2, 4, 6, 8 -> n
            // space : 1,3,5,7,9 -> n
            // color index : 0,1,2,3,4,5 
            // i am a student : color length=4, space length=3, 
            let c1 = "#"+color[i];
            let c2 = "#"+color[i+1];
            //console.log(c1)
            senbword1[i*2].style.transitionDuration = "0.5s"
            senbword1[i*2].style.backgroundColor = "#"+color[i];
            senbword1[i*2].style.padding = '0.25em 0'
            senbword1[i*2].style.borderRadius = '0px' 
            if(i==0){
                senbword1[i*2].style.borderTopLeftRadius = '25px' 
                senbword1[i*2].style.borderBottomLeftRadius = '25px' 
            }
    
            if(i*2+1 < 2*color.length-2){
                senbword1[i*2+1].style.transitionDuration = "0.5s"
                senbword1[i*2+1].style.background =  'linear-gradient(to right, ' + c1 + ' 50%, ' + c2 + ' 50%)';
                senbword1[i*2+1].style.padding = '0.25em 0'
                senbword1[i*2+1].style.borderRadius = '0px' 
            }
            if(i==(color.length-1)){
                senbword1[i*2].style.borderTopRightRadius = '25px' 
                senbword1[i*2].style.borderBottomRightRadius = '25px' 
            }
                //'linear-gradient(90deg,'+c1+' 50%, '+c2+'50%)'
            /*
            if(i*2+1 == 2*color.length-1){
                senbword1[i*2+1].style.animationDuration = "0.5s"
                senbword1[i*2+1].style.backgroundColor = "#"+color[color.length-1]
                senbword1[i*2+1].style.padding = '0.25em 0'
                senbword1[i*2+1].style.borderTopRightRadius = '10px' 
                senbword1[i*2+1].style.borderBottomRightRadius = '10px' 
            }*/
    
    
        }
        //console.log(senbword1)
        //console.log(i*2+1)
        //console.log(senbword1.length)
    
    }
    function cancelcolor(eleid){
        var item = localStorage.getItem("itemnow").toString()
        var lastclick = localStorage.getItem("lastclick")
        let senbword1 = document.querySelectorAll('#'+eleid+ ' .senbwords_' + item)
        //console.log(senbword1.length)
        for (var i=0; i < senbword1.length;i++){
            senbword1[i].style.transitionDuration = "0.5s"
            senbword1[i].style.background = null;
            senbword1[i].style.backgroundColor = null;
            /*
            if(i%2==1){
                senbword1[i].style.transitionDuration = "0.5s"
                senbword1[i].style.background = null;
                senbword1[i].style.backgroundColor = "#FFFF66";
                senbword1[i].style.borderRadius = '0 px'
            }
            else{
                if(i==0 && i==senbword1.length-1){
                    senbword1[i].style.transitionDuration = "0.5s"
                    senbword1[i].style.backgroundColor = "#FFFF66";
                    senbword1[i].style.borderTopLeftRadius = '25px' 
                    senbword1[i].style.borderBottomLeftRadius = '25px' 
                }
                else{
                    senbword1[i].style.transitionDuration = "0.5s"
                    senbword1[i].style.backgroundColor = "#FFFF66";
                    senbword1[i].style.borderRadius = '0 px'
                }
                
            }*/
    
            //console.log(senbword1[i])
        }
        let senb = document.getElementById(eleid)
        var lastitem = lastclick.split('_')[1];
        var lastsen = lastclick.split('_')[0];
        //lastclick : sena
        //hover : senb
        if(lastsen == "sena"){
            var last = sendic_a2b[lastitem][lastclick]
        }else{
            var last = lastclick
        }
    
        if(last == eleid){
            //senb keep red color
            senb.style.backgroundColor = "#ed4264"
            senb.style.borderRadius = "25px"
            senb.style.cursor = "pointer"
            senb.style.padding = "0.25em 0"
        }else{
            senb.style.backgroundColor = "#FFFF66"
            senb.style.borderRadius = "25px"
            senb.style.cursor = "pointer"
            senb.style.padding = "0.25em 0"
        }
    }