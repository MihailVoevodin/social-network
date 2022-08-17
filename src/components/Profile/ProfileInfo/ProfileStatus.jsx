import React, { useEffect } from "react";
import { useState } from "react";

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
        { editMode
        ? <div>
            <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
            </div>
        : <div>
            <span onDoubleClick={activateEditMode}>{props.status || 'write your status'}</span>
            </div> 
        }
        </>
    )
}

export default ProfileStatus;