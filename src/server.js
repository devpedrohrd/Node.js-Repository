import http from 'node:http';

const server = http.createServer((req, res) => {
  return res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});