import React from 'react';
import classes from './searchfooter.module.css';

function Footer() {
    return (
    <div className={classes.footercontainer}>
        
      <div className={classes['footer-section']} >
        <div className={classes['logo-section']}>
          <img src="logo.png" alt="Logo" className={`${classes.logo} ${classes['mb-15']}`} />
          <p className={classes['mb-10']}>221 B Santa Monica, Los Angeles</p>
          <p className={classes['mb-10']}>(+1) 923 2341 22</p>
          <p className={classes['mb-10']}>Contact@tanahairstudio.com</p>
          {/* <p className={classes['mb-10']}>@2020 TanahAir Studio. All rights reserved.</p> */}
        </div>
        <div className={classes['categories-section']}>
          <h4>Categories</h4>
          <ul>
            <li className={classes['mb-20']}>Dairy & Milk</li>
            <li className={classes['mb-20']}>Fresh Produce</li>
            <li className={classes['mb-20']}>Meat</li>
            <li className={classes['mb-20']}>Snacks</li>
            <li className={classes['mb-20']}>Frozen</li>
            <li className={classes['mb-20']}>Vegetables</li>
          </ul>
        </div>
        <div className={classes['company-section']}>
          <h4>Company</h4>
          <ul>
            <li className={classes['mb-30']}>About Us</li>
            <li className={classes['mb-30']}>Contact Us</li>
            <li className={classes['mb-30']}>Privacy & Policy</li>
            <li className={classes['mb-30']}>Payment Method</li>
          </ul>
        </div>
        <div className={classes['newsletter-section']}>
          <h4>Join Our Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;