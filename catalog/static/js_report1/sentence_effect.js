//for report first line
function scrollToElm(container, elm, duration){
    var pos = getRelativePos(elm);
    scrollTo( container, pos.top , 0.87);  // duration in seconds
}

//for sentence
function scrollToElm1(container, elm, elm1,duration){
    var pPos1 = elm1.parentNode.getBoundingClientRect() // parent pos leftreport
    cPos1 = elm1.getBoundingClientRect()
    //console.log("senb:",cPos1.top,pPos1.top,cPos1.top - pPos1.top,elm1.parentNode.scrollTop)

    var leftreport = document.getElementById("leftreport");
    senbchange = cPos1.top - pPos1.top - leftreport.scrollTop

    
    var pos = getRelativePos(elm);
    //console.log(elm1.scrollTop)
    //rightreport, sena's pos.top, duration
    scrollTo( container, pos.top-senbchange, 0.87);  // duration in seconds
    //pos1.top - leftreport.scrolltop 
}
function getRelativePos(elm){
    var pPos = elm.parentNode.getBoundingClientRect() // parent pos leftreport
    //console.log(elm.parentNode,pPos)
    cPos = elm.getBoundingClientRect(); // target pos senb
    //console.log(elm,cPos)
    winy = window.pageYOffset;
    //console.log(winy)
    pos = {};
    //console.log("sena:",cPos.top,pPos.top,cPos.top - pPos.top, elm.parentNode.scrollTop)
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

//0711 ok
function click_a(ele){
/* --------------------------------------------*/
/* jump to corresponding senA if clicking senB */
    //console.log(ele)
    
    var item = localStorage.getItem("itemnow").toString()
    let leftreportid = '#leftreport'
    let rightreportid = '#rightreport'
    var leftreport = document.querySelector(leftreportid);
    var rightreport = document.querySelector(rightreportid)
    
    var sena = document.getElementById(ele.id)
    var senatype = $('#'+ele.id).hasClass('type1') ? 'type1' : $('#'+ele.id).hasClass('type2') & $('#'+ele.id).hasClass('type3')  ? 'type2type3' : $('#'+ele.id).hasClass('type2') ? 'type2' : 'type3'

    if(senatype=='type2type3'){
        //check which button is active
        let state2 = $('#button2').hasClass('active')
        senatype = state2 ? 'type2' : 'type3'
        senb = document.getElementById(sendic_a2b[senatype][ele.id])
    }
    else{
        senb = document.getElementById(sendic_a2b[senatype][ele.id])
    }
    
    //type2
    //type3
    
    scrollToElm(rightreport,sena,600); 
    scrollToElm(leftreport,senb,600)

}


function click_b(ele){

    /* --------------------------------------------*/
    /* jump to corresponding senA if clicking senB */
    //console.log(ele)
    var item = localStorage.getItem("itemnow").toString()
    let leftreportid = '#leftreport'
    let rightreportid = '#rightreport'
    var leftreport = document.querySelector(leftreportid);
    var rightreport = document.querySelector(rightreportid)

    var lastclick = localStorage.getItem("lastclick")
    var lastactive = localStorage.getItem("lastactive")
    
        
    senb = document.getElementById(ele.id)
    var senbtype = $('#'+ele.id).hasClass('type1') ? 'type1' : $('#'+ele.id).hasClass('type2') & $('#'+ele.id).hasClass('type3')  ? 'type2type3' : $('#'+ele.id).hasClass('type2') ? 'type2' : 'type3'
    
    if(senbtype=='type2type3'){
        //check which button is active
        let state2 = $('#button2').hasClass('active')
        senbtype = state2 ? 'type2' : 'type3'
    }
    
    if (typeof(sendic_b2a[senbtype][ele.id])=='object'){
        if(lastclick==0){
            sena = document.getElementById(sendic_b2a[senbtype][ele.id][0])
            sena.style.opacity = 1 
            localStorage.setItem("lastclick",sendic_b2a[senbtype][ele.id][0])
            localStorage.setItem("lastactive",$('#button2').hasClass('active'))
        }
        else{
            if(sendic_b2a[senbtype][ele.id].includes(lastclick) & lastactive=='true'){
                console.log("here")
                let idx = sendic_b2a[senbtype][ele.id].indexOf(lastclick)
                idxx = idx==(sendic_b2a[senbtype][ele.id].length-1) ? 0 : idx+1
                sena = document.getElementById(sendic_b2a[senbtype][ele.id][idxx])
                
                localStorage.setItem("lastclick",sendic_b2a[senbtype][ele.id][idxx])
                localStorage.setItem("lastactive",$('#button2').hasClass('active'))

                sena.style.opacity = 1 
                lastsen = document.getElementById(lastclick)
                lastsen.style.opacity = 0.5
            }
            
            else{
                
                sena = document.getElementById(sendic_b2a[senbtype][ele.id][0])
                localStorage.setItem("lastclick",sendic_b2a[senbtype][ele.id][0])
                localStorage.setItem("lastactive",$('#button2').hasClass('active'))
                sena.style.opacity = 1 
                lastsen = document.getElementById(lastclick)
                lastsen.style.opacity = 0.5
            }
            
       
        }
    }
    else{
        if(lastclick==0){
            sena = document.getElementById(sendic_b2a[senbtype][ele.id]); // <-- Scroll to here within ".box"
            localStorage.setItem("lastclick",sendic_b2a[senbtype][ele.id])
            localStorage.setItem("lastactive",$('#button2').hasClass('active'))
            sena.style.opacity = 1
        }
        else if(lastclick == sendic_b2a[senbtype][ele.id]){
            sena = document.getElementById(sendic_b2a[senbtype][ele.id]); // <-- Scroll to here within ".box"
            localStorage.setItem("lastclick",sendic_b2a[senbtype][ele.id])
            localStorage.setItem("lastactive",$('#button2').hasClass('active'))
            sena.style.opacity = 1
        }
        else{
            sena = document.getElementById(sendic_b2a[senbtype][ele.id]); // <-- Scroll to here within ".box"
            localStorage.setItem("lastclick",sendic_b2a[senbtype][ele.id])
            localStorage.setItem("lastactive",$('#button2').hasClass('active'))
            sena.style.opacity = 1
            lastsen = document.getElementById(lastclick)
            lastsen.style.opacity = 0.5
        }
         
        
    }

    //scrollToElm(leftreport,senb,600)
    scrollToElm1(rightreport,sena,senb,600);  
    

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
    //console.log(color)
    
    
    
    //console.log('.'+ele.id +' .senbwords')
    let senbword1 = document.getElementById(eleid).getElementsByClassName("senbwords")
    //console.log(senbword1)
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
        senbword1[i*2].style.padding = '0.02em 0'
        senbword1[i*2].style.borderRadius = '0px' 
        if(i==0){
            senbword1[i*2].style.borderTopLeftRadius = '25px' 
            senbword1[i*2].style.borderBottomLeftRadius = '25px' 
        }
            
        if(i*2+1 < 2*color.length-2){
            senbword1[i*2+1].style.transitionDuration = "0.5s"
            senbword1[i*2+1].style.background =  'linear-gradient(to right, ' + c1 + ' 50%, ' + c2 + ' 50%)';
            senbword1[i*2+1].style.padding = '0.02em 0'
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
    let senbword1 = document.getElementById(eleid).getElementsByClassName("senbwords")
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
    
    var lastsen = lastclick.split('_')[0];
    //lastclick : sena
    //hover : senb
    
    /*
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
    }*/
}
