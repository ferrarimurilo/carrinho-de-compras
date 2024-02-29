let valorCarrinho = 0;
limpar();

// Botão Adicionar
function adicionar(){
// Obter o nome do produto selecionado e obtem a quantidade de produtos 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
// Calcular o subtotal
    let precoNaQuantidade = precoProduto*quantidade;
// Adicionar mercadoria em quantidade ao carrino
    let carrinho = document.getElementById('lista-produtos');
    if(quantidade!=0){
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoNaQuantidade}</span></section>`;
    }
    valorCarrinho = valorCarrinho + precoNaQuantidade;
    let totalPagina = document.getElementById('valor-total');
    totalPagina.textContent = `R$ ${valorCarrinho}`;
    document.getElementById('quantidade').value = 0;
}

// Incluir subtotal ao valor total do carrinho caso haja outros produtos já adicionados

function limpar(){
    document.getElementById('lista-produtos').innerHTML = "";
    document.getElementById('valor-total').innerHTML = `R$${'0,00'}`;
    valorCarrinho = 0;
}