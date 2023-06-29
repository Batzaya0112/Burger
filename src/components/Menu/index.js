import React, {Fragment} from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
import {connect} from "react-redux";
const Menu = (props) => (
    <div>
        <ul className={css.Menu}>
                <MenuItem exact link="/">ШИНЭ ЗАХИАЛГА</MenuItem>
                <MenuItem link="/orders">ЗАХИАЛГА</MenuItem>
                {props.userId ? (
                        <MenuItem link="/logout">ГАРАХ</MenuItem>
                    ):(
                        <Fragment>
                            <MenuItem link="/login">НЭВТРЭХ</MenuItem>
                            <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
                        </Fragment>)
                }
                
              
        </ul>
    </div>
);
const mapStateToProps  = (state) => {
    return {
        userId: state.signupReducer.userId
    };
};
export default connect(mapStateToProps)(Menu);