module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/ping', server.loopback.status());
  server.use(router);
};
