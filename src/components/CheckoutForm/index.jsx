import React, { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';

const FormCheckout = ({ hasStock, itemsWithOverstock }) => {
  const [dimmed, isDimmed] = useState(false);
  useEffect(() => {
    if (!hasStock) {
      isDimmed(false);
    } else {
      isDimmed(true);
    }
  }, [hasStock]);

  return (
    <div className="w-40 ml3 bg-white br2 pa1">
      {dimmed ? (
        <div className="w-100 h5 bg-grey black flex flex-column w-90 center">
          Los siguientes items superaron el limite de unidades: <span>{itemsWithOverstock}</span>
        </div>
      ) : (
        <form className="flex flex-column w-90 center">
          <h3 className="f4 b tc">Datos del comprador:</h3>
          <div className="w-90 center">
            <Input
              className="mv1"
              focusBorderColor="black"
              errorBorderColor="black"
              placeholder="Nombre"
              isRequired
              isInvalid
            />
            <Input
              className="mv1"
              focusBorderColor="black"
              errorBorderColor="black"
              type="tel"
              placeholder="Teléfono"
              isRequired
              isInvalid
            />
            <Input
              className="mv1"
              focusBorderColor="black"
              errorBorderColor="black"
              type="email"
              placeholder="Email"
              isRequired
              isInvalid
            />
          </div>
          <button className="tc center ph1 w-80 pv3 br3 bw1 bg-black white">Terminar Compra</button>
        </form>
      )}
    </div>
  );
};

export default FormCheckout;
