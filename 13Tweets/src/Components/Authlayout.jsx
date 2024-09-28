import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = false }) {
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {

    // if (authStatus == true) {
    //   navigate("/");
    // } else if (authStatus == false) {
    //   navigate("/login");
    // }
    
    if (authentication && authentication != authStatus) {
      navigate("/login");
    } else if (!authentication && authentication != authStatus) {
      navigate("/");
    }
  }, [authentication, authStatus]);

setloading(false);

  return loading ? <h1>...Loading</h1> : {children}
}
