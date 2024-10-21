// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCJEawthQvhE6yk5ksBZgBZnpNjK6wZVR4',
    authDomain: 'testmysystem-master.firebaseapp.com',
    projectId: 'testmysystem-master',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'BE6m_K7jR7nLzfTqOjM6gYZU3dWV64rdjUktJ4WC8XHLR78Zqh_1Q7qcg7k7qSh8EKRaMJaFOYJnfmL2N9YNM7Q',
    appId: 'YOUR_APP_ID'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase authentication for use in your components
export const auth = firebase.auth();
