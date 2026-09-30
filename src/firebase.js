import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAc3AmOxOEs3wIjSOZ-f8J48rhxvnyLmy4",
    authDomain: "ashvein-ab1f6.firebaseapp.com",
    projectId: "ashvein-ab1f6",
    storageBucket: "ashvein-ab1f6.firebasestorage.app",
    messagingSenderId: "557942192610",
    appId: "1:557942192610:web:35b0dcd8cca525b7a9e1bb",
    measurementId: "G-PR2W65NYV9"
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
db.collection('products').get()