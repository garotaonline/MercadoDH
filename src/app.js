const moment = require('moment');
const { calculaValor, exibeTela, calculaIdade, maiorIdade } = require('../lib/funcoesComuns.lib')
const { produtos, clientesDH } = require('../model/dados')

exports.principal = () => {

exibeTela(`------------------- Mercado DH --------------------`);
let data = moment().format('DD/MM/YYYY');
let hora = moment().format('h:mm A');
exibeTela(`----- Lista Produtos - ${data} ${hora} -----`);
let valorTotal = 0;
for (let i=0; i < produtos.length; i++) {
    valorTotal += calculaValor(produtos[i].qtd, produtos[i].valor)
    exibeTela(`${produtos[i].id} - ${produtos[i].nome} - ${produtos[i].qtd} - R$: ${produtos[i].valor}`);
}; 
exibeTela(`------> Total R$: ${valorTotal}`);

// clientesDH.forEach(cliente => {
//     exibeTela(cliente.id + " - " + cliente.nome)
//     maiorIdade(calculaIdade)
// })

}


