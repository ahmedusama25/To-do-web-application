function addBtn(){
    var getInput = document.getElementById("getInput")
    var listElement= document.createElement("li")
    var listText= document.createTextNode(getInput.value)
    var todoList = document.getElementById("todoList")
    listElement.appendChild(listText)
    

    var delbtn = document.createElement("button")
    var delbtnText = document.createTextNode("delete")
    
    delbtn.appendChild(delbtnText) 
    listElement.appendChild(delbtn)

    delbtn.setAttribute("onclick","delList(this)")

    var updBtn = document.createElement("button")
    var updBtnText = document.createTextNode("update")
    updBtn.append(updBtnText)
    listElement.appendChild(updBtn)
    updBtn.setAttribute("onclick","updateList(this)")   
    todoList.appendChild(listElement)

    var key = firebase.database().ref("Activity").push().key
    
    firebase.database().ref("Activity/" + key).set(getInput.value)


    delbtn.setAttribute("id",key)
    updBtn.setAttribute("id",key)

    getInput.value = ""

 

    //console.log(delbtn.getAttribute("id"))
}


function delList(e){
    e.parentNode.remove()



    firebase.database().ref("Activity/" + e.getAttribute("id")).remove()
    console.log(e.getAttribute("id"))
}

// function updateList(a){
//     var target = a.parentNode.firstChild
//     var inp = prompt("Enter the updated value",target.nodeValue)
//     target.nodeValue=inp

// }
function updateList(a){
    var target = a.parentNode
    var edit = prompt("Enter the updtaed value") 
    //var inp = document.createElement("input")
    // target.nodeValue.appendChild(inp)
    // target.nodeValue=inp.innerHTML
    target.firstChild.nodeValue = edit
    firebase.database().ref("Activity/" + a.id).set(edit)
}