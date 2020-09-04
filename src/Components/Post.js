import React from 'react';
import './Styles/Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div>
            <div className="post__header">
            <Avatar 
                className="post__avatar"
                alt="Ashish_hacker"
                src="/static.jpg"
            />
            <h3>Username</h3>
            </div>
            
            {/* {header -> avatar + username} */}

            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" 
                alt="react-logo" 
                className="post__image" />
            {/* image */}

            <h4 className="post__text"><strong>Hacker</strong>: WOW..I am awake at 3 am. cannot sleep and coding..wonderful</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post;
