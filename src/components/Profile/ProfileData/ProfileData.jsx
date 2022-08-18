import React from 'react'
import { Card, Button } from 'antd';

const ProfileData = (props) => {
    return (
        <div>
            <Card title="About me:">
                <div>Login: {props.profile.fullName}</div>
                <div>Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
                <div>My skills: {props.profile.lookingForAJobDescription}</div>
                <div>{props.profile.aboutMe}</div>
            </Card>
            <Card title="Contacts:">
                {Object.keys(props.profile.contacts).map(key => {
                    if (props.profile.contacts[key]) {
                        let newKey = key[0].toUpperCase() + key.slice(1)
                        return <Contact key={key} contactTitle={newKey} contactValue={props.profile.contacts[key]}/>
                    }
                })}
            </Card>
            <div><Button size="small" onClick={props.onEditMode}>Edit</Button></div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        {contactTitle}: <a href={contactValue}>{contactValue}</a>
    </div>
}

export default ProfileData;

