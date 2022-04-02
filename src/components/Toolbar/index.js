import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import styles from "./style.module.css";
const Toolbar = () => (
    <header className={styles.Toolbar}>
        <div>...</div>
        <Logo/>
        <nav className={styles.HideOnMobile}> 
            <Menu />
        </nav>
    </header>
);
export default Toolbar;