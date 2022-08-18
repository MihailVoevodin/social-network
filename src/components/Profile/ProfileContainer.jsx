import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from 'react-router-dom';
import { getProfile, getUserStatus, updateUserStatus, uploadPhoto, saveProfilePhoto, saveProfile } from "../../redux/profileReducer"
import Profile from "./Profile";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
}

class ProfileContainer extends React.Component {
    
    getProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.getProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getProfile()
        }
    }

    render() {   
        return(
            <Profile    {...this.props} 
                        profile={this.props.profile} 
                        status={this.props.status} 
                        updateUserStatus={this.props.updateUserStatus}
                        isOwner={!this.props.match.params.userId}
                        uploadPhoto={this.props.uploadPhoto}
                        saveProfile={this.props.saveProfile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus, uploadPhoto, saveProfilePhoto, saveProfile}),
    withAuthRedirect)(ProfileContainer)