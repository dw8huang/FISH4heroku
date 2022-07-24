function writereport(data1,data2,item){
    let report1 = data1
    let report2 = data2
    let paragraph1 = document.getElementById('report1_'+item);
    let paragraph2 = document.getElementById('report2_'+item);
    paragraph1.innerHTML = ''
    paragraph2.innerHTML = ''
    //paragraph2.innerHTML = ''
    
    report1.map((part,i) => {
        //console.log(part, i)
        paragraph1.innerHTML += part == "\n" ? '<br>' : part + ' '
    })
    report2.map((part,i) => {
        paragraph2.innerHTML += part == "\n" ? '<br>' : part + ' '
    }) 
}
function create_reportrow(item){
    var reportrow = document.createElement("div");

    var parent_leftreport = document.createElement("div");
    var leftreport = document.createElement("div")
    var report1 = document.createElement("div")

    var parent_rightreport = document.createElement("div");
    var rightreport = document.createElement("div")
    var report2 = document.createElement("div")

    reportrow.className = "row"
    reportrow.id = "reportrow_" + item
    reportrow.style.position = "relative"
    //reportrow.style.top = "50px"
    //reportrow.style.height = "900px"
    //reportrow.style.marginTop = "100px"
    //reportrow.style.display = "none";


    parent_leftreport.className = "col-md"
    parent_leftreport.id = "parent_leftreport"
    parent_leftreport.style.width = "700px"
    leftreport.className = "col-md"
    leftreport.id = "leftreport_" + item
    //leftreport.style.width = "750px"
    leftreport.style.height = "700px"
    leftreport.style.position = "relative"
    //leftreport.style.left = "15px"
    //leftreport.style.marginBottom = "100px"
    leftreport.style.overflowY = "auto"
    leftreport.style.alignItems = "center"
    leftreport.style.fontSize = "18px"
    leftreport.style.lineHeight = "40px"
    //leftreport.style.borderTop = "1px solid grey"
    leftreport.style.borderLeft = "3px solid #DCDCDC"
    //leftreport.style.borderBottom = "1px solid grey"
    //leftreport.style.borderRadius = "5px"
    report1.id = "report1_" + item
    report1.style.margin = "3px"

    parent_rightreport.className = "col-md"
    parent_rightreport.id = "parent_rightreport"
    parent_rightreport.style.width = "700px"
    rightreport.className = "col-md"
    rightreport.id = "rightreport_" + item
    //rightreport.style.width = "750px"
    rightreport.style.height = "700px"
    rightreport.style.position = "relative"
    //rightreport.style.left = "15px"
    //rightreport.style.marginBottom = "100px"
    rightreport.style.overflowY = "auto"
    rightreport.style.alignItems = "center"
    rightreport.style.fontSize = "18px"
    rightreport.style.lineHeight = "40px"
    //rightreport.style.borderTop = "1px solid grey"
    rightreport.style.borderLeft = "3px solid #DCDCDC"
    //rightreport.style.borderBottom = "1px solid grey"
    //rightreport.style.borderRadius = "5px"
    report2.id = "report2_" + item
    report2.style.margin = "3px"


    var frag1 = document.createDocumentFragment();
    var frag2 = document.createDocumentFragment();
    frag1.appendChild(parent_leftreport)
    parent_leftreport.appendChild(leftreport)
    //frag1.appendChild(leftreport)
    leftreport.appendChild(report1)

    frag2.appendChild(parent_rightreport)
    parent_rightreport.appendChild(rightreport)
    //frag2.appendChild(rightreport)
    rightreport.appendChild(report2)

    reportrow.appendChild(frag1)
    
    reportrow.appendChild(frag2)
    $('#report_outline').append(
        reportrow
    );

}