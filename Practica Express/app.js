import express from 'express'
import 'dotenv/config'
import { engine, create } from 'express-handlebars';

const app = express();
const hbs = create({
    extname: '.hbs',
    partialsDir: ['views/partials']
});

// Configurar Handlebars.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

// Middlewares para activar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos públicos.
app.use(express.static('public'));

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`);
})