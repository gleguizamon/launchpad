import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../services/CreateOrder';
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react';
// import OrderNotFound from './status/OrderNotFound';

const OrderDetail = () => {
  const [order, setOrder] = useState();
  const { idOrder } = useParams();

  const searchOrder = async () => {
    const order = await getOrder(idOrder);
    setOrder(order);
  };

  useEffect(() => {
    searchOrder();
  }, []);

  return order ? (
    <>
      <div className="flex">
        <div className="w-50 ml6">
          <div className="flex flex-column mb4">
            <h2 className="f2 b">
              Orden <span className="b red">{idOrder}</span>
            </h2>
            <div className="pa3 mt3 bg-white bw1 b--gray br4">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Productos</Th>
                    <Th>Cantidad</Th>
                    <Th isNumeric>Precio</Th>
                    <Th isNumeric>Total</Th>
                  </Tr>
                </Thead>
                {order.items.map(product => (
                  <Tbody key={product.id}>
                    <Tr>
                      <Td>
                        <img className="br3 w-20 di mr2" src={product.image} alt={product.name} />
                        {product.name}
                      </Td>
                      <Td isNumeric className="tcim">
                        x {product.quantity}
                      </Td>
                      <Td isNumeric>
                        ${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                      </Td>
                      <Td isNumeric>
                        $
                        {(product.quantity * product.price)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                      </Td>
                    </Tr>
                  </Tbody>
                ))}
              </Table>
            </div>
          </div>
          <div className="pa3 bg-white bw1 b--gray br4">
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Td>
                    <b>Nombre</b>
                  </Td>
                  <Td>{order.customer.name}</Td>
                </Tr>
                <Tr>
                  <Td>
                    <b>Número</b>
                  </Td>
                  <Td>{order.customer.phone}</Td>
                </Tr>
                <Tr>
                  <Td>
                    <b>Email</b>
                  </Td>
                  <Td>{order.customer.email}</Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>
        <div className="flex flex-column w-30 mt6">
          <div className="ml4 mb4 pa3 bg-white bw1 b--gray br4">
            <h3>Orden summary</h3>
            <br />
            Orden creada el: {order.createdAt}
            <br />
            Subtotal: $20.00
          </div>
          <div className="ml4 mb4 pa3 bg-white bw1 b--gray br4">
            <h3>Total</h3>
            {order.price}
          </div>
          <div className="ml4 mb4 pa3 bg-white bw1 b--gray br4"></div>
        </div>
      </div>
      <style jsx>{`
        .tcim {
          text-align: center !important;
        }
      `}</style>
    </>
  ) : (
    <div>
      <h2>Orden no encontrada</h2>
    </div>
  );
};

export default OrderDetail;
