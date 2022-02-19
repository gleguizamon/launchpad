import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../services/CreateOrder';
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react';

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
      <div className="flex w-100 center justify-center">
        <div className="w-60">
          <div className="flex flex-column mb4">
            <h2 className="f2 b mt3 tc">
              Orden: <span className="b green">{idOrder}</span>
            </h2>
            <div className="pa3 mt3 bg-white bw1 b--gray br4">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Productos</Th>
                    <Th>Cantidad</Th>
                    <Th isNumeric>Precio</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {order.items.map(product => (
                    <Tr key={product.id}>
                      <Td className="flex items-center">
                        <img className="br3 w-20 di mr2" src={product.image} alt={product.name} />
                        {product.name}
                      </Td>
                      <Td isNumeric className="tcim">
                        x {product.quantity}
                      </Td>
                      <Td isNumeric>
                        $
                        {(product.price * product.quantity)
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                      </Td>
                    </Tr>
                  ))}
                  <Tr>
                    <Td>
                      <b>Total</b>
                    </Td>
                    <Td isNumeric>
                      <b>
                        $
                        {order.items
                          .map(product => product.price * product.quantity)
                          .reduce((a, b) => a + b, 0)
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                      </b>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          <div className="pa3 bg-white bw1 b--gray br4 mb5">
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
