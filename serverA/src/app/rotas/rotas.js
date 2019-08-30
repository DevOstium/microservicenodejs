const LivroDao = require('../infra/LivroDao');
const request = require('request');

module.exports = (app) => {

    app.get('/livros', function(req, resp) {

        const livroDao = new LivroDao();
        livroDao.lista()
                .then(livros => {
                    console.log("livro : ", livros)
                    resp.json("Promise funcionou: " + livros);
                })
                .catch(erro => console.log(erro));
    

    });

};
        
   

  