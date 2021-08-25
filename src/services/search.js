window.$ = window.jQuery = require('jquery');
var Database = require('../services/models');
var Modal = require('sweetalert2');


document.querySelector("#searchButton").onclick = async () => {
    let searchName = document.querySelector("#searchName").value;
    $('.resultsContainer').empty()

    if (!searchName){
        
        const getAll = await Database.Client.findAll({
            raw: true, 
            order: [
                ['Name', 'ASC']
            ],
        });
        
        if(getAll.length <= 0){
            return Modal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Nenhum cliente foi localizado.',
              })
        }
        let resultsContainer = document.querySelector(".resultsContainer")

        let table = document.createElement('table');
        table.id = 'resultTable';
        let tr1 = document.createElement("tr");
        let th1 = document.createElement('th');
        th1.className = 'titleText'
        th1.innerHTML = 'Nome'
        let th2 = document.createElement('th');
        th2.className = 'titleText'
        th2.innerHTML = 'Telefone'
        let th3 = document.createElement('th');
        th3.className = 'titleText'
        th3.innerHTML = 'Grupo'
        let th4 = document.createElement('th');
        th4.className = 'titleText'
        th4.innerHTML = 'Ação'
        tr1.appendChild(th1)
        tr1.appendChild(th2)
        tr1.appendChild(th3)
        tr1.appendChild(th4)
        table.appendChild(tr1)

        for (index in getAll){
            let tr2 = document.createElement("tr");
            let td1 = document.createElement('td')
            td1.className = 'tableRow'
            td1.innerHTML = getAll[index].Name
            let td2 = document.createElement('td')
            td2.className = 'tableRow'
            td2.innerHTML = getAll[index].Phone
            let td3 = document.createElement('td')
            td3.className = 'tableRow'
            td3.innerHTML = getAll[index].Group
            let td4 = document.createElement('td')
            td4.className = 'tableRow'
            td4.innerHTML = `<a href="#" onclick="deleteClient(${getAll[index].id})">DELETAR</a>`

            tr2.appendChild(td1)
            tr2.appendChild(td2)
            tr2.appendChild(td3)
            tr2.appendChild(td4)
            table.appendChild(tr2)
        }

        resultsContainer.appendChild(table)


    }else {

        const getOne = await Database.Client.findAll({
            raw: true,
            order: [
                ['Name', 'ASC']
            ],
            where: {
                Name: searchName
            }
        });
        
        if(getOne.length <= 0){
            return Modal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Nenhum cliente foi localizado.',
              })
        }

        let resultsContainer = document.querySelector(".resultsContainer")

        let table = document.createElement('table');
        table.id = 'resultTable';
        let tr1 = document.createElement("tr");
        let th1 = document.createElement('th');
        th1.className = 'titleText'
        th1.innerHTML = 'Nome'
        let th2 = document.createElement('th');
        th2.className = 'titleText'
        th2.innerHTML = 'Telefone'
        let th3 = document.createElement('th');
        th3.className = 'titleText'
        th3.innerHTML = 'Grupo'
        let th4 = document.createElement('th');
        th4.className = 'titleText'
        th4.innerHTML = 'Ação'
        tr1.appendChild(th1)
        tr1.appendChild(th2)
        tr1.appendChild(th3)
        tr1.appendChild(th4)
        table.appendChild(tr1)

        for (index in getOne){

            let tr2 = document.createElement("tr");
            let td1 = document.createElement('td')
            td1.className = 'tableRow'
            td1.innerHTML = getOne[index].Name
            let td2 = document.createElement('td')
            td2.className = 'tableRow'
            td2.innerHTML = getOne[index].Phone
            let td3 = document.createElement('td')
            td3.className = 'tableRow'
            td3.innerHTML = getOne[index].Group
            let td4 = document.createElement('td')
            td4.className = 'tableRow'
            td4.innerHTML = `<a href="#" onclick="deleteClient(${getOne[index].id})">DELETAR</a>`

            tr2.appendChild(td1)
            tr2.appendChild(td2)
            tr2.appendChild(td3)
            tr2.appendChild(td4)
            table.appendChild(tr2)
        }

        resultsContainer.appendChild(table)
    }

   
}

