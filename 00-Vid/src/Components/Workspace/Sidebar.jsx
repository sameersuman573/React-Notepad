import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import DevicesIcon from "@mui/icons-material/Devices";
import PeopleIcon from "@mui/icons-material/People";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import styled from "styled-components";
import { useState } from "react";
import Modal from "@mui/material/Modal";

import { BsLayoutSidebarInset } from "react-icons/bs";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";

// const SidebarContainer = styled.div`
//   margin-top: 10px;
// `;

// const SidebarContainer = styled.div`
//   position: fixed;
//   top: 150px; /* Adjust the top margin according to the height of your header */
//   left: 0;
//   height: calc(100% - 60px); /* Adjust the height to fill the remaining space */
//   width: 250px;
//   background-color: #fff;
//   overflow-y: auto;
//   z-index: 1000;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
// `;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) =>
    open ? "0" : "-250px"}; /* Hide sidebar by default on mobile */
  height: 100%;
  width: 250px;
  flex: 1;
  max-width: 80%; /* Adjust max-width for mobile */
  background-color: #fff;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease; /* Add transition for smooth animation */
`;

// const SidebarBtn = styled.div`
//   button {
//     background: transparent;
//     border: 1px solid lightgray;
//     display: flex;
//     align-items: center;
//     border-radius: 40px;
//     padding: 5px 10px;
//     box-shadow: 2px 2px 2px #ccc;
//     margin-left: 20px;
//     span {
//       font-size: 16px;
//       margin-right: 20px;
//       margin-left: 10px;
//     }
//   }
// `;

// const SidebarBtn = styled.div`
//   display: none; /* Hide sidebar button on desktop */
//   @media (max-width: 768px) {
//     display: block; /* Show sidebar button on mobile */
//     button {
//       background: transparent;
//       border: 1px solid lightgray;
//       display: flex;
//       align-items: center;
//       border-radius: 40px;
//       padding: 5px 10px;
//       box-shadow: 2px 2px 2px #ccc;
//       margin-left: 20px;
//       span {
//         font-size: 16px;
//         margin-right: 20px;
//         margin-left: 10px;
//       }
//     }
//   }
// `;

// const SidebarBtn = styled.div`
//   position: fixed;
//   top: 10px; /* Adjust the top position */
//   left: 10px; /* Adjust the left position */
//   z-index: 999; /* Ensure the button is above other content */
//   button {
//     background: transparent;
//     border: 1px solid lightgray;
//     display: flex;
//     align-items: center;
//     border-radius: 40px;
//     padding: 5px 10px;
//     box-shadow: 2px 2px 2px #ccc;
//     span {
//       font-size: 16px;
//       margin-right: 20px;
//       margin-left: 10px;
//     }
//   }
// `;

const SidebarBtn = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  button {
    background: transparent;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    border-radius: 40px;
    padding: 5px 10px;
    box-shadow: 2px 2px 2px #ccc;
    span {
      font-size: 16px;
      margin-right: 20px;
      margin-left: 10px;
    }
  }
`;



const Button = styled.button`
  background-color: #007bff; /* Blue color */
  color: #fff; /* White text color */
  padding: 10px 20px; /* Adjust padding as needed */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* Add more styles as needed */
`;

const SidebarOptions = styled.div`
  margin-top: 10px;
  .progress_bar {
    padding: 0px 20px;
  }
  .progress_bar span {
    display: block;
    color: #333;
    font-size: 13px;
  }
`;

const SidebarOption = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  border-radius: 0px 20px 20px 0px;
  &:hover {
    background: whitesmoke;
    cursor: pointer;
  }
  svg.MuiSvgIcon-root {
    color: rgb(78, 78, 78);
  }
  span {
    margin-left: 15px;
    font-size: 13px;
    font-weight: 500;
    color: rgb(78, 78, 78);
  }
`;

