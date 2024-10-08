import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import { AppDataSource } from './database/data-source';
import routes from './index.routes';

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Servidor rodando na porta 3000');
});

AppDataSource.initialize()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Database inicializada');
  })
  .catch(error => console.log(error));

export default app;
