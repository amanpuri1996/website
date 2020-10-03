import React from 'react';
import {NavLink }from 'react-router-dom';
const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <NavLink to="/"  className="nav-brand" >Logo</NavLink>
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <NavLink to="/about" exact activeClassName="active" className="nav-link" >About Us</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to="/Services/aman" exact activeClassName="active" className="nav-link" >Services</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to="/userDummy" exact activeClassName="active" className="nav-link" >Users</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to="/contact" exact activeClassName="active" className="nav-link" >Contact Us</NavLink>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="index.html" id="navbardrop" data-toggle="dropdown">
                            Dropdown link
          </a>

                        <div class="dropdown-menu">

                            <a class="dropdown-item" href="Error.html">Link 1</a>
                            <a class="dropdown-item" href="Error.html">Link 2</a>
                            <a class="dropdown-item" href="Error.html">Link 3</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline mx-auto" >
    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
    <button className="btn btn-success" type="submit">Search</button>
  </form>

            </nav>

            <div class="container">
            </div>
        </>
    );
};
export default Header;