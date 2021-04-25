import React from 'react';
import './header.css'


function Header() {
    return (
      <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">Click button to sort by name, or use search to filter the list.</p>
        </div>
      </div>
      </div>
    )
};

export default Header;