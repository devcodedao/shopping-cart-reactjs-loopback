import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
    render() {
        return (
            <div id="login-page">
                <div class="container">
                    <form class="form-login" action="index.html">
                        <h2 class="form-login-heading">sign in now</h2>
                        <div class="login-wrap">
                            <input type="text" class="form-control" placeholder="User ID" autofocus />

                            <input type="password" class="form-control" placeholder="Password" />
                            <label class="checkbox">
                                <input type="checkbox" value="remember-me" /> Remember me
                                    <span class="pull-right">
                                    <a data-toggle="modal" href="login.html#myModal"> Forgot Password?</a>
                                </span>
                            </label>
                            <button class="btn btn-theme btn-block" href="index.html" type="submit"><i class="fa fa-lock"></i> SIGN IN</button>



                        </div>
                        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h4 class="modal-title">Forgot Password ?</h4>
                                    </div>
                                    <div class="modal-body">
                                        <p>Enter your e-mail address below to reset your password.</p>
                                        <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix" />
                                    </div>
                                    <div class="modal-footer">
                                        <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
                                        <button class="btn btn-theme" type="button">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;