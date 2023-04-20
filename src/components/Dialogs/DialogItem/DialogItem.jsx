import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = () => {
    let path = "/dialogs" 
    return (<div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>Діалог</NavLink>
    </div>

    )
}

export default DialogItem;