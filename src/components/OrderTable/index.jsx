import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { BiTrashAlt } from 'react-icons/bi';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ItemsTable = ({ items, withRemoveItem }) => {
  const { removeItem } = useCartContext();

  return (
    <div className="overflow-auto br2 w-100 ph2">
      <table className="w-100">
        <thead className="bb b--grey">
          <tr className="tc">
            <th className="tl">Producto</th>
            <th>Cantidad/Stock</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map(order => (
            <tr key={order.id}>
              <td className="tl flex items-center">
                <Link className="flex" to={`/product/${order.id}`}>
                  <img className="br1 w-10 mr3 fit" src={order.image} alt={order.name} />
                  <h3>{order.name}</h3>
                </Link>
              </td>
              <td className="tc">
                {order.quantity}/{order.stock}
              </td>
              <td className="tc"> $ {(order.price * order.quantity).toFixed(2)}</td>
              {withRemoveItem && (
                <td className="tc">
                  <Button
                    colorScheme="gray"
                    className="pl2 ba b--gray bw1"
                    onClick={() => removeItem(order.id)}
                  >
                    <BiTrashAlt />
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="b pt5 black" colSpan="2">
              Total :{' '}
            </td>
            <td className="b pt5 black">
              $&nbsp;
              {items.reduce((total, order) => total + order.price * order.quantity, 0).toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ItemsTable;
