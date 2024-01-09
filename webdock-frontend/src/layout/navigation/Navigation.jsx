import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./Navigation.scss";
import logo from "../../content/images/logo_200x200.png";
import userStore from "../../stores/loginStore";
import NotificationDropdown from "../../components/NotificationDropdown/NotificationDropdown";
import fetchAllNotifications from "../../services/fetchAllNotifications";
import useNotificationArrayStore from "../../stores/notificationStore";

export default function Navigation() {
  const { logout } = userStore()
  const [isOpen, setIsOpen] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false)
  const [notificationArrayData, setNotificationArrayData] = useState([])
  const user = localStorage.getItem("user")
  const { setNotificationStore } = useNotificationArrayStore()

  const toggleDropdownMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  
  const handleLogoutClick = () => {
    logout();
  };
  
  const toggleNotificationDropdown = () => [
    setNotificationDropdown(!notificationDropdown),
  ]

  useEffect(() => {
    const fetchNotifications = async () => {
      const parsedUser = JSON.parse(user)

      try {
        const fetchedData = await fetchAllNotifications(parsedUser.id);
        setNotificationArrayData(fetchedData)
        setNotificationStore(fetchedData)
        console.log(fetchedData);
      } catch (error) {
        console.error('Error setting state:', error);
      }
    };
    fetchNotifications();
  }, []); 

  return (
    <nav>
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
          user &&
          <>
            <ul className="menu-items">
              <li className="navigation-list-item" onClick={toggleNotificationDropdown}>
                <Link className="menu-items__globe" />
                {
                  notificationDropdown && (
                    <NotificationDropdown 
                      NotificationArray={notificationArrayData}
                    />
                  )
                }
              </li>

              <li className="navigation-list-item">
                <Link className="menu-items__profile" />
              </li>

              <li className="navigation-list-item" onClick={handleLogoutClick}>
                <Link className="menu-items__log-out" />
              </li>
            </ul>
          </>
        }

        {!user &&
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
