import express from 'express';
import { AppDataSource } from './database/data-source';

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

AppDataSource.initialize()
  .then(() => {
    console.log('Database inicializada');
  })
  .catch(error => console.log(error));
