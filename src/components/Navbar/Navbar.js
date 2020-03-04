import React, { Component } from 'react';
import './Navbar.css';
// import logo from '../../images/logo.png';
import { GoThreeBars as Hamburger } from "react-icons/go";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" className="text-link">
                            <div className="logo-div">
                                <p className="logo-text">Tim Stark</p>
                            </div>
                            {/* <img src={logo} alt="logo" style={{ width: "250px", height: "auto" }} /> */}
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <Hamburger className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div >
            </nav >
        );
    }
}