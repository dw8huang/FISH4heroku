

let indexA_tp1 = []
let indexB_tp1 = []
let indexA_tp2 = []
let indexB_tp2 = []
let indexA_tp3 = []
let indexB_tp3 = []


//build type1 index
for (var j=0; j<result.type1.length;j++){
    let senA_tp1 = result.type1.senA
    let senB_tp1 = result.type1.senB
    indexA_tp1.push(data1.indexOf(senA_tp1))
    indexB_tp2.push(data2.indexOf(senB_tp1))
}
//build type2 index
//some #senA > 1
for (var j=0; j<result.type2.length;j++){
    for (var i=0; i<result.type2.senA.length;i++){
        let senA_tp2 = result.type2.senA
        indexA_tp2.push(data1.indexOf(senA_tp2))
    }
    let senB_tp2 = result.type2.senB
    indexB_tp2.push(data2.indexOf(senB_tp2))
}
//build type3 index
for (var j=0; j<result.type3.length;j++){
    let senA_tp3 = result.type3.senA
    let senB_tp3 = result.type3.senB
    indexA_tp3.push(data1.indexOf(senA_tp3))
    indexB_tp3.push(data2.indexOf(senB_tp3))
}

let paragraph1 = document.getElementById(id1);
let paragraph2 = document.getElementById(id2);

data1.map((part,i) => {
    if (indexA_tp1.includes(i)){
        var sena = document.createElement("span");
        
        sena.className = "senA " + "type1" 
        sena.setAttribute("onclick","click_a(this)")
        sena.innerHTML = part
        sena.style.backgroundColor = "#FFFF66"  //type1 color
        sena.style.borderRadius = "25px"
        sena.style.cursor = "pointer"
        sena.style.padding = "0.25em 0"
        paragraph1.innerHTML += sena.outerHTML
    }
    else if (indexA_tp2.includes(i) & indexA_tp3.includes(i)){
        var sena = document.createElement("span")
        sena.className = "senA " + "type2 " + "type3"
        sena.setAttribute("onclick","click_a(this)")
        sena.innerHTML = part
        sena.style.backgroundColor = "#FFFF66"  //type2 color
        sena.style.borderRadius = "25px"
        sena.style.cursor = "pointer"
        sena.style.padding = "0.25em 0"
        paragraph1.innerHTML += sena.outerHTML
    }
    else if (indexA_tp2.includes(i)){
        var sena = document.createElement("span")
        sena.className = "senA " + "type2"
        sena.setAttribute("onclick","click_a(this)")
        sena.innerHTML = part
        sena.style.backgroundColor = "#FFFF66"  //type2 color
        sena.style.borderRadius = "25px"
        sena.style.cursor = "pointer"
        sena.style.padding = "0.25em 0"
        paragraph1.innerHTML += sena.outerHTML
    }
    else if (indexA_tp3.includes(i)){
        var sena = document.createElement("span")
        sena.className = "senA " + "type3"
        sena.setAttribute("onclick","click_a(this)")
        sena.innerHTML = part
        sena.style.backgroundColor = "#FFFF66"  //type3 color
        sena.style.borderRadius = "25px"
        sena.style.cursor = "pointer"
        sena.style.padding = "0.25em 0"
        paragraph1.innerHTML += sena.outerHTML
    }
    else{
        paragraph1.innerHTML += part == "\n" ? '<br>' : part + ' '
    }
})

