import React from 'react';
import "./searchbody.module.css";

function SearchBody() {
  return (
    <div id="hodu">
      <h1>We know what a home is really worth</h1>
      <h3>We know what a home is really worth</h3>
      <div id="centers">
        <ul>
          <li><a href="">For sale</a></li>
          <li><a href="">to rent</a></li>
          <li><a href="">House prices </a></li>
        </ul>
        <div className="line"></div>
        <p>Enter location</p>
        <div id="sear">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="e.g. Oxford or NW3"
          />
          <button className="search-button">
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBody;