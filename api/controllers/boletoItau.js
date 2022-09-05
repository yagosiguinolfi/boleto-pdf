module.exports = app => {
  const boletoItau = app.data.boletoItau
  const controller = {};

  controller.generateBoleto = (req, res) => res.status(200).json(boletoItau);

  return controller;
}