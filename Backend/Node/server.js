const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

const entrysRoutes = require('./routes/entryRoutes');
const expensesRoutes = require('./routes/expensesRoutes');
const clientRoutes = require('./routes/clientRoutes');
const tattooRoutes = require('./routes/tattooRoutes');

const db = require('./config/config');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.disable('x-powered-by');

const port = process.env.PORT || 3001;
app.set('port', port);

/*Chamada das Rotas*/
app.use(entrysRoutes);
app.use(expensesRoutes);
app.use(clientRoutes);
app.use(tattooRoutes);


server.listen(3001, '192.168.0.47', function(){
    console.log('Aplicação ' + process.pid + ' iniciada...')
});

app.get('/', (req, res) => {

    const queryEntradas = 'SELECT * FROM entradas';
    const querySaidas = 'SELECT * FROM saidas';
    const queryClientes = 'SELECT * FROM clientes';
    const queryTattoo = 'SELECT * FROM tatuagensrealizadas';
    
    db.query(querySaidas, (errorSaidas, resultsSaidas) => {
        if (errorSaidas) {
            console.error(errorSaidas);
            return res.status(500).json({
                erro: true,
                mensagem: "Erro interno do servidor nas saídas."
            });
        }   

        db.query(queryEntradas, (errorEntradas, resultsEntradas) => {
            if (errorEntradas) {
                console.error(errorEntradas);
                return res.status(500).json({
                    erro: true,
                    mensagem: "Erro interno do servidor nas entradas."
                });
            }

        db.query(queryClientes, (errorClientes, resultsClientes) => {
            if (errorClientes) {
                console.error(errorClientes);
                return res.status(500).json({
                    erro: true,
                    mensagem: "Erro interno do servidor nos clientes."
                });
            }

            db.query(queryTattoo, (errorTattoo, resultsTattoo) => {
                if (errorTattoo) {
                    console.error(errorTattoo);
                    return res.status(500).json({
                        erro: true,
                        mensagem: "Erro interno do servidor ao buscar tatuagens realizadas."
                    });
                }
            
                    return res.json({
                        erro: false,
                        Dataexpenses: resultsSaidas, // Dados das saídas
                        Dataentries: resultsEntradas, // Dados das entradas
                        DataClient: resultsClientes, // Dados das entradas
                        DataTattoo: resultsTattoo, // Dados das entradas
                    });
                });
            });
        });
    });
});


app.use((err, req, res, next)=>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});
