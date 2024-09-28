
import { firestore } from "../../../Lclone/src/firebaseConfig";
import {
    addDoc,
    collection,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
    setDoc,
    query,
    where,
    orderBy,
    serverTimestamp,
} from firebase/firestore;

// making collections
let postRef = collection(firestore,"posts");
let userRef = collection(firestore,"users");
let likeRef = collection(firestore,"likes");
let commentsRef = collection(firestore,"comments");
let connectionRef = collection(firestore,"connections");

import {toast} from "react-toastiy"
import { useRef } from "react";



// sending post to firestore
export const postStatus = (object) => {
addDoc(postRef , object)
.then(() => {
    toast.success("post has been added successfully")
} )
.catch((err) => {
    console.log(err);
})
}


// getting the post from firestore
 export const getStatus = (setAllStatus) => {
const querymake = query(postRef , orderBy("timeStamp"));
onSnapshot(querymake, (response) => {
    setAllStatus(response.docs.map((docs)=> {
        return {...docs.data() , id:docs.id}
    }))
})
 }



// sending the userdata from the post posted by user
export const postUserData = () => {
    addDoc(userRef , object)
    .then(() => {})

    .catch((error) => {
        console.log(error);
    })
}

// to get the data about all the users of our community
export const getAllUsers = (setAllUsers) => {
    onSnapshot(useRef, (response) => {
        // setallusers is basically a usestate
        setAllUsers(
response.docs.map((docs) => {
return {
    ...docs.data(),
    id:docs.id
}
})
        )
    })
}



// we had made a function such that it will first map the data with id and if the user make nay chnages the chnages will be applied to the respected post

export const updatePost = (id,status ,postImage) => {
    let docToupdate =doc(postRef, id )
    try {
        updateDoc(docToupdate,{status,postImage})
        // status is the post made by user
        // post image is the image posted by user
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => {
    let docToDelete = doc(postRef, id);
    try {
        deleteDoc(docToDelete)
    } catch (error) {
        console.log(error);
    }
}




// COMMENT 

// to send comment to the firebase
export const postComment = (postId , comment, timestamp , name) => {
try {
    addDoc(commentsRef , 
        postId,
        comment,
        timestamp,
        name)
} catch (error) {
    console.log(error);
}
}


// to get the comments from firestore
export const getComments = (setComments) => {
    try {
        singlePostQuery = query (commentsRef , where("postId", "==", postId));

        onSnapshot(singlePostQuery, (response) => {
            const comments = response.docs.map((doc) => {
                return {
                    id:doc.id,
                    ...doc.data(),
                    // we are talking about the single comment so write doc only
                };
            });
            setComments(comments);
        });
    } catch (error) {
        console.log(error);
    }
};


// PROFILE

// edit profile
export const editProfile = (userID, payload) => {
    let userToEdit = doc(userRef , userID)

    updateDoc(userToEdit , payload)
    .then(() => {
        toast.success("")
    })

    .catch((err) => {
        console.log(err);
    })
}


// if there is no usetate we take a variable then calculate the sresponse if otherwise we use the usetate function

// get information about current user
export const getCurrentUser = (setCurrentUser) => {
    onSnapshot(userRef , (response ) => {
        setCurrentUser(response.docs.map((docs) => {
            return {...docs.data() , id:docs.id}
        }).filter((item) => {
            return item.email === localStorage.getItem("userEmail")
        })[0]
        )
    })
}


// LIKE

// to like a post
export const likePost = (userId, postId, liked) => {
    try {
        let docToLike = doc(likeRef , `${userId}_${postId}`)

        // system to like and dislike
        if(liked){
            deleteDoc(docToLike)
        }
        else{
            setDoc(docToLike , {userId , postId})
            // here we are passing the props as userid and postid
        }

        // liked is a usetate which changes color if it is true

    } catch (error) {
        console.log(error);
    }
}


// to show the count of likes
export const getLikeByUser = (userId, postId, setLiked,setlikesByCount) => {

    let likeQuery = query(likeRef, where("postId", "==" , postId))

    onSnapshot(likeQuery , (response)=> {
        // it calculate sthe likes count
        let likes = response.docs.map((doc) => doc.data)
        let likescount = likes?.length;

        // it authenticates the like
        const isLiked = likes.some((like) => like.userId === userId);

        // it sets the count
        setlikesByCount(likescount)
        // it sets the like
        setLiked(isLiked)
    })
}