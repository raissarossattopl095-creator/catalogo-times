
import express from 'express';

// Criando nossa aplicação
const app = express();

// Configurando o EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Informando onde estão os arquivos EJS
app.set('views', './views');

// Criando uma lista de times
const times = [
    {
        id: 1,
        nome: 'Grêmio',
        estadio: 'Arena do Grêmio',
        cidade: 'Porto Alegre'
    },
    {
        id: 2,
        nome: 'Internacional',
        estadio: 'Beira-Rio',
        cidade: 'Porto Alegre'
    },
    {
        id: 3,
        nome: 'Flamengo',
        estadio: 'Maracanã',
        cidade: 'Rio de Janeiro'
    }
];

// ROTA 1: Página inicial
app.get('/', (req, res) => {
    res.render('index', {
        mensagem: 'Bem-vindo ao Catálogo de Times!'
    });
});

// ROTA 2: Lista de times
app.get('/times', (req, res) => {
    res.render('times', {
        times: times
    });
});

// ROTA 3: Detalhes de um time
app.get('/times/:id', (req, res) => {

    // Pegando o ID enviado pela URL
    const id = Number(req.params.id);

    // Procurando o time correspondente
    const time = times.find(t => t.id === id);

    // Verificando se o time existe
    if (!time) {
        return res.status(404).send('Time não encontrado!');
    }

    // Mostrando os detalhes do time
    res.render('detalhe', {
        time: time
    });
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
