const express = require('express');
const path = require('path');
const session = require('express-session');

const requestLogger = require('./middleware/logger');
const indexRoutes = require('./routes/indexRoutes');
const playersRoutes = require('./routes/playersRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Konfiguracja sesji (1 godzina ważności)
app.use(session({
    secret: 'ballon-dor-secret-key-2024',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 } // 1h
}));

app.use(requestLogger);

app.use('/', indexRoutes);
app.use('/', playersRoutes);

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});