var Database = require('../services/models');
var modal = require('sweetalert2');
window.$ = window.jQuery = require('jquery');

$(document).ready(async () => {
    try {
        const groups = await Database.Group.findAll({
            raw: true
        })

        const selectGroup = document.querySelector("#registerGroupSelect");

        for(group of groups){
            var option = document.createElement('option');
            option.value = group.Name;
            option.innerHTML = group.Name
            selectGroup.appendChild(option);
        }
        
    } catch (error) {
        console.log(error)
    }


})

document.querySelector("#saveRegister").onclick = async () => {

    try {
        let name = document.querySelector("#clientName").value;
        let phone = document.querySelector("#clientPhone").value;
        let group = document.querySelector("#registerGroupSelect").value;
    
        if (!name || !phone || !group){
            return modal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Todos os campos devem ser preenchidos',
              })
        }
    
        const registerClient = await Database.Client.create({
            Name: name,
            Phone: phone,
            Group: group
        });
    
        if (!registerClient){
            return modal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro ao registrar o cliente, tente novamente.',
              })
        } 

        document.querySelector("#clientName").value = ""
        document.querySelector("#clientPhone").value = ""

        return modal.fire({
            icon: 'success',
            title: 'SUCESSO',
            text: 'Cliente registrado com sucesso.',
          })
        
    } catch (error) {
        return modal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
    }
}

document.querySelector("#registerBackHome").onclick = () => {
    $('#app').empty();

    $('#app').load('./home.html')
}