
 let state = {
    profile: {
        posts: [
            { message: "helllo", likesCount: "5", id: Math.random() },
            { message: "hehe", likesCount: "7", id: Math.random() }]
    },
    dialogs: {
        messages: [
            { id: "1", message: "lolol" }
        ]
    }
};

export let addPost = () => {
    let newPost = { message: newPostText, likesCount: "0", id: Math.random() };
    state.profile.posts.push(newPost);
    newPostText = "";
    rerenderEntireTree();
}

export let newPostText = "";
export const updatePostText = (text) => {
    newPostText = text;
    rerenderEntireTree();
};

let rerenderEntireTree = () => {
    console.log("State Changed");
}
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
} 

export default state;



