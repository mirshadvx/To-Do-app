const inputBox = document.getElementById("input-box");
const listcontainer = document.querySelector(".listcontainer");

function addTask() {
  if (inputBox.value == "") {
    alert("please add your text !!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listcontainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
})

function saveData(){
  localStorage.setItem("data",listcontainer.innerHTML);
}
function showData(){
  listcontainer.innerHTML = localStorage.getItem("data");
}
showData();