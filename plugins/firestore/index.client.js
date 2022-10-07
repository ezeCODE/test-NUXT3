import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export default defineNuxtPlugin(async nuxtApp => {

    console.log("NuxtPlugin firestore client mode frontend");

    const firebaseConfig = {
        apiKey: "AIzaSyAaIGPVhcSg6Q2QdMsBFEZTCe0u1SK0xlE",
        authDomain: "tiendaalimentos.firebaseapp.com",
        databaseURL: "https://tiendaalimentos.firebaseio.com",
        projectId: "tiendaalimentos",
        storageBucket: "tiendaalimentos.appspot.com",
        messagingSenderId: "68329043413",
        appId: "1:68329043413:web:17b246bedd73a2f537b95c"
    }

    const app = initializeApp(firebaseConfig)

    const db = getFirestore(app)

    const querySnapshot = await getDocs(collection(db, "Almacen"));
    querySnapshot.forEach((doc) => {

        // check the connection 
        //  console.log(doc.data())


    });

    // REMEMBER this mode to call firestore, is client mode
})