const ExternalButton = styled.button`
  position: fixed;
  top: 0px;
  right: 20px;
  z-index: 999;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

const ModalPopup = styled.div`
  top: 50%;
  background-color: #fff;
  width: 500px;
  margin: 0px auto;
  position: relative;
  transform: translateY(-50%);
  padding: 10px;
  border-radius: 10px;
`;

const ModalHeading = styled.div`
  text-align: center;
  border-bottom: 1px solid lightgray;
  height: 40px;
`;

const ModalBody = styled.div`
  input.modal__submit {
    width: 100%;
    background: darkmagenta;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  input.modal__file {
    background: whitesmoke;
    padding: 20px;
    color: #000;
    display: block;
    margin-top: 20px;
  }
`;

const UploadingPara = styled.p`
  background: green;
  color: #fff;
  margin: 20px;
  text-align: center;
  padding: 10px;
  letter-spacing: 1px;
`;

const Sidebar = () => {
   

  const [open, setopen] = useState(false);
  const [opensidebar, setopensidebar] = useState(false)
  

  const [progress, setprogress] = useState(0);

  const toggleSidebar = () => {
    // setopen(!open);
    setopensidebar(!opensidebar);
  };


  const formhandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    toast.success("Image has been uploaded");

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setprogress(prog);
      },
      (error) => {
        console.log(error);
        toast.error("error uploading image");
      },
      () => {
        toast.success("Image uploaded successfully");
      }
    );
  };


  return (
    <>


      <Modal 
      open={open} onClose={() => setopen(false)}
      >
        <ModalPopup>
          <form onSubmit={formhandler}>
            <ModalHeading>
              <h3>Select file you want to upload</h3>
            </ModalHeading>
            <ModalBody>
              {/* If our file is being uploaded then we will display uploading.... else we will display the usual bhevaour of the modal body which is simple input the file if any which you wnat to upload */}
              <>
                <input
                  type="file"
                  className="modal__file"
                  //   onChange={(e) => setimageUpload(e.target.files[0])}
                />
                {/* <input type="submit" className="modal__submit"  onClick={uploadImage}/> */}
                <button type="submit" style={{backgroundColor : 'Violet' , borderRadius: '10px'}} > Upload </button>
              </>
            </ModalBody>
            <hr />
            <h2>Uploading done {progress}%</h2>
          </form>
        </ModalPopup>
      </Modal>





      <ExternalButton onClick={toggleSidebar}>
        {opensidebar ? <BsLayoutSidebarInset /> : <TbLayoutSidebarRightExpandFilled />}
      </ExternalButton>



      <SidebarContainer 
      // open={open}
      open={opensidebar}
       >
        <SidebarOptions>

          <SidebarBtn>
            <button onClick={() => 
            setopen(!open)
             }
            >
              <img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E" />
              <span>New</span>
            </button>
          </SidebarBtn>

          <SidebarOption>
            <MobileScreenShareIcon />
            <span>Almanac</span>
          </SidebarOption>
          <SidebarOption>
            <DevicesIcon />
            <span>Device</span>
          </SidebarOption>
          <SidebarOption>
            <PeopleIcon />

            <span>Friends</span>
          </SidebarOption>
          <SidebarOption>
            <QueryBuilderIcon />

            <span>Recent</span>
          </SidebarOption>
          <SidebarOption>
            <StarBorderIcon />

            <span>Starred</span>
          </SidebarOption>
          <SidebarOption>
            <DeleteOutlineIcon />

            <span>Trash</span>
          </SidebarOption>
        </SidebarOptions>
        <hr />
        <SidebarOptions>
          <SidebarOption>
            <CloudQueueIcon />
            <span>Storage</span>
          </SidebarOption>

          {/* <div className="progress_bar">
            <progress size="tiny" value="10" max="100" />
            <span>105 GB of 200 GB used</span>
          </div> */}
        </SidebarOptions>
      </SidebarContainer>
    </>
  );
};
export default Sidebar;
