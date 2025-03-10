const request = require('supertest');
const app = require('../index');

test('GET / should return "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World! This is a Node.js app with Jenkins and SonarQube.');
});
