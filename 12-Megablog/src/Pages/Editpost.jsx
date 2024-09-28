import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, PostForm } from "../Components";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../Appwrite/config";

function Editpost() {
  const [post, setposts] = useState(null);

  // usepams
  // to takeout value form the url
  // for editing user will click and so will go on that page
  const { slug } = useParams();
  // wehn user will click so he will go that page so it will be availiable in url
  // It is a used for handling routing which allows you to access the parameters of the current url
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setposts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default Editpost;
