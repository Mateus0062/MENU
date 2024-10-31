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

/*document.getElementById("FormAPI").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const cpfCnpj = document.getElementById("cpfcnpj").value;
  
    try {
      const response = await fetch("https://api.cofeci.gov.br/api/BuscaCorretorEmpresa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Token": "39265653db698e339e83d8f695d0a38161f03a2b",
          "CPFCNPJ": cpfCnpj,
          "Usuario": "Esteliano"
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
  
        // Exibe as informações no elemento "resultado"
        document.getElementById("resultado").innerHTML = data.map(item => `
          <div>
            <h3>Informações do Corretor:</h3>
            <p>Nome: ${item.Nome}</p>
            <p>CPF/CNPJ: ${item.CPFCNPJ}</p>
            <p>CRECI: ${item.CRECI}</p>
            <p>Região: ${item.Regiao}</p>
            <p>Data de Inscrição: ${new Date(item.DataInscricao).toLocaleDateString()}</p>
            <p>Situação: ${item.Situacao}</p>
            <p>Descrição da Inativação: ${item.DescricaoInativacao || "N/A"}</p>
            <hr>
          </div>
        `).join("");
      } else {
        document.getElementById("resultado").innerHTML = "Erro ao buscar informações.";
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      document.getElementById("resultado").innerHTML = "Erro na conexão com a API.";
    }
  });*/
  