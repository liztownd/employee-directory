import React from 'react';


function Header() {
    return (
        <div className="jumbotron jumbotron-fluid bg-secondary border-bottom border-alert">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">Click a table header to sort, or use search to filter the list.</p>
        </div>
      </div>
    )
};

export default Header;