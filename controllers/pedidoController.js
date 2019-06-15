var pedidos = [{
    id: 1,
    valor: 100
    },
    {
      id: 2,
      valor: 200
  },
  {
    id: 3,
    valor: 300
  }
  ];

exports.get = (req, res, next) => {
    res.json(pedidos);
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    const pedido = pedidos.find(item => item.id == id); 

    if (!id) {
        res.json({ error: 'Should receive an id' })
    }
    res.json(pedido);
};

exports.post = (req, res, next) => {
    var id = req.body.id;
    var valor = req.body.valor;
    const pedido = {id, valor};
    pedidos.push(pedido);
    res.json( 'Pedido Inserido' );
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição PUT recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
        
    for (var i=0; i < pedidos.length; i++){
        if (id == pedidos[i].id){
          delete pedidos[i];
        }
      }
    res.json( 'Pedido Deletado' );
};