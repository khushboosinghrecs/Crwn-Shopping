import React from "react";
import "./Homepage.styles.scss"
const Homepage = ()=>{
    return(
    <div className="homepage">
    <div className="directory-menu">
        <div className="menu-item">
            <div className="content">
               <h1 className="title">HATS</h1>
               <span className="subtitle">Shop Now</span>
            </div>
        </div>
        </div>
        <div className="directory-menu">
        <div className="menu-item">
            <div className="content">
               <h1 className="title">JACKETS</h1>
               <span className="subtitle">Shop Now</span>
            </div>
        </div>
        </div>
        <div className="directory-menu">
        <div className="menu-item">
            <div className="content">
               <h1 className="title">SWEATERS</h1>
               <span className="subtitle">Shop Now</span>
            </div>
        </div>
        </div>
        <div className="directory-menu">
        <div className="menu-item">
            <div className="content">
               <h1 className="title">MEN</h1>
               <span className="subtitle">Shop Now</span>
            </div>
        </div>
        </div>
        <div className="directory-menu">
        <div className="menu-item">
            <div className="content">
               <h1 className="title">WOMEN</h1>
               <span className="subtitle">Shop Now</span>
            </div>
        </div>
    </div>
    </div>)
}

export default Homepage;