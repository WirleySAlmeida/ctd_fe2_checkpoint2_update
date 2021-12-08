let title = document.getElementById('title');
let dueDate = document.getElementById('dueDate');
let submit = document.getElementById('submit');
let cardsContainer = document.querySelector('.cards-container');
let d = new Date();

function enviarDados(){
    let erros = [];
    if (title.value == "" || title.value.length < 10 ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'A descrição deve ter no mínimo 10 caracteres',
        })
        title.focus();
        erros.push("");
    }else if (dueDate.value == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Insira a Data',
        })
        dueDate.focus();
        erros.push("");
    }else {
        Swal.fire({
            icon: 'success',
            title: 'Tudo Certo',
            text: 'A tarefa foi criada com sucesso',
        })
    }

    if (erros.length > 0){
        return false;
    } else{
        return true;
    }
}

function criaCard(elementoPai) {
    elementoPai.innerHTML += `
        <div class="card">
            <div class="options">
                <div class="custom-checkbox"></div>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                </svg>
            </div>
            <div class="card-header">
                <h2>${title.value}</h2>
            </div>
            <div class="card-date">
                <p>Criada em: ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}</p>
                <p>Limite: ${dueDate.value.slice(8)}/${dueDate.value.slice(5, 7)}/${dueDate.value.slice(0, 4)}</p>
            </div>
        </div>
    `;
}

submit.addEventListener('click', (evento) => {

    evento.preventDefault();

    if (enviarDados()){
        criaCard(cardsContainer);
        title.value = "";
        dueDate.value = "";
    }
})

cardsContainer.addEventListener('click', (evento) => {
    
    evento.preventDefault();

    let elemento = evento.target;
    let paiDoElemento = elemento.parentNode;

    if (elemento.classList.contains('custom-checkbox')){
        elemento.classList.add('checked');
    }

    if (elemento.classList.contains('svg-inline--fa')){
        let excluirAnotacao = confirm("Deseja excluir a anotação?");
        if (excluirAnotacao){
            cardsContainer.removeChild(paiDoElemento.parentNode);
        }
    }
})