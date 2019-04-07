import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/profile-pic.css";

class Header extends Component {
  renderUserDropDownContent() {
    return (
      <li>
        <a href="/api/logout">Logoutt</a>
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
        return (
          <div>
            <li>
              <a href="/surveys">Dashboard</a>
            </li>
            <li>
              <a href="/surveys/new">New Survey</a>
            </li>
            <li>
              <img
                className="img_circle"
                src={this.props.auth.profilePic}
                alt="Avatar"
              />
            </li>
            {this.renderUserDropDownContent()}
          </div>
        );
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
