import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LogoutBtn, Logo, container } from "./LogoutBtn";
import { Container } from "";

function Header() {
  // we will get the information of the user in authStatus
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  // Mow we will use an array for swifting in the naviagtion bar- At any time we can add as many as objects
  const navitems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },

    {
      name: "Login",
      slug: "/",
      active: !authStatus,
    },

    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },

    {
      name: "Add post",
      slug: "add-post",
      active: authStatus,
    },
  ];

  return (
    // Conditional rendering
    <header>
      <Container>
        <nav>

          <div>
            <Link>
              <Logo />
            </Link>
          </div>

          <div>
            <ul>
              {navitems.map((item) =>
                item.active ? (
                  <li>
                    {/* To siplay the name of naviagtion component */}
                    {item.name}
                    {/*To travel by the navigation component when user will click on it  */}
                    <button onClick={() => navigate(item.slug)}></button>
                  </li>
                ) : null
              )}

              {/* Now if the user is logged in then display the logout btn  */}
              <div>
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </div>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
