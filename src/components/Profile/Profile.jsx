import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo    profile={props.profile} 
                            status={props.status} 
                            updateUserStatus={props.updateUserStatus} 
                            isOwner={props.isOwner}
                            uploadPhoto={props.uploadPhoto}
                            saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;