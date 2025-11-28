import express from 'express';
import handlebars from 'express-handlebars';
import expressSession from 'express-session';

import routes from './routes.js';
import initDatabase from './config/dbConfig.js';
import cookieParser from 'cookie-parser';
import { auth } from './middlewares/authMiddlewares.js';
import viewHelpers from './views/viewHelpers.js';
import { SESSION_SECRET } from './config/index.js';
import { tempData } from './middlewares/tempDataMiddleware.js';

const app = express();

initDatabase();

app.use(express.static('src/public'));

app.use(cookieParser());

app.use(expressSession({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true }
}));

app.use(express.urlencoded());

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    },
    helpers: viewHelpers,
}));

app.set('view engine', 'hbs');

app.set('views', 'src/views');

app.use(auth);

app.use(tempData);

app.use(routes);

app.listen(3000, () => console.log('Server is listening on http://localhost:3000....'));


