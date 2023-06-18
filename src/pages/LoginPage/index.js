import React, {Component} from "react";
import Button from "../../components/General/Button";
import css from "./styles.module.css";
class Login extends Component{
    state = {
        email: "",
        password: ""
    };

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }
    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    login = () => {
        alert("login..." + this.state.email + " " + this.state.password)
    }
    render(){
        return(
            <div className={css.Login}>
            <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг"></input>
            <input onChange={this.changePassword} type="password" placeholder="Нууц үг"></input>
            <Button text="НЭВТРЭХ" btnType="Success" clicked={this.login}/>
        </div>
        ); 
    }
}
export default Login;