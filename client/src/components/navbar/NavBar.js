import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}

      <NavLink to="/">Home </NavLink><br></br>

      <NavLink to="/projects"> Projects </NavLink><br></br>

      <NavLink to="/users"> Users </NavLink><br></br>

      <NavLink to="/teams"> Teams </NavLink><br></br>

    </div>
  );
};

export default NavBar;
