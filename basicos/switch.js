let tipoPagamento = 'ticket'

switch (tipoPagamento) {
   case 'debito':
       console.log(' o pagamento foi no debito');
       break
   case 'pix':
       console.log(' o pagamento foi no pix');
       break
   case 'credito':
       console.log('o pagamento foi no credito');
       break
   default:
       console.log('tipo pagamento invalido');

}
