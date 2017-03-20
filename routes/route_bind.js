module.exports = function (app, routes) {
  app.use('/', routes.demo);
  app.use('/form', routes.app);
  app.use('/album', routes.album);
};