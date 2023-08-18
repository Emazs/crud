//botones
let buttonModal = document.querySelector('#btnModal');
let buttonEdit = document.querySelector('.btnEdit');
let buttonEnterModal = document.querySelector('#btnEnterModal');
let btnActualizarModal = document.querySelector('#btnActualizarModal');
let buttonClear = document.querySelector('.btnClear');

// parte de modal
let modal = document.querySelector('#myModal');
let close = document.querySelector('.close');

//texto e inputs
let inputDescription = document.querySelector('.inputDescription');
let inputPrice = document.querySelector('.inputPrice');
let inputStock = document.querySelector('.inputStock');

let id = 1;

let tbody = document.querySelector('.tBody');

buttonModal.addEventListener('click', () => {
    modal.style.display = 'block';
})

buttonEnterModal.addEventListener('click', (event) => {
    if ((inputDescription.value == '') && (inputPrice.value == '') && (inputStock.value == '')) return;

    let addTr = document.createElement('tr');

    let addId = document.createElement('td');
    addId.textContent = `${id}`;
    addId.classList.add('id');

    let addDescription = document.createElement('td');
    addDescription.textContent = `${inputDescription.value}`;
    addDescription.classList.add('description');

    let addPrice = document.createElement('td');
    addPrice.textContent = `${inputPrice.value}`;
    addPrice.classList.add('price');

    let addStock = document.createElement('td');
    addStock.textContent = `${inputStock.value}`;
    addStock.classList.add('stock');

    let addAction = document.createElement('td');

    let addButtonEdit = document.createElement('button');
    addButtonEdit.textContent = 'Edit';
    addButtonEdit.classList.add('btn');
    addButtonEdit.classList.add('btnEdit');

    let addButtonClear = document.createElement('button');
    addButtonClear.textContent = 'Clear';
    addButtonClear.classList.add('btn');
    addButtonClear.classList.add('btnClear');

    addTr.appendChild(addId);
    addTr.appendChild(addDescription);
    addTr.appendChild(addPrice);
    addTr.appendChild(addStock);
    addAction.appendChild(addButtonEdit);
    addAction.appendChild(addButtonClear);
    addTr.appendChild(addAction);

    tbody.appendChild(addTr);
    modal.style.display = "none";
    eliminatedELement();
    deleteElement(addButtonClear);
    editElement(addButtonEdit, addId, addDescription, addPrice, addStock);
    id = id + 1;
})

function deleteElement(addButtonClear, addId) {
    addButtonClear.addEventListener('click', event => {
        alerta(addButtonClear);
    })
}

function editElement(addButtonEdit,addId, addDescription, addPrice, addStock) {
    addButtonEdit.addEventListener('click', event => {
        modal.style.display = 'block';
        buttonEnterModal.style.display = 'none';
        btnActualizarModal.style.display = 'block';
        inputDescription.value = addDescription.textContent
        inputPrice.value = addPrice.textContent
        inputStock.value = addStock.textContent
    })

    btnActualizarModal.addEventListener('click', event => {
        if ((inputDescription.value == '') && (inputPrice.value == '') && (inputStock.value == '')) return;
        addDescription.textContent = inputDescription.value;
        addPrice.textContent = inputPrice.value;
        addStock.textContent = inputStock.value;
        modal.style.display = 'none'; 
        buttonEnterModal.style.display = 'block';
        btnActualizarModal.style.display = 'none';
        eliminatedELement();
    })
}

close.onclick = function () {
    modal.style.display = 'none';
    eliminatedELement();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        eliminatedELement();
    }
}

function alerta(addButtonClear, addId) {
    let opcion = confirm("Seguro que quiere eliminar el elemento");
    if (opcion == true) {
        addButtonClear.parentNode.parentNode.remove();
        id = id - 1;
        addId.textContent = id;
    } else {

    }
}

function eliminatedELement() {
    inputDescription.value = '';
    inputPrice.value = '';
    inputStock.value = '';
}