import appwriteService from "../Appwrite/config";
import React, { useEffect, useState } from "react";
import { Container, Postcard } from "../Components";

function Home() {
  // in home page i wiil be displaying all the posts
  const [post, setpost] = useState([]);

  useEffect(() => {
    appwriteService.getPost([]).then((post) => {
      if (post) {
        setpost(post);
      }
    });
  }, []);

  if (post.length === 0) {
    <Container>
      <div>
        <h1>Login to read post</h1>
      </div>
    </Container>;
  }

  return (
    <div>
      <Container>
        {post.map((post) => {
          <div>
            <Postcard post={post} />
          </div>;
        })}
      </Container>
    </div>
  );
}

export default Home;
