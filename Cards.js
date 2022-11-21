let btn = document.getElementById("daleMaza");
let btn2 = document.getElementById("borrarElement");
let btn3 = document.getElementById("toggleClass");

let divContenedor = document.getElementById("contenidoDiv");

let title = document.getElementById("titulo");
let url = document.getElementById("direccionWEB");
let content = document.getElementById("contenido");
let arrayCards = [];



btn.addEventListener("click", () => {
  let titleValue = title.value
  let urlValue = url.value
  let contentValue = content.value


  let elementTemp = document.createElement("div")
  elementTemp.classList.add("tarjetas")

  elementTemp.onclick = () => {
    elementTemp.classList.toggle("ocultar")
  }


  divContenedor.appendChild(elementTemp)

  arrayCards = document.getElementsByClassName("tarjetas");

  arrayCards[arrayCards.length - 1].innerHTML =
    `<div class="card" style="width: 18rem;">
  <img src=${urlValue} class="card-img-top" id="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title" id="card-title">${titleValue}</h5>
  <p class="card-text" id="card-text">${contentValue}</p>
  </div>
  </div>`;

})

btn2.addEventListener("click", () => {
  divContenedor.removeChild(divContenedor.lastChild)
})

btn3.addEventListener("click", () => {
  for (let i = 0; i < arrayCards.length; i++) {
    arrayCards[i].classList.remove("ocultar");
  }
})

//arrayCards = document.querySelectorAll("tarjetas")





//arrayCards.push(elementTemp)

//https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg

//https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg

//https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhfGVufDB8fDB8fA%3D%3D&w=1000&q=80