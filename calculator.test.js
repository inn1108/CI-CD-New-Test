const request = require('supertest');
const app = require('../calculator');

describe('Calculator', () => {
  it('should add two numbers correctly', async () => {
    const response = await request(app).get('/add?n1=2&n2=3');
    expect(response.status).toBe(200);
    expect(response.body.data).toBe(5);
  });

  it('should subtract two numbers correctly', async () => {
    const response = await request(app).get('/sub?n1=5&n2=3');
    expect(response.status).toBe(200);
    expect(response.body.data).toBe(2);
  });
});
