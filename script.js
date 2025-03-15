let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// creating li items

btn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText=(input).value;
  let delbtn = document.createElement("button");
  delbtn.innerText="delete";
  li.appendChild(delbtn);
  ul.appendChild(li);
  input.value="";
});

// delete button code

ul.addEventListener("click",(event) => {

  if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.dir(event.target.parentElement.textContent + "d");
  }

})

