const venom = require('venom-bot');
const Database = require('./models');


venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client) {
    const infos = await Database.Messages.findAll({raw: true});

    const Phones = await Database.Client.findAll({
        raw: true,
        where: {
            Group: infos[0].GroupName
        }
    })

    for(const phone of Phones) {
        try {
            await client
            .sendText(`55${phone.Phone}@c.us`, `${infos[0].MessageText}`)
            .then((result) => {
                if (result.status == 'OK'){
                    console.log("NOME: ", phone.Name, "TELEFONE: ", phone.Phone, "STATUS: ", "ENVIADO")
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    console.log("FIM DOS ENVIOS - PARA FECHAR PRESSIONE CTRL + C")
}



