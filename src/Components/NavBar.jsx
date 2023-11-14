import React from "react";
import {Link, NavLink} from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
          <img src="/pokeball.png" alt="Logo" width="24" height="24" className="d-inline-block align-text-top"/>
            {/* Pokedex */}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to={"/allPokemon"}>
                All Pokemon
              </NavLink>
              <NavLink className="nav-link" to={"/typeTable"}>
                type table
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
