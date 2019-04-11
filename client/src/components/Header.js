import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/profile-pic.css";
import Payments from "./Payments.js";

class Header extends Component {
  renderUserDropDownContent() {
    return (
      <li>
        <a href="/api/logout">Logout</a>
      </li>
    );
  }

  renderLoginContent() {
    switch (this.props.auth) {
      case null:
        return "Loading...";
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        //return "Hello " + this.props.auth.emailId;
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2">
            <Link to="/surveys">Dashboard</Link>
          </li>,
          <li key="3">
            <Link to="/surveys/new">New Survey</Link>
          </li>,
          <li key="4">
            <img
              className="img_circle"
              src={this.props.auth.profilePic}
              alt="Avatar"
            />
          </li>,
          <li key="5">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    //console.log(this.props);
    return (
      //<div>Header</div>
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right hide-on-med-and-down">
            {this.renderLoginContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
