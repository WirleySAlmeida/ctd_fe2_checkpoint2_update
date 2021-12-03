const cardsContainer = document.querySelector('.cards-container');

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    console.log(data);
    data.forEach(element => {
        criaCard(element, cardsContainer);
    });
}

async function criaCard(obj , elementoPai) {
    if(obj.completed){
        elementoPai.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <h2 class="completed">${obj.title}</h2>
                </div>
                <div class="card-date">
                    <p>Todo ID: ${obj.id}</p>
                    <p>User ID: ${obj.userId}</p>
                </div>
            </div>
        `;
    } else {
        elementoPai.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <h2 class="todo">${obj.title}</h2>
                </div>
                <div class="card-date">
                    <p>Todo ID: ${obj.id}</p>
                    <p>User ID: ${obj.userId}</p>
                </div>
            </div>
        `;
    }
}

fetchData();