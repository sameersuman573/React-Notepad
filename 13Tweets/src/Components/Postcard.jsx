import React from "react";
import appwriteService from "../Appwrite/config";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredimage }) {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div>
          {/* share the image of the post */}
          <img src={appwriteService.previewFile(featuredimage)} alt={title} />
        </div>

        <h2> {title} </h2>
      </Link>
    </div>
  );
}

export default Postcard;
