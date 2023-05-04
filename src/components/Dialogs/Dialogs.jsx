import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/state";

const Dialogs = (props) => {

    let messages = props.state.dialogsPage.messages;
    let messageElements = messages.map(message => <Message key={message.id} body={message.message} /> )

    let onSendMessageClick = () => {
        props.dispatch (sendMessageCreator());
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch (updateNewMessageBodyCreator (body) );
    }

    return (
        <div className={style.dialogs}>
            
            <div>
            <DialogItem />
            </div>

            <div>
                <div>{messageElements}</div>
                <div><textarea 
                onChange={onMessageChange}
                placeholder="Enter smth" ></textarea></div>
                <div><button onClick={onSendMessageClick} >Send</button></div>
                
            </div>

        </div>
    )
}


export default Dialogs;