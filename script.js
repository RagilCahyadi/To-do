const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const searchInput = document.getElementById("search-input");
const noResultMsg = document.getElementById("no-results");

function addTask(event){
    event.preventDefault();

    if(inputBox.value === ''){
        alert("You must write something!");
    }else{ 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    

}
    // Hello it's me Vaibhav suryavanshi please dont copy my code!!

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false)

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask(e);
        saveData();
    }
});

searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toLowerCase();
  const li = listContainer.getElementsByTagName("li");
  let hasVisibleItems = false;

  for (let i = 0; i < li.length; i++) {
    let textValue = li[i].textContent || li[i].innerText;
    textValue = textValue.replace("\u00d7", "");

    if (textValue.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      hasVisibleItems = true;
    } else {
      li[i].style.display = "none";
    }

    if (hasVisibleItems) {
      noResultMsg.style.display = "none"; 
    } else {
      noResultMsg.style.display = "block"; 
    }
  }
});

document.querySelector(".add").addEventListener("click", function(e){
    addTask(e);
    saveData();
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();