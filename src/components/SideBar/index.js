import React from "react";
import Shadow from "../General/Shadow";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";

const SideBar = (props) => {
    let classes = [css.Sidebar, css.Close];

    if(props.showSidebar) classes = [css.Sidebar, css.Open];

    return (
        <div>
            <Shadow 
                show={props.showSidebar}
                onClick={props.toggleSideBar}
            />
            <div onClick={props.toggleSideBar} className={classes.join(" ")}>
                    <div className={css.Logo}>
                        <Logo/>
                    </div>
                    <Menu />
            </div>
        </div>
    );
};
 export default SideBar;