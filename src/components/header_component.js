import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <ul className="nav nav-pills">
                <li role="presentation" className="active"><a href="/">Index</a></li>
                <li role="presentation"><a href="/one">Page One</a></li>
                <li role="presentation"><a href="/posts">Posts</a></li>
                <li role="presentation"><a href="/posts/new">New Post</a></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;