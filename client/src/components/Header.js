import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderLoginContent() {
    //console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return "Loading...";
      case false:
        return "Login with Google";
      default:
        return "Hello " + this.props.auth.emailId;
    }
  }

  render() {
    //console.log(this.props);
    return (
      //<div>Header</div>
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">{this.renderLoginContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
