const { Bancos, Boletos, streamToPromise } = require('../lib/index');

const boleto = {
  banco: new Bancos.Itau(),
  pagador: {
    nome: 'José Bonifácio de Andrada',
    registroNacional: '12345678',
    endereco: {
      logradouro: 'Rua Pedro Lessa, 15',
      bairro: 'Centro',
      cidade: 'Rio de Janeiro',
      estadoUF: 'RJ',
      cep: '20030-030'
    }
  },
  instrucoes: ['Após o vencimento Mora dia R$ 1,59', 'Após o vencimento, multa de 2%'],
  beneficiario: {
    nome: 'Empresa Fictícia LTDA',
    cnpj:'43576788000191',
    dadosBancarios: {
      carteira: '09',
      agencia: '8033',
      agenciaDigito: '',
      conta: '08010',
      contaDigito: '5',
      nossoNumero: '21897666',
      nossoNumeroDigito: '6'
    },
    endereco: {
      logradouro: 'Rua Pedro Lessa, 15',
      bairro: 'Centro',
      cidade: 'Rio de Janeiro',
      estadoUF: 'RJ',
      cep: '20030-030'
    }
  },
  boleto: {
    numeroDocumento: '1001',
    especieDocumento: 'DM',
    valor: 1198.00,
    datas: {
      vencimento: '02-04-2020',
      processamento: '02-04-2019',
      documentos: '02-04-2019'
    }
  }
};

const novoBoleto = new Boletos(boleto);
novoBoleto.gerarBoleto();

novoBoleto.pdfFile().then(async ({ stream }) => {
  // ctx.res.set('Content-type', 'application/pdf');	
  await streamToPromise(stream);
}).catch((error) => {
  return error;
});



