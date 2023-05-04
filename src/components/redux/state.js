
export let store = {
    _state: {
        profilePage: {
            posts: [
                { message: "helllo", likesCount: "5", id: Math.random() },
                { message: "hehe", likesCount: "7", id: Math.random() },
                { message: "hoho", likesCount: "7", id: Math.random() }
            ],
            newPostText: ""
        },
        dialogsPage: {
            messages: [
                { id: "1", message: "lolo" },
                { id: "2", message: "hehe" },
                { id: "3", message: "hoho" }
            ],
            newMessageBody: ""
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = { message: this._state.profilePage.newPostText, likesCount: "0", id: Math.random() };
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = "";
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {id: 4, message: this._state.dialogsPage.newMessageBody};
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push(newMessage);
            this._callSubscriber(this._state);
        }
    },

    _callSubscriber() { },
    subscribe(observer) {
        this.callSubscriber = observer;
    }
};

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const addPostCreator = () => ({ type: ADD_POST });
export const updatePostTextCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text });
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });





