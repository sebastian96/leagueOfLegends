import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchChamp, searchChampTag } from "../actions";
import logo from "../assets/static/images/logo.png";
import "../assets/styles/components/Header.scss";

const Header = ({ searchChamp, searchChampTag, route }) => {
  const items = [
    {
      value: "All",
      label: "Todos",
    },
    {
      value: "Assassin",
      label: "Asesinos",
    },
    {
      value: "Fighter",
      label: "Luchadores",
    },
    {
      value: "Mage",
      label: "Magos",
    },
    {
      value: "Marksman",
      label: "Tiradores",
    },
    {
      value: "Support",
      label: "Soportes",
    },
    {
      value: "Tank",
      label: "Tanques",
    },
  ];

  const handleSearch = (event) => {
    if (event.target) {
      searchChamp(event.target.value);
    } else {
      searchChampTag(event);
    }
  };

  const changeTheme = (e) => {
    e.preventDefault();
    const body = document.querySelector("body").classList;
    const btnTheme = document.querySelector("button .fa-solid").classList;

    if (body.contains("dark") && btnTheme.contains("fa-sun")) {
      body.add("ligth");
      body.remove("dark");
      btnTheme.remove("fa-sun");
      btnTheme.add("fa-moon");
    } else {
      body.add("dark");
      body.remove("ligth");
      btnTheme.remove("fa-moon");
      btnTheme.add("fa-sun");
    }
  };

  const openMenu = () => {
    const menu = document.querySelector(".filters");
    menu.style.right = "0";
  };

  const closeMenu = () => {
    const menu = document.querySelector(".filters");
    menu.style.right = "-307px";
  };

  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark justify-content-between">
        <Link to="/leagueOfLegends/" className="navbar-brand mr-auto">
          <img
            className="navbar-brand-img"
            src={logo}
            alt="logo league of legends"
          />
        </Link>
        <button className="navbar-toggler" id="open_menu" onClick={openMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="filters">
          <button
            className="close_icon"
            id="close_menu"
            type="button"
            onClick={closeMenu}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          {["/leagueOfLegends", "/leagueOfLegends/"].includes(
            route.pathname
          ) && (
            <>
              <ul className="nav nav-pills">
                {items.map((item, i) => (
                  <li className="nav-item mr-2" key={i}>
                    <button
                      className="btn menu"
                      onClick={() => handleSearch(item.value)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <form className="form-inline ml-auto">
                <input
                  className="search_input"
                  type="text"
                  id="search"
                  placeholder="Encuentra tu campeón"
                  onChange={handleSearch}
                />
              </form>
            </>
          )}
          <button
            className="btn change_theme"
            id="change_theme"
            onClick={changeTheme}
          >
            <i className="fa-solid fa-sun"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

const mapDispatchToProps = {
  searchChamp,
  searchChampTag,
};

export default connect(null, mapDispatchToProps)(Header);
