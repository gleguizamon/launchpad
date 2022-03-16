import React, { useState, useEffect } from 'react';
import { Input, Button, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { storeOrder } from '../../services/CreateOrder';
import { useCartContext } from '../../context/CartContext';

const CheckoutForm = ({ items, hasStock, itemsWithOverstock }) => {
  const navigate = useNavigate();

  const toast = useToast();
  const [dimmed, isDimmed] = useState(false);
  const { clearCart } = useCartContext();
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const validateName = name => {
    const regex = /^[a-zA-Z ]*$/;
    return regex.test(name);
  };

  const validatePhone = phone => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const validateMail = email => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line
    return regex.test(email);
  };

  useEffect(() => {
    if (!hasStock) {
      isDimmed(false);
    } else {
      isDimmed(true);
    }
  }, [hasStock]);

  const handleChange = e => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!customer.name || !customer.email || !customer.phone) {
      toast({
        title: 'Error',
        description: 'Debe completar todos los campos',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    } else if (
      !validateName(customer.name) ||
      !validatePhone(customer.phone) ||
      !validateMail(customer.email)
    ) {
      toast({
        title: 'Error',
        description: 'Los datos ingresados no son válidos',
        status: 'error',
        duration: 5000,
        isClosable: true
      });

      return;
    } else {
      const order = {
        customer,
        items: items
      };

      const response = await storeOrder(order);
      toast({
        title: 'Éxito',
        description: 'Su pedido se ha realizado con éxito',
        status: 'success',
        duration: 5000,
        isClosable: true
      });
      clearCart();
      navigate('/order/' + response.id);
    }
  };

  return (
    <div className="w-80 center-m w-40-l ml3 bg-white br2 pv4 h6">
      {dimmed ? (
        <div className="w-100 h4 ph3 justify-center red flex flex-column center">
          Los siguientes items superaron el limite de unidades:{' '}
          <ul className="list">
            <li>
              <span>{itemsWithOverstock}</span>
            </li>
          </ul>
        </div>
      ) : (
        <form className="flex flex-column w-90 center">
          <h3 className="f4 b tc">Datos del comprador:</h3>
          <div className="w-100-l w-70 center">
            <Input
              className="mv1"
              errorBorderColor={
                customer.name === '' ? 'black' : !validateName(customer.name) ? 'crimson' : 'lime'
              }
              focusBorderColor={!validateName(customer.name) ? 'crimson' : 'lime'}
              type="text"
              placeholder="Nombre"
              name="name"
              value={customer.name}
              onChange={handleChange}
              isRequired
              isInvalid
            />
            <Input
              className="mv1"
              errorBorderColor={
                customer.phone === ''
                  ? 'black'
                  : !validatePhone(customer.phone)
                  ? 'crimson'
                  : 'lime'
              }
              focusBorderColor={!validatePhone(customer.phone) ? 'crimson' : 'lime'}
              type="tel"
              placeholder="Teléfono"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              isRequired
              isInvalid
            />
            <Input
              className="mv1"
              errorBorderColor={
                customer.email === '' ? 'black' : !validateMail(customer.email) ? 'crimson' : 'lime'
              }
              focusBorderColor={!validateMail(customer.email) ? 'crimson' : 'lime'}
              type="email"
              placeholder="Email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              isRequired
              isInvalid
            />
          </div>
          <Button
            isDisabled={false}
            colorScheme="transparent"
            type="submit"
            className="tc center ph1 w-60 w-80-l pv3 br3 bw1 bg-black white"
            onClick={handleSubmit}
          >
            Terminar Compra
          </Button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
