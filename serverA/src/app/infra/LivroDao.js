const request = require('request');

class LivroDao {

    constructor() {
    }

    lista() {
        return new Promise((resolve, reject) => {

            request('http://localhost:3002/', (error, response, body)=>{

                if(1==1) {
                    return resolve("gerando dados de uma Promise no resolve " + body);
                } else {
                    reject("error")
                }

            })

                          
            
                        });
    }
}

module.exports = LivroDao;