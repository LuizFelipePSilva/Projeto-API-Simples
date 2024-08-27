const express = require('express')
const app = express()
const BD = require('./bd.js')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.send('Ola Mundo')
})

app.get('/produtos' , (req, res) => {
  let atual = new Date()
  console.log(`GET TYPE OF HOUR ${atual}`)
  res.send(BD.getProdutos())
})

app.get('/produtos/:id' , (req, res) => {
  res.send(BD.getId(req.params.id))
})

app.post('/produtos', (req,res) => {
  const produto = BD.salvarProdutos({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
  const produto = BD.deleteProdutos(req.params.id)
  res.send(produto)

})

app.listen(8080, () => {
console.log('Servidor Executando na porta 8080')
setInterval(() => {
  console.log('Verificação de execução!')
}, 30000)
})