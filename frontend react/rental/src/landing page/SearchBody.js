import React from 'react';
import classes from './searchbody.module.css';

function SearchBody() {
  return (
    <div
      className={classes.hodu}
    
    >
      <h1>We know what a home is really worth</h1>
      <h3>We know what a home is really worth</h3>
      <div className={classes.centers}>
        <ul>
          <li><a href="">For sale</a></li>
          <li><a href="">to rent</a></li>
          <li><a href="">House prices </a></li>
        </ul>
        <div className={classes.line}></div>
        <p>Enter location</p>
        <div className={classes.sear}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="e.g. Oxford or NW3"
          />
          <button className={classes['search-button']}>
  <i className="fas fa-search"></i> Search
</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBody;
