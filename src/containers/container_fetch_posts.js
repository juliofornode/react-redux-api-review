import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsFetched extends Component {

    componentWillMount() {
        this.props.fetchPosts();

    }

    displayPosts() {
        return this.props.posts.map(post => {
            return (
                <Link to={'posts/' + post.id}>
                    <li key={post.id}>{post.title}</li>
                </Link>
            );
        })
    }

    render() {
        return (
            <div>
                <p><strong>List of posts:</strong></p>
                {this.displayPosts()}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        posts: state.postsFetched.all
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsFetched);