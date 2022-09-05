module.exports = app => {
  const controller = app.controllers.boletoItau;

  app.route('/api/v1/boleto/itau')
    .get(controller.generateBoleto);
}