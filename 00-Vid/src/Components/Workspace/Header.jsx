import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchtext } from "../../Store/SearchSlice";

// const HeaderContainer = styled.div`
//  position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     display: grid;
//     grid-template-columns: 250px auto 250px ;
//     align-items: center;
//     padding: 5px 20px;
//     height: 60px;
//     border-bottom: 1px solid lightgray;
// `
// const HeaderContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   display: grid;
//   grid-template-columns: 250px auto 250px;
//   align-items: center;
//   padding: 5px 20px;
//   height: 60px;
//   background-color: #fff; /* Add background color for the header */
//   z-index: 1000; /* Ensure the header is above other content */
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add shadow for better visibility */
//   border-bottom: 1px solid lightgray;
// `;

const HeaderContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 250px auto 250px;
  align-items: center;
  padding: 5px 20px;
  height: 60px;
  background-color: #fff; /* Add background color for the header */
  z-index: 1000; /* Ensure the header is above other content */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add shadow for better visibility */
  border-bottom: 1px solid lightgray;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
  }
  span {
    font-size: 22px;
    margin-left: 10px;
    color: gray;
  }
`;

// const HeaderSearch = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center; /* Add this line to center the content horizontally */
//     width: 700px;
//     background-color: whitesmoke;
//     padding: 12px;
//     border-radius: 10px;
//     input{
//         background-color: transparent;
//         border: 0;
//         outline: 0;
//         flex: 1;
//     }
// `
const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: whitesmoke;
  padding: 12px;
  border-radius: 10px;
  input {
    background-color: transparent;
    border: 0;
    outline: 0;
    flex: 1;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  svg.MuiSvgIcon-root {
    margin: 0px 10px;
  }
`;

const Header = ({ ImageData }) => {
  const [searchquery, setsearchquery] = useState("");
  const dispatch = useDispatch();

  const handlesearch = (e) => {
    setsearchquery(e.target.value);
    dispatch(setSearchtext(e.target.value.trim()))
  };


  const filterImage = Array.isArray(ImageData) ? ImageData.filter((image) => {
    return image.filename.toLowerCase().includes(searchquery.toLowerCase());
  }): [];



  return (
    <HeaderContainer>
      {/* <HeaderLogo>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="Google Drive" />
                <span>Drive</span>
            </HeaderLogo> */}

      <HeaderSearch>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search in Drive"
          value={searchquery}
          onChange={handlesearch}
        />
        <FormatAlignCenterIcon />
      </HeaderSearch>

      <HeaderIcons>
        {/* <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span> */}
        <span>
          {/* <AppsIcon /> */}
          {/* <Avatar src={photoURL} /> */}
        </span>
      </HeaderIcons>

      <div>
        {filterImage.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.filename} />
            <p>{image.filename} </p>
          </div>
        ))}
      </div>
    </HeaderContainer>
  );
};
export default Header;
