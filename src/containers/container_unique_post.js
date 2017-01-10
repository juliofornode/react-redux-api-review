import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOnePost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class UniquePost extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchOnePost(this.props.params.id);
    }

    handleClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push('/posts');
            })
    }

    render() {
        if(!this.props.post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button className="btn btn-danger" onClick={this.handleClick.bind(this)}>Delete</button>
                <p>This is a unique blog post with the id: {this.props.params.id}</p>
                <p>And this is the post title: {this.props.post.title}</p>
            </div>

        );
    }

}


function mapStateToProps(state) {
    return {
        post: state.postsFetched.post
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchOnePost: fetchOnePost, deletePost: deletePost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UniquePost);