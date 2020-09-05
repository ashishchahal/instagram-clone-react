import React from 'react';
import './Styles/Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({username, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar 
                className="post__avatar"
                alt={username}
                src="/static.jpg"
            />
            <h3>{username}</h3>
            </div>
            
            {/* {header -> avatar + username} */}

            <img 
                src={imageUrl}
                alt="react-logo" 
                className="post__image" />
            {/* image */}

            <h4 className="post__text"><strong>{username}</strong>{caption}</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post;
