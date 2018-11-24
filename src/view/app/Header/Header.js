import React from 'react';

const Header = () => {
    return (

  <nav>
  <div className="nav-wrapper">
    <ul className="right hide-on-med-and-down">
      {/* <li><a href="sass.html"><i className="material-icons">search</i></a></li> */}
      <li><a><i className="material-icons">view_module</i></a></li>
      <li><a><i className="material-icons">refresh</i></a></li>
    </ul>
  </div>
</nav>
    )
}

export { Header }