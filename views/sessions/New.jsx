const React = require("react");

class LoginUser extends React.Component {
    render() {
        return (
         
            <div>
                <h1>WELCOME TO YANKS HOMEBREW GUIDE PLEASE SIGN IN</h1>
                <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-vector-hand-drawn-beer-drink-drink-banner-image_176756.jpg"></img>
                <h1>Login</h1>
                <form action="/sessions/" method="POST">
                    username: <input type="text" name="username" />
                    <br />
                    password: <input type="password" name="password" />
                    <br />
                    <input type="submit" name="" value="Login" />
                </form>
                <a href='/user/new'>New User? Click Here!</a>
            </div>
            
        );
    }
}

module.exports = LoginUser;