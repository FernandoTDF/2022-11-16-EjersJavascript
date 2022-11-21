let divContenedorNums = document.getElementById("contenedor")
let divContenedorBomba = document.getElementById("bomba")
let arrayDivs = []


function vamos() {
  let contador = 11;

  timerMostrador = setInterval(reloj, 1000);

  function reloj() {
    if (contador === 0) {
      clearInterval(timerMostrador);
      divContenedorNums.classList.add("invisible")
      divContenedorBomba.classList.toggle("invisible")
    } else {
      contador--;
      elementTemp = document.createElement("div")
      elementTemp.classList.add("card")
      divContenedorNums.appendChild(elementTemp)
      arrayDivs = document.getElementsByClassName("card");
      arrayDivs[arrayDivs.length - 1].innerHTML = contador;
      console.log(contador);
    }
  }

}

vamos();
/* for (let i=0; i < arrayDivs.length; i++ ){
arrayDivs[i].classList.add("invisible");
} */

