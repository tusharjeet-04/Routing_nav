import React from "react";
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>
        List of Our Users
      </h1>
      <ul>
        <li>
          <Link to="userName/1" className="user">User 1</Link>
          <Link to="userName/2" className="user">User 2</Link>
          <Link to="userName/3" className="user">User 3</Link>
          <Link to="userName/4" className="user">User 4</Link>
          <Link to="userName/5" className="user">User 5</Link>
          <Link to="userName/6" className="user">User 6</Link>
          <Link to="userName/7" className="user">User 7</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;