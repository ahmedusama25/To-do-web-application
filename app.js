function Add(){
    var inpText = document.getElementById("inpText")
    var list = document.getElementById("list")
    var createNode = document.createElement("p")
    var nodeText = document.createTextNode(inpText.value)
    createNode.appendChild(nodeText)
    list.appendChild(createNode)
    inpText.value=""
}