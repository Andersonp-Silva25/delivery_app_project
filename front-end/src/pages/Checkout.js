import React from 'react';
import DetailsCheckout from '../components/DetailsCheckout';
import TableCheckout from '../components/TableCheckout';
import Header from '../components/Header';

function Checkout() {
  return (
    <>
      <Header />
      <main className="table-container">
        <h1 className="finish-order">Finalizar Pedido</h1>
        <TableCheckout />
        <DetailsCheckout />
      </main>
    </>
  );
}

export default Checkout;
