import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import InfoIcon from "@mui/icons-material/Info";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ref, getDownloadURL, listAll } from "firebase/storage";

import { useSelector } from "react-redux";

const DataContainer = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
`;

const DataHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  height: 40px;
  .headerLeft {
    display: flex;
    align-items: center;
  }
  .headerRight svg {
    margin: 0px 10px;
  }
`;

// const DataGrid = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 30px;
//   margin-bottom: 30px;
// `;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* Adjust the width of each column as needed */
  gap: 20px; /* Adjust the gap between images as needed */
  margin-top: 30px;
  margin-bottom: 30px;
  overflow: auto; /* Add overflow auto to enable scrolling if needed */
`;

const DataFile = styled.div`
  text-align: center;
  border: 1px solid rgb(204 204 204 / 46%);
  margin: 10px;
  min-width: 200px;
  padding: 10px 0px 0px 0px;
  border-radius: 5px;
  svg {
    font-size: 60px;
    color: gray;
  }
  p {
    border-top: 1px solid #ccc;
    margin-top: 5px;
    font-size: 12px;
    background: whitesmoke;
    padding: 10px 0px;
  }
`;
const DataListRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  p {
    display: flex;
    align-items: center;
    font-size: 13px;
    b {
      display: flex;
      align-items: center;
    }
    svg {
      font-size: 22px;
      margin: 10px;
    }
  }
`;

const Data = () => {
  const [filteredData, setfilteredData] = useState([]);
  // It will Stored the filterd data
  const [fileData, setFileData] = useState([]);
  const text = useSelector((state) => state.Search.searchText);

  useEffect(() => {
    const fetchDownloadURLs = async () => {
      try {
        const imageRef = await listAll(ref(storage, "files"));
        let temp = [];
        const urls = await Promise.all(
          imageRef.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            temp.push({
              fileUrl: url,
              fileName: itemRef.name,
            });
            return url;
          })
        );
        setFileData(temp);
        setfilteredData(temp);

        // setImageData({ ImageUrls : urls , filenames: filename})

        // ImageUrls stores the urls of the Uploaded image
        // filenames stores the filename of the Uploaded image
        // send the image to the parent component
      } catch (error) {
        console.error("error fetching the url", error);
        toast.error("error fetching download URLs");
      }
    };

    fetchDownloadURLs();
  }, []);




  useEffect(() => {
    const filterfile = () => {
      // Check if the text is empty after trimming whitespaces
      if (!text.trim()) {
        setfilteredData(fileData);
        // If no text is entered thens show all the data - This is the logic
        return;
      }

      console.log(text);
      console.log(fileData);



      // Now filter the data
      const filterfilenames = fileData.filter((file) => {

        if (typeof file.fileName !== 'string') {
          return false; // If fileName is not a string, skip this file
        }

        // lowercase is written to avoid aany sesnitive issues
        return file.fileName.toLowerCase().includes(text.toLowerCase())
    });

    console.log(filterfilenames);

      setfilteredData(filterfilenames)
 
    };

     filterfile();
  }, [text]);





  // console.log(filename);
  // console.log(imageURLs);

  // const filterData = () => {
  //   if (!text.trim()) return;
  //   console.log(text);
  //   console.log("hello"); // Moved inside the conditional block
  //   const filteredFilenames = fileData.filter((file) => file.fileName === text);
  //   setFileData(filteredFilenames);
  //   console.log(text);
  // };

  // useEffect(() => {
  //   filterData();
  // }, [text]);

  return (
    <DataContainer>
      <DataHeader>
        <div className="headerLeft">
          <p>My Drive</p>
          <ArrowDropDownIcon />
        </div>
        <div className="headerRight">
          <ListIcon />
          <InfoIcon />
        </div>
      </DataHeader>
      <div>

        <DataGrid>
          {Array.isArray(filteredData) &&
            filteredData.map((file) => (
              <DataFile key={file.fileUrl + Math.random()}>
                <InsertDriveFileIcon />
                {/* <p>{file.data.filename}</p> */}
                <img
                  src={file.fileUrl}
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                  }}
                />
                <p>{file.fileName} </p>
              </DataFile>
            ))}
        </DataGrid>

        <div>
          <DataListRow>
            <p>
              <b>
                Name <ArrowDownwardIcon />
              </b>
            </p>
            <p>
              <b>Owner</b>
            </p>
            <p>
              <b>Last Modified</b>
            </p>
            <p>
              <b>File Size</b>
            </p>
          </DataListRow>
          <DataListRow>
            {/* <a href={file.data.fileURL} target='_blank'> */}

            <p>
              Name
              <InsertDriveFileIcon />{" "}
            </p>
            {/* </a> */}
            <p>Me</p>
            <p>yesterday</p>
            <p>1 GB</p>
          </DataListRow>
        </div>
      </div>
    </DataContainer>
  );
};
export default Data;
