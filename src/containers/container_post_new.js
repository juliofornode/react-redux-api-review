import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { bindActionCreators } from 'redux';


class NewPost extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                this.context.router.push('/');
             })
    }

    render() {
        //redux-form gives us all these props:
        const handleSubmit = this.props.handleSubmit;
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div>
                    <label htmlFor="title">title</label>
                    /* we use destructuring to pass all properties and values of the object title to the input tag */
                    <input type="text" {...title} />
                    <div className="text-help">{title.error}</div>
                </div>
                <div>
                    <label htmlFor="categories">categories</label>
                    <input type="text" {...categories} />
                </div>
                <div>
                    <label htmlFor="content">content</label>
                    <input type="text" {...content} />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}


function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a valid title';
    }

    return errors;
}

//reduxForm is like connect, but with the additional parameter defining the form.

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createPost: createPost }, dispatch);
}

NewPost = reduxForm({
    form: 'NewPostForm',
    fields: ['title', 'categories', 'content'],
    validate: validate
}, null, mapDispatchToProps)(NewPost);

export default NewPost;