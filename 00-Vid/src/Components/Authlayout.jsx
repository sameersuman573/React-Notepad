import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from "./Container/Container";

export default function Protected({ children , authentication = true }) {
  const navigate = useNavigate();
  const [loader, setloader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);


  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/Login");
    } else if (!authentication
      && authStatus !== authentication
    ) {
      navigate("/Workspace");
    }

    setloader(false);
  }, [authStatus]);


  

  return loader ? <h1>Loading...</h1> : <> {children} </>;
}
