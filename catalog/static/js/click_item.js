function click_item(ele){
    let item = localStorage.getItem("itemnow")
    //console.log(item)
    curritemid = "reportrow_" + item
    //console.log(curritemid)
    curritem = document.getElementById(curritemid)
    //console.log(curritem)
    curritem.style.display = "none"
    
    localStorage.setItem("itemnow",$("#"+ele.id).val())
    
    let item1 = localStorage.getItem("itemnow")
    document.getElementById("leftinfo_item").innerHTML = item1
    //document.getElementById("rightinfo_item").innerHTML = item1
    curritemid = "reportrow_" + item1
    curritem = document.getElementById(curritemid)
    curritem.style.display = "flex"
    
               
}