data2.map((part,i) => {
    if (indexB_tp1.includes(i)){
        var senb = document.createElement("span");
        senb.className = "senB " + "type1"
        senb.setAttribute("onclick","click_b(this)")
    
        senb.innerHTML = part
        senb.style.backgroundColor = "#FFFF66" //type1 color
        senb.style.borderRadius = "25px"
        senb.style.cursor = "pointer"
        senb.style.padding = "0.25em 0"
        paragraph2.innerHTML += senb.outerHTML
    }
    else if (indexB_tp2.includes(i) & indexB_tp3.includes(i)){
        var senb = document.createElement("span");
        senb.className = "senB " + "type2 " + "type3"
        senb.setAttribute("onclick","click_b(this)")
        senb.setAttribute("onmouseover","onmouse(this)")
        senb.setAttribute("onmouseout","outmouse(this)")
    
        senb.innerHTML = part
        senb.style.backgroundColor = "#FFFF66" //type2 color
        senb.style.borderRadius = "25px"
        senb.style.cursor = "pointer"
        senb.style.padding = "0.25em 0"
        paragraph2.innerHTML += senb.outerHTML
    }
    else if (indexB_tp2.includes(i)){
        var senb = document.createElement("span");
        senb.className = "senB " + "type2 "
        senb.setAttribute("onclick","click_b(this)")
        senb.setAttribute("onmouseover","onmouse(this)")
        senb.setAttribute("onmouseout","outmouse(this)")
    
        senb.innerHTML = part
        senb.style.backgroundColor = "#FFFF66" //type2 color
        senb.style.borderRadius = "25px"
        senb.style.cursor = "pointer"
        senb.style.padding = "0.25em 0"
        paragraph2.innerHTML += senb.outerHTML
    }
    else if (indexB_tp3.includes(i)){
        var senb = document.createElement("span");
        senb.className = "senB " + "type3"
        senb.setAttribute("onclick","click_b(this)")
    
        senb.innerHTML = part
        senb.style.backgroundColor = "#FFFF66" //type3 color
        senb.style.borderRadius = "25px"
        senb.style.cursor = "pointer"
        senb.style.padding = "0.25em 0"
        paragraph2.innerHTML += senb.outerHTML
    }
    else{
        paragraph2.innerHTML += part == "\n" ? '<br>' : part + ' ' 
    }
    

})
sendic_b2a = {}
sendic_b2a["type1"] = {}
sendic_b2a["type2"] = {}
sendic_b2a["type3"] = {}

let tp1sena = document.querySelectorAll(".senA.type1")
let tp1senb = document.querySelectorAll(".senB.type1")
// give id & class
for(var j=0; j<result.type1.length;j++){

    tp1sena[data1[indexA_tp1[j]]]
    tp1sena[j].id = "senA type1 " + j
    tp1senb[j].id = "senB type1 " + j
    sendic_b2a["type1"][tp1senb[j].id] = tp1sena[j].id
    sendic_a2b["type1"][tp1sena[j].id] = tp1senb[j].id
}


let tp3sena = document.querySelectorAll(".senA.type3")
let tp3senb = document.querySelectorAll(".senB.type3")
for(var j=0; j<result.type3.length;j++){
    tp3sena[j].id = "senA type3 " + j
    tp3senb[j].id = "senB type3 " + j
    sendic_b2a["type3"][tp3senb[j].id] = tp3sena[j].id
    sendic_a2b["type3"][tp3sena[j].id] = tp3senb[j].id
}

//give type2 id
let tp2sena = document.querySelectorAll(".senA.type2")
let tp2senb = document.querySelectorAll(".senB.type2")
// give id & class
for(var j=0; j<result.type1.length;j++){
    tp1sena[j].id = "senA type1 " + j
    tp1senb[j].id = "senB type1 " + j
    sendic_b2a["type1"][tp1senb[j].id] = tp1sena[j].id
    sendic_a2b["type1"][tp1sena[j].id] = tp1senb[j].id
}







senaid = "senA_" + item
senbid = "senB_" + item
var senb = document.getElementsByClassName(senbid);
var sena = document.getElementsByClassName(senaid);



senb_item[item] = []
sena_item[item] = []

sendic_b2a[item] = {}
sendic_a2b[item] = {}
//highlight words in sen
for (var n= 0; n < result.length; n++) {
    senb[n].id = "senb_" + item + "_" + n;
    sena[n].id = "sena_" + item + "_" + n;
    
    
    
    senbword = document.getElementById(senb[n].id)
    let senbcontent = senbword.innerHTML
    let brokensenb = senbcontent.split(" ");
    
    senbword.innerHTML = ''
    brokensenb.map((part,i) => {
        var word = document.createElement("span");
        var space = document.createElement("span");
        word.className = "senbwords_" + item
        word.innerHTML = part
        space.className = "senbwords_" + item
        space.innerHTML = ' '
        //console.log(word)
        senbword.innerHTML += i+1==brokensenb.length ? word.outerHTML : word.outerHTML + space.outerHTML
    })
    
    for(var m=0;m<(brokensenb.length*2-1);m++){
        let senbword1 = document.querySelectorAll('#'+senb[n].id+ ' .senbwords_' + item)
        
        senbword1[m].id = senb[n].id + "_" + m
        //console.log(senbword1[m])
    }

    
    senb_item[item].push(senb[n].id)
    
    sena_item[item].push(sena[n].id)
    
    //adjust
    
    sendic_b2a[item][senb[n].id] = sena[n].id;
    sendic_a2b[item][sena[n].id] = senb[n].id;
}