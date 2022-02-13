import { getFirestore } from '../firebase';

const db = getFirestore();

export const storeOrder = order => {
  return db.collection('orders').add(order);
};

export const getOrder = async id => {
  const order = await db.collection('orders').doc(id).get();
  return order.data();
};
