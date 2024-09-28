import { firestore } from "../firebase";
import {
    collection,
    setDoc,
    addDoc,
    getDoc,
    updateDoc,
    onSnapshot,
    where,
    query,
    QuerySnapshot,
    getDocs
} from "firebase/firestore"



let Userref = collection( firestore , "User")

export const postUserData = (object) => {
addDoc(Userref , object)
.then(() => {})

.catch((err) => {
    console.log(err);
})
}

export const getCurrentUser = async (email) => {
    try {
        const queryRef = query(Userref, where("email", "==", email));
        const querySnapshot = await getDocs(queryRef);

        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            console.log('Current user data:', userData);
            return userData;
        } else {
            console.log('No user found with email:', email);
            return null;
        }
    } catch (error) {
        console.error('Error fetching the current user:', error);
        throw error;
    }
}


