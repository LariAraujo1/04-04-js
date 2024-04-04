const btn = document.querySelector("#my-button")

btn.addEventListener("click", function () {
    console.log("Clicou!")
})

// Test
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}
secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

const title = document.querySelector("#my-title")

title.addEventListener("click", (event) =>{
  console.log(event);
  console.log(e.offsetX);
})

const containerBtn = document.querySelector("#btn-container");

const btnInsideContainer = document.querySelector("div-btn");

containerBtn.addEventListener("click", ()=> {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e)=>{
  console.log("evento 2");
});

//para que o site (colocado no html) não funcione

a.addEventListener9("click", (e)=>{
  e.preventDefault();
  console.log("não alterou a pagina");
});

document.addEventListener("keyup", (e)=>{
  console.log(`Soltou a tecla ${e.key}`);
});
