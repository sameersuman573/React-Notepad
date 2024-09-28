import React, { useEffect } from "react";
import { useState } from "react";
import appwriteService from "../Appwrite/config";
import { Container, Postcard } from "../Components";

// to show all posts

function AllPosts() {
  // to get all posts we need to do query
  const [posts, setposts] = useState([]);

  //   when component will be loaded we will use useeffect
  useEffect(() => {}, []);
  // if it is successfull so write 'then' otherwise write catch
  appwriteService
    .getPosts([])
    .then((posts) => {
      if (posts) {
        setposts(posts.documents);
      }
    });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {/* applying loop that is map */}

          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Postcard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
