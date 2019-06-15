var categorias = [{
    id: 1,
    descricao: "categoria1"
    },
    {
      id: 2,
      descricao: "categoria2"
  },
  {
    id: 3,
    descricao: "categoria3"
  }
  ];

exports.get = (req, res, next) => {
    res.json(categorias);
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    const cat = categorias.find(item => item.id == id); 

    if (!id) {
        res.json({ error: 'Should receive an id' })
    }
    res.json(cat);
};

exports.post = (req, res, next) => {
    var id = req.body.id;
    var descricao = req.body.descricao;
    const categoria = {id, descricao};
    categorias.push(categoria);
    res.json( 'Produto Inserido' );
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição PUT recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
        
    for (var i=0; i < categorias.length; i++){
        if (id == categorias[i].id){
          delete categorias[i];
        }
      }
    res.json( 'Categoria Deletada' );
};