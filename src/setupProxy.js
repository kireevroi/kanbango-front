const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://kanbango.ru',
      changeOrigin: true,
			secure: true,
			cookieDomainRewrite: "localhost",
    })
  );
};