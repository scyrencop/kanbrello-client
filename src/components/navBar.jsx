import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="uk-navbar-container uk-margin" data-uk-navbar="true">
          <div className="uk-navbar-left ">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a className="uk-navbar-item " href="http#">
                  <span data-uk-icon="home" />
                </a>
              </li>
              <li>
                <a href="htt" data-uk-toggle="target: #boards-off-canvas">
                  <span data-uk-icon="grid" />
                  Boards
                </a>
              </li>
              <li>
                <div>
                  <a class="uk-navbar-toggle" data-uk-search-icon href="#" />
                  <div
                    class="uk-drop"
                    uk-drop="mode: click; pos: left-center; offset: 0"
                  >
                    <form class="uk-search uk-search-navbar uk-width-1-1">
                      <input
                        class="uk-search-input"
                        type="search"
                        placeholder="Find Bords by name ..."
                        autofocus
                      />
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="uk-navbar-center">
            <a className="uk-navbar-item uk-logo" href="#">
              kanbrello
            </a>
          </div>
          <div className="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li class="uk-active">
                <a href="#">Active</a>
              </li>
              <li>
                <a href="#">Parent</a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-active">
                      <a href="#">Active</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
            </ul>
          </div>
        </nav>
        <div
          id="boards-off-canvas"
          data-uk-offcanvas="mode: push; overlay: true"
        >
          <div className="uk-offcanvas-bar">
            <button
              className="uk-offcanvas-close"
              type="button"
              data-uk-close="true"
            />

            <form className="uk-search uk-search-navbar">
              <input
                className="uk-search-input"
                type="search"
                placeholder="Find boards by name"
              />
              <hr />
              <ul data-uk-accordion="true">
                <li className="uk-open">
                  <a className="uk-accordion-title" href="#">
                    <span data-uk-icon="star" /> Starred Boards
                  </a>
                  <div className="uk-accordion-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
                <li>
                  <a className="uk-accordion-title" href="#">
                    <span data-uk-icon="thumbnails" /> Personal Boards
                  </a>
                  <div className="uk-accordion-content">
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor reprehenderit.
                    </p>
                  </div>
                </li>
                <li>
                  <a className="uk-accordion-title" href="#">
                    <span data-uk-icon="users" /> test
                  </a>
                  <div className="uk-accordion-content">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat proident.
                    </p>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
