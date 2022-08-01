
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
            intro:"the contents of a financial report for the target year.",
            position:'right'
        },
        {
            element:document.getElementById("rightreport"),
            title:"Reference year",
            intro:"the reference document with a lower opacity.",
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
            intro: 'three types of segments with different color',
            position: 'right'
        },
        //typebutton
        {
            element: document.getElementById("typebutton"),
            title: "Segment types",
            intro: 'enable/disable highlighting for each type of segment',
            position: 'bottom'
        },
        //change year
        {
            element: document.getElementById("rightform"), 
            title: "Change year",
            intro: "switch back and forth between target years by clicking arrows",
            position: 'left'
        }
        ]
    }).start(); 
    
    
    
    
}




