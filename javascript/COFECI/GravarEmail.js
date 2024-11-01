let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

const btnPesquisar = document.querySelector("#btnPesquisar");

btnPesquisar.addEventListener("click", async (event) => {
  event.preventDefault();

  const inputEmail = document.querySelector("#emailPagina");
  const valorEmail = inputEmail.ariaValueMax;
  const url = '/proxy/GravarEmail';
  const data = {
    Token: "39265653db698e339e83d8f695d0a38161f03a2b",
    CodigoInscricao: "56427",
    IdCategoriaInscricao: 1,
    Pessoa: "F",
  }

  try {
    const result = await fetchFromApi(url, 'POST', data);
    document.getElementById("resultado").innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`; 
  } catch (error) {
    document.getElementById("resultado").innerText = "Ocorreu um erro: " + error.message;
  }
})