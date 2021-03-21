import React from "react";
import "../styles/BrowserDashboard.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import BragLogo from "../components/BragLogo";
import HomeSvg from "../assets/HomeSvg";
import YouSvg from "../assets/YouSvg";
import DiscoverSvg from "../assets/DiscoverSvg";
import BookmarkedSvg from "../assets/BookmarkedSvg";
import NewBrag from "../assets/NewBrag";

function BrowserDashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="browserDashboard">
      <div className="browserDashboard__sideBar">
        <BragLogo />
        <div className="browserDashboard__sideBar-tabs">
          <div className="browserDashboard__sideBar-tab">
            <HomeSvg />
            <h2 className="browserDashboard__sideBar-tabName">Home</h2>
          </div>
          <div className="browserDashboard__sideBar-tab">
            <YouSvg />
            <h2 className="browserDashboard__sideBar-tabName">You</h2>
          </div>
          <div className="browserDashboard__sideBar-tab">
            <DiscoverSvg />
            <h2 className="browserDashboard__sideBar-tabName">Discover</h2>
          </div>
          <div className="browserDashboard__sideBar-tab">
            <BookmarkedSvg />
            <h2 className="browserDashboard__sideBar-tabName">Bookmarked</h2>
          </div>
        </div>
        <div className="browserDashboard__sideBar-newBrag">
          <NewBrag />
        </div>
        <div className="browserDashboard__sideBar-profile-container">
          <div className="browserDashboard__sideBar-profile">
            {console.log(currentUser)}
            <img
              src={currentUser?.photoURL}
              alt="profile-pic"
              className="browserDashboard__sideBar-profileImg"
            />
            <div
              className="browserDashboard__sideBar-profileDetails"
              onClick={handleLogout}
            >
              <h2>{currentUser?.displayName}</h2>
              <h5>{currentUser?.email}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="browserDashboard__main"></div>
      <div className="browserDashboard__trendingContainer">
        <div className="browserDashboard__trending"></div>
      </div>
    </div>
  );
}

export default BrowserDashboard;
