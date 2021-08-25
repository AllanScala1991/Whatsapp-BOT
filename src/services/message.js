var Database = require('../services/models');
var Modal = require('sweetalert2');
window.$ = window.jQuery = require('jquery');


$(document).ready(async () => {
    try {
        const groups = await Database.Group.findAll({
            raw: true
        })

        const selectGroup = document.querySelector("#messageGroupSelect");

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

document.querySelector("#sendMessage").onclick =  async () => {
    try {
        var groupSelected = document.querySelector("#messageGroupSelect").value;
        var message = document.querySelector("#messageText").value;
    
        const getMessage = await Database.Messages.findAll({
            raw: true,
        })
    
        if(getMessage.length > 0) {
            const updateMessage = await Database.Messages.update({
                GroupName: groupSelected,
                MessageText: message
            },{
                where: {
                    id: getMessage[0].id
                }
            })
    
            if(!updateMessage){
                return Modal.fire({
                    icon: 'error',
                    title: 'Ops...',
                    text: 'Não foi possivel salvar, tente novamente.',
                  })
            }
    
            document.querySelector("#messageText").value = ""
    
            return Modal.fire({
                icon: 'success',
                title: 'SUCESSO',
                text: 'Mensagem registrada com sucesso.',
              })
        }
    
        const createMessage = await Database.Messages.create({
            GroupName: groupSelected,
            MessageText: message
        })
    
        if(!createMessage){
            return Modal.fire({
                icon: 'error',
                title: 'Ops...',
                text: 'Não foi possivel salvar, tente novamente.',
              })
        }
    
        document.querySelector("#messageText").value = ""
    
        return Modal.fire({
            icon: 'success',
            title: 'SUCESSO',
            text: 'Mensagem registrada com sucesso.',
          })

    } catch (error) {
        return Modal.fire({
            icon: 'error',
            title: 'ERROR',
            text: error,
          })
    }



}

document.querySelector("#messageBackHome").onclick = () => {
    $('#app').empty();

    $('#app').load('./home.html')
}