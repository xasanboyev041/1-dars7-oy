import React from "react";
import UserList from "../components/UserList";
import "../styles/Home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-title">Home Page</h1>
      <UserList />
    </div>
  );
};

export default HomePage;

