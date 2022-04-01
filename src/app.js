import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {options} from './swaggerOptions';

const specs = swaggerJSDoc(options)

import taskRoutes from './routes/tasks'
import userRoutes from './routes/users'



const app = express();
app.use(cors()); //para que cualquier backend pueda conectarse
app.use(morgan("dev"));//ver peticiones por linea de comando
app.use(express.json());

app.use(taskRoutes);
app.use(userRoutes);
app.use('/docs', swaggerUi.serve,swaggerUi.setup(specs));



export default app;