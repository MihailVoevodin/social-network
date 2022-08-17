import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { useForm } from "react-hook-form";


const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const AddMessageForm = () => {
        const { register, handleSubmit, formState: { errors, isValid }  } = useForm({mode: 'onChange'});
        const onSubmit = data => {
            console.log(data);
            props.addMessage(data.message);
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <textarea {...register('message', { required: true })} placeholder="Text message"/>
                    <div>{errors.message && <span>{errors.message.message || 'Error!'}</span>}</div>
                </div>
                <button type="submit" disabled={!isValid}>Send message</button>
            </form>
        )
    }

    return (
        <div className={s.dialogs}>
            <div className={s.items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
                    <AddMessageForm />
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;