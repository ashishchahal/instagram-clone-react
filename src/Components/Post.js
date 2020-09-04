import React from 'react';
import './Styles/Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className="post">
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToxjpNRTS8lgTN2AFMdpsBwvF5zguP2PJL-g&usqp=CAU" 
                alt="react-logo" 
                className="post__image" />
            {/* image */}

            <h4 className="post__text"><strong>Hacker</strong>: WOW..I am awake at 3 am. cannot sleep and coding..wonderful</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post;
