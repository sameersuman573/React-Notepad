import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
// selector - it is used to view in store that user is logged in or not
import { useSelector } from "react-redux";
// navigate - used for changing location
import { useNavigate } from "react-router-dom";
// naviagtion and usenavigate is diffrent

function Header() {

  // useselector is used to gain the status of is the user authenticated or not
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();


  // Prodeuction grade components
  // It is an array consisting of objects just add the objects and it will be added in navigation bar
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },

    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      // the authstatus will tell that it is active or not whichever will be active it will be displayed
    },

    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },

    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },

    {
      name: "Add post",
      slug: "/add-post",
      active: authStatus,
    },
  ];



  return (
    // CONDITIONAL RENDERING

    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          {/* LOGO */}
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                // mapping all items to see if they are active or not
                // wherever html elements are repeating we apply keys name and slug are repeating
                <li key={item.name}>
                  {/* navigate came from router */}
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}



{/* Very imporatnt------------------- */}
            {/* if authstatus would be true then it would proceed further */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}


export default Header;


// // basic mapping
// <ul>
//   {nav.items.map((item) =>
//     item.active ? (
//       {/* first identify the name of the key  */}
//       <li key={item.name}>
//       then according to that navigate on the slug value
//       <button onClick={() => navigate(item.slug)}></button>
//        </li>
//     ) : null
//   )}
// </ul>;

