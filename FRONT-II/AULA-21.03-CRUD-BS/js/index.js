// ESQUERDA ?? DIREITA

// OQ TEM NA ESQUERDA É null OU undefined, então usa o valor que está à direita
// oq tem na esquerda é truly então usa esse dado

// "", null, undefined, 0 e false => false
let idAtualizar = -1
let listaContatos = JSON.parse(localStorage.getItem('contacts')) ?? [];

const formCadastro = document.getElementById('form-cadastro')
const formAtualizar = document.getElementById('form-atualizar')

const nameUpdate = document.getElementById('name-update')
const phoneUpdate = document.getElementById('phone-update')

const row = document.getElementById('list-contacts')
const containerNotificacao = document.getElementById('container-notificacao')

// 1 - Como manipular um Modal do Bootstrap utilizando JS
const modalCadastro = new bootstrap.Modal('#modal-cadastro')
const modalApagar = new bootstrap.Modal('#modal-apagar')
const modalAtualizar = new bootstrap.Modal('#modal-atualizar')

document.addEventListener('DOMContentLoaded', () => {
    listaContatos.forEach((contact) => addContact(contact))
})

formCadastro.addEventListener('submit', (ev) => {
    ev.preventDefault()

    // chamar a validação deste formulário
    if(!formCadastro.checkValidity()) {
        formCadastro.classList.add('was-validated')
        return
    }

    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value

    //...continua a lógica necessária para o cadastro do contato
    // 1 - não pode existir 2 contatos com o mesmo número
    const exist = listaContatos.some((valor) =>  valor.phone === phone )

    if(exist) {
        //alert("Você já cadastrou esse contato anteriormente!")
        modalCadastro.hide()
        showAlert('danger', 'Você já cadastrou esse contato anteriormente! 🤔')
        return
    }

    const newContact = {
        id: new Date().getTime(),
        name,
        phone
    }

    // 1 - O dado alterou? Atualizou? Chama o setItem
    listaContatos.push(newContact)
    localStorage.setItem('contacts', JSON.stringify(listaContatos))
    formCadastro.reset()
    addContact(newContact)
    modalCadastro.hide()
    formCadastro.classList.remove('was-validated')
    showAlert('success', 'Contato cadastrado com sucesso! 🚀')
})

formAtualizar.addEventListener('submit', (ev) => {
    ev.preventDefault();

    // chamar a validação deste formulário
    if(!formAtualizar.checkValidity()) {
        formAtualizar.classList.add('was-validated')
        return
    }


    // some => desconsiderar o id que esta sendo atualizado
    const exist = listaContatos.some((contato) => {
        if(contato.id === idAtualizar) {
            return false
        }

        return contato.phone === phoneUpdate.value
    })

    if(exist) {
        modalAtualizar.hide()
        showAlert('danger', 'Esse número já esta salvo como outro contato!')
        return
    }

    // ATUALIZAR A LISTA LOCAL
    const indiceUpdate = listaContatos.findIndex((contato) => contato.id === idAtualizar);
    listaContatos[indiceUpdate].name = nameUpdate.value
    listaContatos[indiceUpdate].phone = phoneUpdate.value

    // ATUALIZAR O LOCASTORAGE
    localStorage.setItem('contacts', JSON.stringify(listaContatos))

    // ATUALIZAR O ELEMENTO NA DOM
    const cardTitle = document.querySelector(`#contato-${idAtualizar} .card-title`);
    cardTitle.innerHTML = nameUpdate.value

    const cardText = document.querySelector(`#contato-${idAtualizar} .card-text`);
    cardText.innerHTML = phoneUpdate.value


    modalAtualizar.hide()
    showAlert('success', 'Contato atualizado com sucesso! 👌')
    idAtualizar = -1
    formAtualizar.classList.remove('was-validated')
})

function addContact(contact) {
    const { id, name, phone } = contact;
    // const id = contact.id;
    // const name = contact.name;
    // const phone = contact.phone;

    /*
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        João da Silva
                    </h5>
                    <p class="card-text">
                        (51) 99988-7766
                    </p>
                    <button class="btn btn-success">
                        <i class="bi bi-pencil-square">

                        </i>
                    </button>
                    <button class="btn btn-danger">
                        <i class="bi bi-trash3"></i>
                    </button>
                </div>
            </div>
        </div>
    */
    const col = document.createElement('div') // <div></div>
    // col.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'col-xl-3')
    col.setAttribute('class', 'col-12 col-sm-6 col-lg-4 col-xl-3')
    col.setAttribute('id', `contato-${id}`)

    const card = document.createElement('div') 
    card.setAttribute('class', 'card')

    const cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body') 

    const cardTitle = document.createElement('h5')
    cardTitle.setAttribute('class', 'card-title')
    cardTitle.innerHTML = name

    const cardText = document.createElement('p')
    cardText.setAttribute('class', 'card-text')
    cardText.innerHTML = phone

    const buttonEdit = document.createElement('button')
    buttonEdit.setAttribute('class', 'btn btn-success m-1')
    buttonEdit.addEventListener('click', () => {
        modalAtualizar.show()
        nameUpdate.value = name
        phoneUpdate.value = phone
        idAtualizar = id
    })
    buttonEdit.innerHTML = `<i class="bi bi-pencil-square"></i>`


    const buttonDelete = document.createElement('button')
    buttonDelete.setAttribute('class', 'btn btn-danger m-1')
    buttonDelete.addEventListener('click', () => {
        modalApagar.show()
       const confirmar = document.getElementById('confirmar-exclusao')
       confirmar.setAttribute('onclick', `apagar(${id})`)
    })
    buttonDelete.innerHTML = `<i class="bi bi-trash3"></i>`

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(buttonEdit)
    cardBody.appendChild(buttonDelete)

    card.appendChild(cardBody)
    col.appendChild(card)

    row.appendChild(col)
}

function apagar(idContato) {
   // EXCLUIR DA LISTA DE CONTATOS LOCAL
   const indice = listaContatos.findIndex((contato) => contato.id === idContato)
   listaContatos.splice(indice, 1)
   

   // ATUALIZAR O LOCALSTORAGE
   localStorage.setItem('contacts', JSON.stringify(listaContatos))

   // EXCLUIR O COL DA DOM
   const col = document.getElementById(`contato-${idContato}`)
   col.remove()
   
   
   modalApagar.hide()
   showAlert('success', 'Contato deletado com sucesso! 👌')
}

function showAlert(modo, mensagem) {
    /*
        <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    */

    const toast = document.createElement('div');
    toast.setAttribute('role', 'alert')
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.setAttribute('class', 'toast align-items-center border-0 show');
    toast.classList.add(`text-bg-${modo}`);

    const content = document.createElement('div');
    content.setAttribute('class', 'd-flex');

    const toastBody = document.createElement('div')
    toastBody.setAttribute('class', 'toast-body')
    toastBody.innerHTML = `${mensagem}`

    const butttonDismiss = document.createElement('button')
    butttonDismiss.setAttribute('type', 'button')
    butttonDismiss.setAttribute('class', 'btn-close btn-close-white me-2 m-auto')
    butttonDismiss.setAttribute('data-bs-dismiss', 'toast')
    butttonDismiss.setAttribute('aria-label', 'Fechar notificação')

    content.appendChild(toastBody)
    content.appendChild(butttonDismiss)
    toast.appendChild(content);

    containerNotificacao.appendChild(toast)


    setTimeout(() => {
        containerNotificacao.children[0].remove()
    }, 5000)

}









