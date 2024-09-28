# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# userID - profile 
# userId - posts(comments,likes) - applicable => attached postId



<!--
 Install all dependencies
1. Create firebase project and save its data in firebase config
Also take refrence from firebaseconfig file
firebase install
# npm i sass
import toastify after write these things in main
import google button
import fonts

 -->

1. create all pages such as HOME , LOGIN , REGISTER and import all the thier component

2. make each component
   The register and login component will be very much same
   Then make the Home component
   Along with the CSS
   import GoogleButton from "react-google-button";

# Authorization

3. make a authorization for all such pages
   import { signInWithEmailAndPassword , createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from "firebase/auth";

4. make a route for all such pages
   export const router = createBrowserRouter([
   <!-- if you want to go to a type directly the put the path as " " -->

   {
   path: "",
   element: <Login/>,
   errorElement: <ErrorPage/>
   },
   {
   path: "/register",
   element: <Register/>,
   errorElement:<ErrorPage/>
   },
   {
   path: "/home",
   element: <Home/>,
   errorElement: <ErrorPage/>
   },
   ]);

5. In the main page

# routing

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

# toast

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

# Loading component

<!-- how onauthstatechanges works from firebase -->
<!-- antdesign - npm install antd -->

1. we will make usestate to make loading component

useEffect(() => {
onAuthStateChanged(auth, (res) => {
if (res?.accessToken) {

<!-- if we have acces token then navigate otherwise go to login page -->

navigate("/home");
} else {
setloading(false);
}
});
}, []);

  <!-- based on the true and false we would return loading component -->

return loading ? <Loader /> : <LoginComponent />;

if we would get token we will navigate other wise loading component will be shown 2. do samething in homecomponent

<!-- for more refer to home profile and login page -->

<!-- topbar -->

1. react icons = npm install react-icons --save
2. recat import command- import { FaBeer } from 'react-icons/fa';
3. add all icons
4. now do routing in the topbar page that if we click on ceratin selected icon we will be able to navigate through them and reach a page

let navigate = useNavigate();
const gotoRoute = (route) => {
navigate(route);
// the route is the props that we are passing to the function when you will be using the function pass /home or /profile
};

5.  in the topbar icon structure
    <!-- <AiOutlineHome
          size={25}
          className="react-icon"
          onClick={() => gotoRoute("/home")}
        /> -->
        routing is done on onclick

<!-- MODAL -->

when we will click on write a post will open up a modal

1. go to antdesign search modal
2. copy the js code not all
   c0py the usestates
3. in the modal component mke the ui and add functinalities

<!-- To add data to the database -->

1. write the function in firestoreapi
2. for syntax od addDoc refer google documentations

<!-- post display -->

npm install momemt --save

# refer to any of the functions of firebase by writing on the google to check its syntax like addD oc

1. in firestore use onsnapshot function to display instantly

2. export const getStatus = (setallStatus) => {
   onSnapshot(dbRef, (response) => {
   setallStatus(
   response.docs.map((docs) => {
   return { ...docs.data(), id: docs.id };
   })
   );
   });
   };
   This will be fetching all posts

3. In post update write a usestate function to displayit
4. To display it beautifully create a postcard function to display each post separately

<!-- logout -->
<!-- for unique id --- npm i react-uuid  -->

1. write the logout function in authapi
2. makea profile popup file and use the logout function there

3. in firestore make a function called => postuser data - that will it stores the data in firebase collection

export const postUserData = (object) => {
addDoc(userRef, object)
.then(() => {})

    .catch((err) => {
      console.log(err);
    });

};

also make a function in firestsore to record username and email

// to get current user -name and email
export const getCurrentUser = (setCurrentUser) => {
// let currEmail = localStorage.getItem("userEmail");
onSnapshot(userRef, (response) => {
setCurrentUser(
response.docs
.map((docs) => {
return { ...docs.data(), userID: docs.id };
})
.filter((item) => {
return item.email === localStorage.getItem("userEmail");
})[0]
// as soon as we recive the information we will filter the data to get only email
// the 0 signifies that email is at the 0th index
);
});
};

<!-- like system -->

1. deploy the like component in the postcard
2. now make a component called like button make its structure
3. then make usestates to handle like and usememo to save and momize the likes count
4. now the main part
   in the firestore create a collection of likes as there is a collection of post and users
5. then make a function called likepost in firestore api to manage like and dislikes

// TO LIKE THE POST
export const likePost = (userId, postId, liked) => {
console.log(userId);
console.log(postId);
try {
let docToLike = doc(likeRef, `${userId}_${postId}`);
if (liked) {
// after clicking like button if its is liked then reomve like else mark a like
deleteDoc(docToLike);
} else {
setDoc(docToLike, { userId, postId });
}
} catch (err) {
console.log(err);
}

};

<!-- COUNT THE LIKES -->

export const getLikesByUser = (userId, postId, setLiked, setLikesCount) => {
try {
let likeQuery = query(likeRef, where("postId", "==", postId));

    // TO GET THE COUNT INSTANTLY
    onSnapshot(likeQuery, (response) => {
      let likes = response.docs.map((doc) => doc.data());
      let likesCount = likes?.length;

      const isLiked = likes.some((like) => like.userId === userId);

      setLikesCount(likesCount);
      setLiked(isLiked);
    });

} catch (err) {
console.log(err);
}
};

<!-- COMMENT section -->

1. make the commment system in like componenet
2. write the ustetates and structure of the comments
3. now make the function in authapi

// To send comment to firebase
export const postComment = (postId, comment, timeStamp, name) => {
try {
addDoc(commentsRef, {
postId,
comment,
timeStamp,
name,
});
} catch (err) {
console.log(err);
}
};

<!-- // To show the comment visibility -->

export const getComments = (postId, setComments) => {
try {
let singlePostQuery = query(commentsRef, where("postId", "==", postId));

    onSnapshot(singlePostQuery, (response) => {
      const comments = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

<!-- set comments is basically a usestate which updates about the new comment -->
      setComments(comments);
    });

} catch (error) {
console.log(error);
}
};





<!-- TO UPDATE THE POST -->

export const updatePost = (id, status) => {
let docToUpdate = doc(postRef, id);
try {
updateDoc(docToUpdate, { status });
toast.success("Post has been updated successfully");

} catch (error) {
console.log(error);
}
};

<!-- all are usestates -->

<!-- also change status(usestate) in modal - as we have closed the modal the previous data must not be present there -->

const getEditData = (posts) => {
setModalOpen(true);
setStatus(posts?.status);
setCurrentPost(posts);
// when edit button is triggered
setIsEdit(true);
};

if edit is true then update otherwise post the data
#update only when chenging the posted post otherwise post a new post
{isEdit ? "Update" : "post"}

const updateStatus = () => {
console.log(status);
updatePost(currentPost.id, status);

<!-- status is the data you type in modal -->

setModalOpen(false);
};

<!-- TO DELETE THE POST -->

export const deletePost = (id) => {
// we are passing the id here so in posstcard we are passing post.id

let docToDelete = doc(postRef,id)
try {
deleteDoc(docToDelete)
toast.success("Post has been deleted successfully");

} catch (error) {
console.log(error);
}
}
