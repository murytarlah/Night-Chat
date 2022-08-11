import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import React from "react";

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>
                        <span>
                            Fast <br />
                        </span>{" "}
                        Easy and <br />
                        Relaible
                    </h1>
                    <div className={styles.heroContent__body}>
                        <p>
                            Night chat is your plug for all your <br/> late night
                            chats, calls and unlimited <br/>connectivity all across
                            the world, eliminating the hassle of mobile
                            networks, poor overnight hitches. Now you’ve got no
                            limit.
                        </p>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/first page visual.png"
                        }
                        alt=""
                    />
                </div>
                <div className={styles.heroCTA}>
                    <form className={styles.heroForm}>
                        <label htmlFor="number">
                            <input type="tel" name="number" id="number" placeholder="(234)"/>
                        </label>
                        <input type="submit" value="Sign up" />
                    </form>
                    <p>Create a free account, already have an account, <span><NavLink to={'#'}>Sign in.</NavLink></span></p>
                </div>
            </div>
        </div>
    );
};

export default Header;
