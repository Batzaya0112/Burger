import React from "react";
import Shadow from "../General/Shadow";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";

const SideBar = (props) => {
    let classes = [css.Sidebar, css.Close];
    return (
        <div>
            <Shadow show={props.showSidebar}/>
            <div className={classes.join(" ")}>
                    <div className={css.Logo}>
                        <Logo/>
                    </div>
                    <Menu />
            </div>
        </div>
    );
};
 export default SideBar;