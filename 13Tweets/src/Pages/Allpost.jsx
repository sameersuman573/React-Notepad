import React from "react";
import appwriteServices from "../Appwrite/config";
import { useState } from "react";
import { Container, Postcard } from "../Components";

function Allpost() {
  // To display all the post we must use usestate

  const [post, setpost] = useState([]);
  //   to get all th epost we mut use the appwrite service and to get the post as soon as the page loads we must use the useffect

  appwriteServices.getPost([])
  .then((post) => {
    if (post) {
      setpost(post.documents);
    }
  });



  return (
    <Container>
      {post.map((post) => (
        <div key={post.$id}>
          <Postcard post={post} />
        </div>
      ))}
    </Container>
  );
}

export default Allpost;
