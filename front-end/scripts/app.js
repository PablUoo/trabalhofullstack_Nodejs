const apiUrl = 'http://localhost:3000/pessoas';
const personList = document.getElementById('personList');
const personModal = new bootstrap.Modal(document.getElementById('personModal'));
const personForm = document.getElementById('personForm');
const savePersonBtn = document.getElementById('savePersonBtn');
const addPersonBtn = document.getElementById('addPersonBtn');
let editingPersonId = null;

const loadPeople = async () => {
    try {
        const response = await fetch(apiUrl);
        const people = await response.json();
        personList.innerHTML = '';

        if (people.length === 0) {
            personList.innerHTML = `<tr><td colspan="4" class="text-center">Nenhuma pessoa cadastrada</td></tr>`;
        } else {
            people.forEach(person => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${person.nome}</td>
                    <td>${person.cpf}</td>
                    <td>${person.telefone}</td>
                    <td>
                        <button class="btn btn-warning btn-sm me-2" onclick="editPerson(${person.id})">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="deletePerson(${person.id})">Deletar</button>
                    </td>
                `;
                personList.appendChild(row);
            });
        }
    } catch (error) {
        console.error('Erro ao carregar as pessoas', error);
    }
};

savePersonBtn.addEventListener('click', async () => {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const personData = { nome, cpf, telefone };

    console.log('Formulário de Pessoa:', personData);
    try {
        if (editingPersonId) {
            const response = await fetch(`${apiUrl}/${editingPersonId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(personData)
            });
            if (response.ok) {
                console.log('Pessoa editada com sucesso');
            } else {
                console.error('Erro ao editar pessoa');
            }
            editingPersonId = null;
        } else {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(personData)
            });
            if (response.ok) {
                console.log('Pessoa adicionada com sucesso');
            } else {
                console.error('Erro ao adicionar pessoa');
            }
        }
        personForm.reset();
        personModal.hide();
        loadPeople();
    } catch (error) {
        console.error('Erro ao salvar a pessoa', error);
    }
});

window.editPerson = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`);
        const person = await response.json();

        document.getElementById('nome').value = person.nome;
        document.getElementById('cpf').value = person.cpf;
        document.getElementById('telefone').value = person.telefone;

        editingPersonId = id;
        personModal.show();
    } catch (error) {
        console.error('Erro ao buscar a pessoa', error);
    }
};

window.deletePerson = async (id) => {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
        try {
            const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
            if (response.ok) {
                console.log('Pessoa excluída com sucesso');
                loadPeople();
            } else {
                console.error('Erro ao excluir pessoa');
            }
        } catch (error) {
            console.error('Erro ao excluir a pessoa', error);
        }
    }
};

addPersonBtn.addEventListener('click', () => {
    personForm.reset();
    editingPersonId = null;
    personModal.show();
});

document.addEventListener('DOMContentLoaded', loadPeople);
