import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component  {
    
    render() {
        return (
            <Header {...this.props}/>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profile: state.profilePage.profile
    }
};

export default connect(mapStateToProps, {logout})(HeaderContainer);