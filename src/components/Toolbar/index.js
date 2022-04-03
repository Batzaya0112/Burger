import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import Logo from "../Logo";
import Menu from "../Menu";
import styles from "./style.module.css";
const Toolbar = (props) => (
    <header className={styles.Toolbar}>
        <HamburgerMenu toggleSideBar={props.toggleSideBar} />
        <Logo/>
        <nav className={styles.HideOnMobile}> 
            <Menu />
        </nav>
    </header>
);
export default Toolbar;