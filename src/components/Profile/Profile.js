import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6s8SUWJ9Vr681FKY0JlN1ve-CV13jYvEAZQ&usqp=CAU"
                    alt=""/>
            </div>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    )

}

export default Profile;