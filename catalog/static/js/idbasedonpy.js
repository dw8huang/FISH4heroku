/* create report */
// how to give type, senA, sentence id
/*

/////type2///// 
for (i in result.type2.length){
    //senA
    for (j in result.type2[i].senA.length){
        let a = document.getelementbyid(j)
        a.classname = a.classname + " type2 " + i + " " + j
        //senA type2 0 0 
        //senA type2 0 0 type3
    }
    //senB
    for (j in result.type2[i].senB){
        let b = document.getelementbyid(j)
    }
}
/////type3/////
for (i in result.type3.length){
    //senA
    for (j in result.type3[i].senA.length){
        let a = document.getelementbyid(j)
        a.classname = a.classname + " type3 " + i + " " + j
        //senA type2 0 0 
        //senA type2 0 0 type3
    }
    //senB
    for (j in result.type2[i].senB){
        let b = document.getelementbyid(j)
    }
}


*/


let id1 = "report1_" + item
let id2 = "report2_" + item
var indexA = []
var indexB = []
let paragraph1 = document.getElementById(id1);
let paragraph2 = document.getElementById(id2);
//console.log(paragraph1)
data1.map((part,i) => {
    if (part=="\n"){
        paragraph1.innerHTML += part == "\n" ? '<br>' : part + ' '
    }
    else{
        var sena = document.createElement("span");
        sena.id = givevalue(sen2id1,part);
    }

})
data2.map((part,i) => {
    
    if (part=="\n"){
        paragraph2.innerHTML += part == "\n" ? '<br>' : part + ' '
    }
    else{
        var senb = document.createElement("span");
        senb.id = givevalue(sen2id2,part);
    }
    
    
})
