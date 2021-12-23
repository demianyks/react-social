import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>my posts
                <textarea placeholder={'some text'}> </textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div>
                <Post img={'http://scholar.google.com.ua/citations/images/avatar_scholar_256.png'}
                text={'lorem ipsum'}/>
                <Post img={'https://discord-server.com/images/discord-avatar-1.png'}
                text={'Discord app'}/>
                <Post img={'https://trashbox.ru/files/_avatar.png'}
                text={'somebody hear me?'}/>
            </div>
        </div>
    )

}

export default MyPosts;