
import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let refNewPostText = React.createRef();
    let postElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)
    const addPost = () => {
        props.addPost();
    }
    const updatePostText = () => {
        let text = refNewPostText.current.value;
        props.updatePostText(text);
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