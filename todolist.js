var ul= document.getElementById("taskList");
var input=document.getElementById("taskInput");
function add(){
    var listItem=document.createElement("li");
    listItem.innerHTML=input.value + "<button onclick='delet(event)'>Delet</button>"
    ul.append(listItem);
}
function delet(event){
    event.target.parentElement.remove()
}
