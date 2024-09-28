import React from "react";
import { Imagedb } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function ImageUpload() {
  const [img, setimg] = useState("");

  const handleclick = () => {
    const imgRef = ref(Imagedb, "Files/${v4()}");
    uploadBytes(imgRef, img);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setimg(e.target.files[0])} />
      <button onClick={handleclick}>Upload</button>
    </div>
  );
}

export default ImageUpload;
