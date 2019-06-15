var produtos = [{
    id: 1,
    nome: "produto1",
    descricao: "descricao1",
    preco: 19.00
    },
    {
      id: 2,
      nome: "user2",
      descricao: "produto2",
      preco: 50.00  
  },
  {
    id: 3,
    nome: "user3",
    descricao: "produto3",
    preco: 11.00  
  }

  ];

exports.get = (req, res, next) => {
    res.json(produtos);
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    const prod = produtos.find(item => item.id == id); 

    if (!id) {
        res.json({ error: 'Should receive an id' })
    }
    res.json(prod);
};

exports.post = (req, res, next) => {
    var id = req.body.id;
    var nome = req.body.nome;
    var descricao = req.body.descricao;
    var preco = req.body.preco;
    const produto = {id, nome, descricao, preco};
    produtos.push(produto);
    res.json( 'Produto Inserido' );
    
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição PUT recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
        
    for (var i=0; i < produtos.length; i++){
        if (id == produtos[i].id){
          delete produtos[i];
        }
      }
    res.json( 'Produto Deletado' );
};