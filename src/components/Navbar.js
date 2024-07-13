import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
        {/* data-bs-theme="dark" to make dark-theme in navbar */}
        <div className="container-fluid" >
          <h1 className="navbar-brand" href="/" >
            {props.title}
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
// Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired };
// This navbar proptypes is required to ensure that you pass expected type of values, is Required is when you want them to Pass and give error if they do not pass
// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'My about here'
// }; // will be removed in future so not using now
//Default props are when even if not passed the component will recieve default props, not when you do pass
