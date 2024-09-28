import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../Appwrite/config";
import Postform from "../Components/PostForm/Postform";

function Editpost() {
  const [posts, setposts] = useState([]);

  const { slug } = useParams();
  const navigate = useNavigate();

  // just as the page loads i want my all post to get loadede so that i can vaigate through that post and edit them
  // so to have their url last address i have usedthe slug and for naviagtion i ahve used the use navigate


  
  useEffect(() => {
    if (slug) {
      appwriteService.getPost([]).then((posts) => {
        if (posts) {
          setposts(posts);
        } else {
          navigate("/");
        }
      });
    }
  }, [navigate, posts]);



  return posts ? (
    <div>
      <Postform posts={posts} />
    </div>
  ) : null;

}

export default Editpost;
