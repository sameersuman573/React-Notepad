import Data from "./Components/Data";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import FirebaseImageUpload from "./Components/Imageupload";
// import { auth, provider } from './firebase';
import styled from "styled-components";
import { useState } from "react";

const LoginWrapper = styled.div`
  background: lightgrey;
  padding: 20px;
  width: 400px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  img {
    width: 100px;
  }
  button {
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
`;

function App() {
  
  return (
    <>
      {/* <Header  /> */}
      <div className="App">
      <FirebaseImageUpload/>
        {/* <Sidebar /> */}

        {/* <Data /> */}
      </div>

      {/* {user ? (

      <>
        <Header photoURL={user.photoURL} />
        <div className="App">
          <Sidebar />
          <Data />
        </div>
      </>
    ) : (
          <LoginWrapper>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png" alt="gdrive" />
            <button onClick={signIn}>Login to Google Drive</button>
          </LoginWrapper>
    )
    } */}
    </>
  );
}

export default App;
