const sequence = {
  _id: 1,
  get id () {return this._id++}
}

const produtos = {
  
}

function salvarProdutos (produto) {
  if(!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto
}

function getId (id) {
  return produtos[id] || {}
}

function getProdutos () {
  return Object.values(produtos)
}

function deleteProdutos(id) {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

module.exports = {salvarProdutos, getId, getProdutos, deleteProdutos}


/* CRUD */
/* CREATE, READ, UPDATE, DELETRE */