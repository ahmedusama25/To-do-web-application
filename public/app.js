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

    
    firebase.database().ref("Acvtivity").set(getInput.value)

    getInput.value = ""

 


}


function delList(e){
    e.parentNode.remove()
    // console.log(e.getAttribute)
}

// function updateList(a){
//     var target = a.parentNode.firstChild
//     var inp = prompt("Enter the updated value",target.nodeValue)
//     target.nodeValue=inp

// }
function updateList(a){
    var target = a.parentNode.firstChild
    var inp = document.createElement("input")
    // target.nodeValue.appendChild(inp)
    target.nodeValue=inp.innerHTML

}