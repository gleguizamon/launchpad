import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCartContext();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>
                {item.price}
                <span>x</span>
                {item.quantity}
              </p>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item)}>
              &times;
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>
          Total:
          <span>${total}</span>
        </p>
        <Link to="/checkout">
          <button className="checkout-button">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

//   return (
//     <>
//       {cart.length === 0 ? (
//         <>
//           <div>
//             <h3>No hay ningún item en el carrito actualmente</h3>
//             <br />
//             <Link to="/">Volver a la tienda</Link>
//           </div>
//         </>
//       ) : (
//         <>
//           <div>
//             <h3>Carrito</h3>
//             <br />
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Producto</th>
//                   <th>Precio</th>
//                   <th>Cantidad</th>
//                   <th>Total</th>
//                   <th>Eliminar</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map(item => (
//                   <tr key={item.id}>
//                     <td>{item.title}</td>
//                     <td>{item.price}</td>
//                     <td>{item.quantity}</td>
//                     <td>{item.quantity * item.price}</td>
//                     <td>
//                       <button className="btn btn-danger" onClick={() => removeItem(item)}>
//                         Eliminar
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <h3>Total: {cartTotal}</h3>
//             <Link to="/">Volver a la tienda</Link>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

export default Cart;
