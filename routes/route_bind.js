module.exports = function (app, routes) {
  app.use('/', routes.demo);
  app.use('/app', routes.app);
};