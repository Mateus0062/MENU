let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

const btnPesquisarCPF = document.querySelector("#btnPesquisar");

btnPesquisarCPF.addEventListener("click", event => {
  event.preventDefault();

  const inputCPF = document.querySelector("#cpfcnpj");
  const valorCPF = inputCPF.value; 
  const url = 'https://api.cofeci.gov.br/api/BuscaCorretorEmpresa'; 

 
  const data = {
    cpfcnpj: valorCPF 
  };

  fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(data) 
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; 

    
    resultadoDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    document.getElementById("resultado").innerText = "Ocorreu um erro: " + error.message; 
  });
});