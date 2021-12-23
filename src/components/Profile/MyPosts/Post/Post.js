import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.img} alt=""/>
            <div>
                <span>{props.text}</span>
            </div>
        </div>
    )

}

export default Post;