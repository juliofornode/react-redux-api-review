import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import IndexComponent from './components/index_component';
import PostsFetched from './containers/container_fetch_posts';
import NewPost from './containers/container_post_new';
import UniquePost from './containers/container_unique_post';

const OneComponent = () => {
    return <div>One Component</div>
};


export default(
    <Route path="/" component={App}>
        <IndexRoute component={IndexComponent} />
        <Route path="one" component={OneComponent} />
        <Route path="posts" component={PostsFetched} />
        <Route path="posts/new" component={NewPost} />
        <Route path="posts/:id" component={UniquePost} />
    </Route>
);