async function searchClient(){
    let searchName = document.querySelector("#searchName").value;
    $('.resultsContainer').empty()

    if (!searchName){
        
        const getAll = await Database.Client.findAll({
            raw: true, 
            order: [
                ['Name', 'ASC']
            ],
        });
        
        if(getAll.length <= 0){
            return Modal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Nenhum cliente foi localizado.',
              })
        }
        let resultsContainer = document.querySelector(".resultsContainer")

        let table = document.createElement('table');
        table.id = 'resultTable';
        let tr1 = document.createElement("tr");
        let th1 = document.createElement('th');
        th1.className = 'titleText'
        th1.innerHTML = 'Nome'
        let th2 = document.createElement('th');
        th2.className = 'titleText'
        th2.innerHTML = 'Telefone'
        let th3 = document.createElement('th');
        th3.className = 'titleText'
        th3.innerHTML = 'Grupo'
        let th4 = document.createElement('th');
        th4.className = 'titleText'
        th4.innerHTML = 'Ação'
        tr1.appendChild(th1)
        tr1.appendChild(th2)
        tr1.appendChild(th3)
        tr1.appendChild(th4)
        table.appendChild(tr1)

        for (index in getAll){
            let tr2 = document.createElement("tr");
            let td1 = document.createElement('td')
            td1.className = 'tableRow'
            td1.innerHTML = getAll[index].Name
            let td2 = document.createElement('td')
            td2.className = 'tableRow'
            td2.innerHTML = getAll[index].Phone
            let td3 = document.createElement('td')
            td3.className = 'tableRow'
            td3.innerHTML = getAll[index].Group
            let td4 = document.createElement('td')
            td4.className = 'tableRow'
            td4.innerHTML = `<a href="#" onclick="deleteClient(${getAll[index].id})">DELETAR</a>`

            tr2.appendChild(td1)
            tr2.appendChild(td2)
            tr2.appendChild(td3)
            tr2.appendChild(td4)
            table.appendChild(tr2)
        }

        resultsContainer.appendChild(table)


    }else {

        const getOne = await Database.Client.findAll({
            raw: true,
            order: [
                ['Name', 'ASC']
            ],
            where: {
                Name: searchName
            }
        });
        
        if(getOne.length <= 0){
            return Modal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Nenhum cliente foi localizado.',
              })
        }

        let resultsContainer = document.querySelector(".resultsContainer")

        let table = document.createElement('table');
        table.id = 'resultTable';
        let tr1 = document.createElement("tr");
        let th1 = document.createElement('th');
        th1.className = 'titleText'
        th1.innerHTML = 'Nome'
        let th2 = document.createElement('th');
        th2.className = 'titleText'
        th2.innerHTML = 'Telefone'
        let th3 = document.createElement('th');
        th3.className = 'titleText'
        th3.innerHTML = 'Grupo'
        let th4 = document.createElement('th');
        th4.className = 'titleText'
        th4.innerHTML = 'Ação'
        tr1.appendChild(th1)
        tr1.appendChild(th2)
        tr1.appendChild(th3)
        tr1.appendChild(th4)
        table.appendChild(tr1)

        for (index in getOne){

            let tr2 = document.createElement("tr");
            let td1 = document.createElement('td')
            td1.className = 'tableRow'
            td1.innerHTML = getOne[index].Name
            let td2 = document.createElement('td')
            td2.className = 'tableRow'
            td2.innerHTML = getOne[index].Phone
            let td3 = document.createElement('td')
            td3.className = 'tableRow'
            td3.innerHTML = getOne[index].Group
            let td4 = document.createElement('td')
            td4.className = 'tableRow'
            td4.innerHTML = `<a href="#" onclick="deleteClient(${getOne[index].id})">DELETAR</a>`

            tr2.appendChild(td1)
            tr2.appendChild(td2)
            tr2.appendChild(td3)
            tr2.appendChild(td4)
            table.appendChild(tr2)
        }

        resultsContainer.appendChild(table)
    }
}

async function deleteClient(id){

    const clientDelete = await Database.Client.destroy({
        where: {
            id: id
        }
    })

    if (!clientDelete){
        return Modal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Erro ao deletar o cliente, tente novamente.',
          })
    }

    searchClient();

    return Modal.fire({
        icon: 'success',
        title: 'SUCESSO',
        text: 'Cliente deletado com sucesso.',
    })
}

document.querySelector("#searchBackHome").onclick = () => {
    $('#app').empty()
    $('#app').load('home.html')
}
