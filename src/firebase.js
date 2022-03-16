import firebase from '@firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAAtwSJcFDrfB0_ls-lxqmtyzbClV8ZIAQ',
  authDomain: 'launchpad-7fe2a.firebaseapp.com',
  projectId: 'launchpad-7fe2a',
  storageBucket: 'launchpad-7fe2a.appspot.com',
  messagingSenderId: '444248166685',
  appId: '1:444248166685:web:66fdf6e5439a39711611f4'
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
