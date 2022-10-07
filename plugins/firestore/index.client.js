import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export default defineNuxtPlugin(async nuxtApp => {

    console.log("NuxtPlugin firestore client mode frontend");

    const firebaseConfig = {
        apiKey: "",
        authDomain: "******.firebaseapp.com",
        databaseURL: "",
        projectId: "******",
        storageBucket: "*****",
        messagingSenderId: "***",
        appId: "*****"
    }

    const app = initializeApp(firebaseConfig)

    const db = getFirestore(app)

    const querySnapshot = await getDocs(collection(db, "namecollection"));
    querySnapshot.forEach((doc) => {

        // check the connection 
        //  console.log(doc.data())


    });

    // REMEMBER this mode to call firestore, is client mode
})