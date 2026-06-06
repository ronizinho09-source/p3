// BUSCA DE CUIDADORES
const campoBusca = document.getElementById("busca");
const cards = document.querySelectorAll(".list-item");

campoBusca.addEventListener("input", function () {
    const texto = this.value.toLowerCase();

    cards.forEach(card => {
        const nome = card.querySelector(".list-item-nome")
                         .textContent
                         .toLowerCase();

        const especialidade = card.querySelector(".info")
                                  .textContent
                                  .toLowerCase();

        if (
            nome.includes(texto) ||
            especialidade.includes(texto)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// FILTRAR POR CATEGORIA DE CUIDADOR
function filtrar(tipo){
    const cards = document.querySelectorAll(".list-item");

    cards.forEach(card => {

        if(tipo === "todos"){
            card.style.display = "block";
            return;
        }

        if(card.classList.contains(tipo)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}