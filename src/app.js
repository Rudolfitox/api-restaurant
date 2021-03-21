import express,{json} from 'express';
import morgan from 'morgan';

//Importing routes
import restaurantRoutes from './routes/restaurantes';
import categoriaRoutes from './routes/categorias';

//Initialization
const app = express();

//MIDDLEWARES

//Muestra por consola las peticiones entrantes
app.use(morgan('dev'));
//Utilizado para interpretar el formato json
app.use(json());

app.use('/api/restaurants',restaurantRoutes);
app.use('/api/categorias',categoriaRoutes);

export default app;