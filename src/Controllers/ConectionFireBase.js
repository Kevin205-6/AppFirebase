import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'

class ConectionFireBase {
    constructor() {
        const firebaseConfig = {
            apiKey: process.env.EXPO_PUBLIC_API_KEY,
            authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
            projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
            storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
            messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
            appId: process.env.EXPO_PUBLIC_APP_ID
        }

        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
    }

    async InsertValueDatabase(coleccion, object) {
        try {
            const dato = await addDoc(collection(this.db, coleccion), object);
            alert("ID del objeto: " + dato.id);
        } catch (e) {
            alert('Error: ' + e)
        }

    }

    async GetInfoDataBase() {
        const info = [];
        try {
            const data = await getDocs(collection(this.db, 'person'))
            data.forEach((doc) => {
                info.push({ nombre: doc.data().nombre, apellido: doc.data().apellido });
            })
        } catch (e) {
            alert('Error', e)
        }

        return info;
    }

}

export default ConectionFireBase;