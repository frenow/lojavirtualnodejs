var pagamentos = [{
    id: 1,
    descricao: "pgto1"
    },
    {
      id: 2,
      descricao: "pgto2"
  },
  {
    id: 3,
    descricao: "pgto3"
  }
  ];


exports.get = (req, res, next) => {
    res.json(pagamentos);
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    const pgto = pagamentos.find(item => item.id == id); 

    if (!id) {
        res.json({ error: 'Should receive an id' })
    }
    res.json(pgto);
};

exports.post = (req, res, next) => {
    var id = req.body.id;
    var descricao = req.body.descricao;
    const pgto = {id, descricao};
    pagamentos.push(pgto);
    res.json( 'Pagamento Inserido' );
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição PUT recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
        
    for (var i=0; i < pagamentos.length; i++){
        if (id == pagamentos[i].id){
          delete pagamentos[i];
        }
      }
    res.json( 'Pagamentos Deletado' );
};