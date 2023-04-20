import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
                newPostText={props.newPostText}
                 />
        </div>

    )
}

export default Profile;