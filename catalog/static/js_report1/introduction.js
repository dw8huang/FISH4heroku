
function intro(){
    var curryear = localStorage.getItem("yearnow")
    var company = localStorage.getItem("companynow")
    var item = localStorage.getItem("itemnow").toString()
    var firstlinebid = company+"_"+curryear.split("20")[1]+"_"+item.toUpperCase()+"_P0_S0"
    var id2item = company+"_"+curryear.split("20")[1]+"_"+item.toUpperCase()
    console.log($(".senB.type1"))
    
    introJs().setOptions({
        steps:[
        //topselect
        {
            element:document.getElementById("topselect"),
            title:"Company metadata",
            intro:"",
            position:'right'
        },
        {
            element:document.getElementById("leftreport"),
            title:"Target document",
            intro:"the contents of a financial report for the target year",
            position:'right'
        },
        {
            element:document.getElementById("rightreport"),
            title:"Reference document",
            intro:"the reference document for the previous year with a lower opacity",
            position:'left'
        },
        //itemlist
        {
            element: document.getElementById("itemlist2_curr"),
            title: "ITEM navigation button",
            intro: 'locate the first line of the target ITEM',
            position: 'right'
        },
        //main function ******
        {
            element: document.getElementById("leftreport"),
            intro: '<h3>Sentence types :</h3>'+
            '<ul><li><span style="background-color:#dfface;color:black;padding:0.02em 0">New segments</span><span> are new text segments which are syntactically distant from all of their corresponding relevant reference text segments.</span></li>'+
            '<li><span style="background-color:#f3e7ff;color:black">Highly similar segments</span><span> are text segments possessing syntactic structures and semantic meanings that closely resemble those of the reference segments.</span></li>'+
            '<li><span style="background-color:#ffbe40;color:black">Revised segments</span><span> include segments that are syntactically similar to the reference segments but differ semantically in meaning.</span></li> </ul>'+
            
            '<h3>Alignment :</h3>'+
            '<span>horizontally align the most similar segments from the previous year by clicking the segments</span>'+

            '<h3>Fine-grained Highlighting :</h3>'+
            '<span>indicate the word importance by hovering over the </span>'+'<span style="background-color:#ffbe40;color:black">revised segments</span>',
            position: 'right'
        },
        //typebutton
        {
            element: document.getElementById("typebutton"),
            title: "Segment types",
            intro: 'enable/disable highlighting for each type of segments',
            position: 'bottom'
        },
        //change year
        {
            element: document.getElementById("rightform"), 
            title: "Change year",
            intro: "switch back and forth between the target years by clicking arrows",
            position: 'left'
        }
        ]
    }).start(); 
    
    
    
    
}




