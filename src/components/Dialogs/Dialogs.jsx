import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
            <DialogItem />
            </div>

            <div className={style.messages}>
            <Message />
                <textarea></textarea>
                <button>Send</button>
            </div>


        </div>
    )
}


export default Dialogs;