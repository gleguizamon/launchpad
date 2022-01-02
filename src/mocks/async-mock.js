const products = [
  {
    id: 1,
    stock: 10,
    category: 'aventura',
    title: 'Paracaidismo en el Caribe',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/58c6ff14cd0f68e122791552/1607568046341-M68ZMCW22MJFSUDKX23L/Skydive-Playa-del-Carmen-Paracaidismo-Mexico-Cancun-Tulum-Cozumel-Xcaret-SkydiveMex-Top-Thing-To-Do-En-Playa76.jpg?format=1500w',
    imageAlt: 'Paracaidismo en el Caribe',
    price: '4.805'
  },
  {
    id: 2,
    stock: 0,
    category: 'aventura',
    title: 'Trekking en el Himalaya',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl:
      'https://tuaregviatges.es/viajes/wp-content/uploads/2017/02/Nepal-khumbu-eva-respalzuri.jpg',
    imageAlt: 'Trekking en el Himalaya',
    price: '2.003'
  },
  {
    id: 3,
    stock: 0,
    category: 'aventura',
    title: 'Cabalgatas en los Andes',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl:
      'https://ampascachi.com/images/blog/vacaciones-caballo-argentina/cruce-de-los-andes/los-andes-paso-piuqenes.jpg',
    imageAlt: 'Cabalgatas en los Andes',
    price: '1.270'
  },

  {
    id: 4,
    stock: 5,
    category: 'gastronomia',
    title: 'Almorzá en la playa',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl:
      'http://turismoyhospitalidad.com/wp-content/uploads/2019/03/CYMERA_20150505_111704.jpg',
    imageAlt: 'Almorzá en la playa',
    price: '4.805'
  },
  {
    id: 5,
    stock: 2,
    category: 'gastronomia',
    title: 'Cafecito en París',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl:
      'https://www.revistadeck.com/sitio/wp-content/uploads/Trocadero-Cafe%CC%81-de-l%E2%80%99Homme.jpg',
    imageAlt: 'Cafecito en París',
    price: '2.003'
  },
  {
    id: 6,
    stock: 15,
    category: 'gastronomia',
    title: 'Cená en un crucero de lujo',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl:
      'https://www.francetourisme.fr/images/soirees_a_paris/diner_croisiere/diner_croisiere_amiral.jpg',
    imageAlt: 'Cená en un crucero de lujo',
    price: '1.270'
  },

  {
    id: 7,
    stock: 7,
    category: 'estadias',
    title: 'Hospedate en la Patagonia',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl:
      'https://media-cdn.tripadvisor.com/media/photo-s/11/f1/6f/7b/hotel-concorde-bariloche.jpg',
    imageAlt: 'Hospedate en la Patagonia',
    price: '4.805'
  },
  {
    id: 8,
    stock: 8,
    category: 'estadias',
    title: 'Descansá en una estancia',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl:
      'https://resizer.glanacion.com/resizer/wPqsMwto-GcxP4Nbx_IVujZSHiI=/1920x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/UXN7FHXHDBHG5CUFT37NULHFHQ.jpg',
    imageAlt: 'Descansá en una estancia',
    price: '2.003'
  },
  {
    id: 9,
    stock: 2,
    category: 'estadias',
    title: 'Acampá en la montaña',
    description: 'Lorem ipsum dolor sit amet',
    imageUrl:
      'https://img.freepik.com/foto-gratis/acampar-cima-montana-brillante-manana-verano_10069-3736.jpg?size=626&ext=jpg',
    imageAlt: 'Acampá en la montaña',
    price: '1.270'
  }
];

export const fetchCategories = async categoryId => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(categoryId ? products.filter(product => product.category === categoryId) : products);
    }, 2000);
  });
};

export const fetchId = async itemId => {
  itemId = parseInt(itemId);
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(products.find(product => product.id === parseInt(itemId)));
    }, 2000);
  });
};
