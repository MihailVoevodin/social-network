import React from 'react'

const ProfileData = (props) => {
    return (
        <div>
            <div>Login: {props.profile.fullName}</div>
            <div>lookingForAJob: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
            <div>My skills: {props.profile.lookingForAJobDescription}</div>
            <div>Contacts: {Object.keys(props.profile.contacts).map(key => {
                // if (props.profile.contacts[key]) {
                    let newKey = key[0].toUpperCase() + key.slice(1)
                    return <Contact key={key} contactTitle={newKey} contactValue={props.profile.contacts[key]}/>
                // }
            })}</div>
            <div><button onClick={props.onEditMode}>Edit</button></div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        {contactTitle}: {contactValue}
    </div>
}

export default ProfileData;

