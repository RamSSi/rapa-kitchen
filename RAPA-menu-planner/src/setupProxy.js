const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		'/menu',
		createProxyMiddleware({
			target: 'http://spring:8080',
			changeOrigin: true,
		})
	);
	 app.use(
                '/comment',
                createProxyMiddleware({
                        target: 'http://spring:8080',
                        changeOrigin: true,
                })
        );
	 app.use(
                '/wishmenu',
                createProxyMiddleware({
                        target: 'http://spring:8080',
                        changeOrigin: true,
                })
        );
};
