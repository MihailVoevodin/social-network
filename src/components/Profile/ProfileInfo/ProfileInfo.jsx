import React, { useState } from "react";
import Spinner from "../../../Common/Spinner/Spinner";
import ProfileStatus from "./ProfileStatus"
import s from './ProfileInfo.module.css';
import ProfileData from "../ProfileData/ProfileData";
import ProfileEditForm from "../ProfileEditForm/ProfileEditForm";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return (
            <Spinner/>
        )
    }

    const onPhotoUpload = (e) => {
        if (e.target.files.length) {
            props.uploadPhoto(e.target.files[0]);
        }
    }

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlz9IWFjM5BEPjO7VyUvKzk89Wfvmn6_bDw&usqp=CAU'} alt="" />
                {props.isOwner && <input type="file" onChange={onPhotoUpload}></input>}
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                {editMode ? <ProfileEditForm offEditMode={offEditMode} saveProfile={props.saveProfile}/> : <ProfileData profile={props.profile} isOwner={props.isOwner} onEditMode={onEditMode}/>}
                
            </div>
        </div>
    )
}

export default ProfileInfo;