import request from 'supertest';
import app from '../index';

describe('Teste de conexão', () => {
  it('Deve retornar status 200 ao acessar a rota raiz', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
