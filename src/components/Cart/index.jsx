import React from 'react';
import { useCartContext } from '../../context/CartContext';

const Cart = () => {
  const { cart, clearCart, cartTotal } = useCartContext();

  return (
    <>
      <section>
        <header>
          <h2 className="f2 b tc pv3">Lista de compra</h2>
        </header>
        <div>
          {cart.map(item => {
            return (
              <div key={item.id}>
                <img src={item.imageUrl} alt={item.imageAlt} />
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.quantity} x ${item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <footer>
          <hr />
          <div>
            <h4>
              Total: <span>${cartTotal}</span>
            </h4>
          </div>
        </footer>
        <button onClick={clearCart}>Limpiar carrito</button>
      </section>
    </>
  );
};

export default Cart;
