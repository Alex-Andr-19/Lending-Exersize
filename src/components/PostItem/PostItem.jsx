import React from 'react'

import './PostItem.css'

export default function PostItem(props) {
    return (
        <div className="post">
            <img src={"./posts_img/"+props.post.photo} alt="" />
            <div className="tag">{props.post.tag}</div>
            <div className="title">{props.post.title}</div>
            <div className="info-tab">
                <div className="author">{props.post.author}</div>
                <div className="space"></div>
                <div className="date">{props.post.date}</div>
                <div className="space"></div>
                <div className="views">{props.post.views} Views</div>
            </div>
            <div className="content">{props.post.content}</div>
        </div>
    );
}