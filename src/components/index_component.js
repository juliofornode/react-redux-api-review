import React from 'react';

const IndexComponent = () => {
    return (
        <div style={{marginTop: '30'}}>
            <p><strong>Redux API review</strong></p>
            <ol>
                <li>Load axios and redux-promise modules.</li>
                <li>Import redux-promise as middleware in index.js</li>
                <li>Import axios to create the fetch_data action creator in actions/index</li>
                <li>When creating the associate reducer, think carful about the state's structure.</li>
                <li>In this example, the state will be an object with two properties: all posts (an array
                    of posts title and category. We could have it like null, but by saying it is an array
                    we let our intent clear to other potential developers that review our application),
                    and the current post (initially null).</li>
                <li>Will need to use the method ComponentWillMount() to fetch data when page loads.</li>
                <li>Inside ComponentWillMount(), we will call the actionCreator that fetches the data.</li>
            </ol>
            <p style={{marginTop: '30'}}><strong>Form management: redux-form</strong></p>
            <ol>
                <li>We will use redux-form to handle the user input.</li>
                <li>The redux-form module gives us several props to use in our component and action.</li>
                <li>We will pass the form props to the action creator that handles the ajax post with axios.</li>
                <li>Then we import the action in the component and associate the createPost action with the
                    form's handleSubmit.</li>
            </ol>
            <p style={{marginTop: '30'}}><strong>Form validation: redux-form</strong></p>
            <ol>
                <li>Create a validate function and define it in the redux-form configuration function.</li>
                <li>Create an errors object defining validation errors for the files to validate.</li>
                <li>Include the error messages in the form with the class text-help.</li>
            </ol>
            <p style={{marginTop: '30'}}><strong>Navigation after form submit: routers' context</strong></p>
            <ol>
                <li>To redirect the user after he submits the form, we will use the push method provided
                by the router.</li>
                <li>In order to do that, we have to access the router via what is called the context.</li>
                <li>The context is an object we create in our component that references the router.</li>
                <li>Then we use this.context.router.push(url) to redirect after the createPost action is called.</li>

            </ol>
            <p style={{marginTop: '30'}}><strong>Display list of posts</strong></p>
            <ol>
                <li>Use mapStateToProps to connect with state.postsFetched.all and then use the regular approach
                    with map.</li>

            </ol>
            <p style={{marginTop: '30'}}><strong>Dynamic links: tokens in path</strong></p>
            <ol>
                <li>Use posts/:id as the path defined in routes to set the page of each unique blog post.</li>]
                <li>That creates the new prop this.props.params.id</li>

            </ol>
            <p style={{marginTop: '30'}}><strong>Displaying one unique blog post.</strong></p>
            <ol>
                <li>Careful: use the same reducer that we use to fetch all blog posts.</li>]
                <li>Create a new action creator with the new axios request.</li>
                <li>Add the new action type in the switch of the reducer.</li>
                <li>Pre-load the data in the components using componentWillMount().</li>
                <li>Use mapStateToProps and mapDispatchToProps as usual.</li>

            </ol>
            <p style={{marginTop: '30'}}><strong>Deleting a blog post.</strong></p>
            <ol>
                <li>Define action creator with corresponding axios call.</li>
                <li>There is no need to create a reducer, since axios will delete the data.</li>
                <li>Include the action creator in mapDispatchToProps and use it in the component.</li>
                <li>Use this.context.router.push() to redirect the user after deleting the post.</li>

            </ol>
            <p style={{marginTop: '30'}}><strong>Redux Thunk (redux-thunk).</strong></p>
            <ol>
                <li>Purpose: middleware to manage async action creators.</li>
                <li>Using redux thunk, the action creator returns a function instead of an object like
                    we have been doing until now.</li>
                <li>The explanation of this topic is poor.</li>

            </ol>
            <p style={{marginTop: '30'}}><strong>The rest of the chapters of the bonus section.</strong></p>
            <ol>
                <li>The quality of these lessons seems poorer than the rest.</li>


            </ol>

        </div>
    );
};

export default IndexComponent;
