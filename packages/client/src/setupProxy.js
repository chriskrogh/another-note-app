const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/api', '/graphql'], {
      target: 'http://localhost:5000',
    }),
  );
  app.use(createProxyMiddleware('/ws', { target: 'http://localhost:4000' }));
};
