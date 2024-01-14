import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import "./Navigation.scss";
import logo from "../../content/images/logo_200x200.png";

import userStore from "../../stores/loginStore";
import usePreferenceStore from "../../stores/preferenceStore";

export default function Navigation() {
  const { authToken, setAuthState, logout } = userStore();
  const { theme } = usePreferenceStore();
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    checkLoggedInUser();
  }, []);
  
  const checkLoggedInUser = () => {
    const storedAuthToken = localStorage.getItem("authToken")
    if (storedAuthToken) {
      setAuthState(storedAuthToken);
    } else {
      setAuthState(null);
    }
  };

  const toggleDropdownMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleLogoutClick = () => {
    logout();
    // window.location.href = "/login"
  };
  
  return (
    <nav className={`${theme === 'dark' ? 'nav--dark' : "nav"}`}>
      <div className="nav-wrap">
        <div className="navigation-logo">
          <Link className="navigation-link" to="/">
            <img
              className="navigation-logo__img"
              src={logo}
              alt="Webdock logo"
            />
            <div className="navigation-logo__company-name">Webdock.io</div>
          </Link>

        </div>
  
        {
          authToken &&
          <>
            <ul className="menu-items">
              <li>
                <Link className={`${theme === 'dark' ? 'menu-items__profile--dark' : 'menu-items__profile'}`} to={'/settings'} />
              </li>

              <li onClick={handleLogoutClick}>
                <Link className={`${theme === 'dark' ? 'menu-items__log-out--dark' : 'menu-items__log-out'}`} />
              </li>
            </ul>
          </>
        }

        {!authToken &&
          <Link className="nav-button-container" to={'/login'}>
            <button className="nav-button-container__log-in">Log In</button>
          </Link>
        }

        <div className="burger-menu-icon">
          <Hamburger
            direction="left"
            toggled={isOpen}
            toggle={toggleDropdownMenu}
            rounded
          />
        </div>

        {isOpen && (
          <>
            <div className="dark-backdrop" />
            <div className="nav-dropdown-menu">
              <ul className="nav-dropdown-menu__items">

                <li>
                  <Link className="nav-dropdown-menu__items__flex" onClick={logout}>
                    <p>Log Out</p>
                    <span className="menu-items__log-out"></span>
                  </Link> 
                </li>         

                <li>
                  <Link className="nav-dropdown-menu__items__flex" to="/">
                    <p>Profile</p>
                    <span className="menu-items__profile"></span>
                  </Link>
                </li>

              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
