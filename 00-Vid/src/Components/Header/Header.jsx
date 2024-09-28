import React from "react";
import { Link, NavLink } from "react-router-dom";
// we use link in place of a tag when we use a tag our page refreshes so we use link tag
// navlink provides us additional things - it prevents the whole page load
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as authlogout } from "../../Store/Authslice";
import { LogoutAPI } from "../../API/AuthAPI";
import { toast } from "react-toastify";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.status);
  // const authStatus = useSelector((state) => state.auth.status);

  const handlesignout = () => {
    LogoutAPI();
    dispatch(authlogout());
    navigate("/Login");
    toast.success("Logout done Succesfully");
  };

  const changetheme = () => {
    ColorMode();
  };

  return (
    <header className="shadow sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="px-4 lg:px-6 py-2.5 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap justify-between items-center">
          {/* nav leftmost section */}

          {/* logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* nav rightmost section */}

          <div className="flex items-center lg:order-2">
            {isLoggedIn ? (
              <>
                <Link
                  to="/Workspace"
                  // whenver you click on nav options so to go on that page and change color we use callback function as to write classname inside it
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                                       ${
                                         isActive
                                           ? "text-orange-400 "
                                           : "text-gray-700"
                                       } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Workspace
                </Link>


                <Link
                  to="/Login"
                  onClick={handlesignout}
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Signout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/Login"
                  className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log in
                </Link>

                <Link
                  to="/Register"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* nav middle section */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  //   it is necessary to tell link and navlink that wherever they are going on click
                  to="/"
                  // whenever you click on nav options so to go on that page and change color we use callback function so write classname inside it
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                                       ${
                                         isActive
                                           ? "text-orange-400 "
                                           : "text-gray-700"
                                       } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  // whenver you click on nav options so to go on that page and change color we use callback function as to write classname inside it
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                                       ${
                                         isActive
                                           ? "text-orange-400 "
                                           : "text-gray-700"
                                       } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  // whenver you click on nav options so to go on that page and change color we use callback function as to write classname inside it
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                                       ${
                                         isActive
                                           ? "text-orange-400 "
                                           : "text-gray-700"
                                       } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/github"
                  // whenver you click on nav options so to go on that page and change color we use callback function as to write classname inside it
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200
                                       ${
                                         isActive
                                           ? "text-orange-400 "
                                           : "text-gray-700"
                                       } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
