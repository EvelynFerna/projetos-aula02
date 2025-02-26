const uri = 'http://localhost:3000';

//Obtendo o título do servidor
const titulo = document.querySelector('header h1'); 
fetch(uri)
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp.titulo);


const corpo = document.querySelector('table tbody'); 
fetch(uri + '/feedbacks')
    .then(resp => resp.json())
    .then(resp => {
        resp.forEach(f => {
            const linha = document.createElement('tr')
            linha.innerHTML = `
                <td>${f.feedback_id}</td>
                <td contenteditable="true">${f.nome}</td>
                <td contenteditable="true">${f.email}</td>
                <td contenteditable="true">${f.feedback}</td>
                <td contenteditable="true">${new Date(f.data).toLocaleDateString('pt-BR')} ${f.data.split('T')[1].split('.')[0].slice(0,5)}</td>
                <td><button onclick="alterar(this)">*</button><button onclick="excluir(${f.feedback_id})">-</button></td>
            `;
            corpo.appendChild(linha);
        });
    });

//Enviando uma nova consulta para o servidor
const form = document.querySelector('form'); //DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const body = {
        nome: form.nome.value,
        email: form.email.value,
        data: form.data.value,
        feedback: form.feedback.value
    };

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.3.1' },
        body: JSON.stringify(body)
    };

    fetch(uri + '/feedbacks', options)
        .then(resp => resp.status)
        .then(resp => resp === 201 ? window.location.reload() : alert(resp))
        .catch(err => console.error(err));
});

//Alterar uma consulta no servidor
function alterar(botao) {
    const linha = botao.parentNode.parentNode;
    const id = linha.children[0].innerText;
     const data = linha.children[1].innerText;
    const nome = linha.children[2].innerText;
    const email = linha.children[3].innerText;
    const feedback = linha.children[4].innerText;
    
  
    const body = {
        nome: nome,
        email: email,
        feedback: feedback,
        data: new Date(data).toISOString()
    };

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.3.1' },
        body: JSON.stringify(body)
    };

    fetch(uri + '/feedbacks/' + id, options)
        .then(resp => resp.status)
        .then(resp => resp === 202 ? window.location.reload() : alert(resp))
        .catch(err => console.error(err));
}

//Excluir uma consulta do servidor
function excluir(id) {
    fetch(uri + '/feedbacks/' + id, { method: 'DELETE' })
        .then(resp => resp.status)
        .then(resp => resp === 204 ? window.location.reload() : alert(resp))
        .catch(err => console.error(err));
}