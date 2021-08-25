var Database = require('../services/models');
var Modal = require('sweetalert2');
window.$ = window.jQuery = require('jquery');


document.querySelector("#saveCategory").onclick = async () => {

    try {
        let groupName = document.querySelector("#categoryName").value;
    
        if(!groupName){
            return Modal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Todos os campos devem ser preenchidos',
              })
        }
    
        const groupRegister = await Database.Group.create({
            Name: groupName
        })
    
        if (!groupRegister){
            return Modal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro ao criar um novo grupo, tente novamente.',
              })
        }
    
        document.querySelector("#categoryName").value = ""
    
        return Modal.fire({
            icon: 'success',
            title: 'SUCESSO',
            text: 'Grupo registrado com sucesso.',
          })
        
    } catch (error) {
        return Modal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
    }
}

document.querySelector("#categoryBackHome").onclick = () => {
    $('#app').empty();

    $('#app').load('./home.html')
}