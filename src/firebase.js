import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "ТВОЙ_API_KEY",
    authDomain: "ashvein-ab1f6.firebaseapp.com",
    projectId: "ashvein-ab1f6",
    storageBucket: "ashvein-ab1f6.firebasestorage.app",
    messagingSenderId: "557942192610",
    appId: "ТВОЙ_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


// Получить все товары
export async function getMerch() {
    const querySnapshot = await getDocs(
        collection(db, "products")
    );

    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}


// Создать заказ
export async function placeOrder(userId, cartItems, total) {
    await addDoc(collection(db, "orders"), {
        userId: userId,
        items: cartItems,
        totalAmount: total,
        status: "pending",
        createdAt: new Date().toISOString()
    });
}