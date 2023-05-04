
import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostCreator, updatePostTextCreator } from '../../redux/state';

const MyPosts = (props) => {
    let posts = props.state.profilePage.posts;
    let postElements = posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)
    
    const addPost = () => {
        props.dispatch( addPostCreator() ) 
    }

    let refNewPostText = React.createRef();
    const updatePostText = () => {
        let text = refNewPostText.current.value;
        props.dispatch( updatePostTextCreator(text) );
    }
    return (
        <div className={style.myposts}>
            <h4>My posts</h4>
            <textarea onChange={updatePostText} ref={refNewPostText} />
            <button onClick={addPost}> Add post</button>
            {postElements}
        </div>
    )
}
export default MyPosts;