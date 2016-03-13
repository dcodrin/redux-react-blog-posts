import React from 'react';
import {reduxForm} from "redux-form";
import {createPost} from "../actions/index";
import {bindActionCreators} from "redux";
import {Link} from "react-router";


class PostNew extends React.Component {

    //One way of accessing data from parent components is to use context. CONTEXT SHOULD NOT BE ABUSED AND ONLY USED FOR ROUTING.
    //The line below tells the component that we are looking for a property called router on the parents of PostNew. Once that property is found, assign it to this.context.router
    static contextTypes = {
      router: React.PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props).then(()=>{
            //Blog post has been successfully created.
            //Redirect user to index
            //We redirect by calling this.context.router.push with the new path.
            this.context.router.push('/')
        })
    }

    render() {
        const {fields: {title, categories, content},handleSubmit} = this.props;
        //es5 var title = this.props.fields.title

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create new post</h3>
                {/*invalid is a reduxForm helper function*/}
                <div className={`form-group ${content.touched && content.invalid ? 'has-warning' : ''}`}>
                    <label>Title</label>
                    {/* Use object destructuring and pass all the props of title to input */}
                    <input type="text" className="form-control" {...title}/>
                    <div className='text-help'>
                        {/*touched is a helper function provided by reduxForm. If the filed was never interacted with, touched will return false.*/}
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-warning' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-react">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-warning' : ''}`}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content}/>
                    <div className="text-react">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

//Pass form values to validate. Create an errors object that will handle the errors.
function validate(values){
    const errors = {};
    !values.title ? errors.title = 'Enter a title' : null;
    !values.categories ? errors.categories = 'Enter a category' : null;
    !values.content ? errors.content = 'Enter some content' : null;
    return errors;
}


//connect: first argument is mapStateToProps, second is mapDispatchToProps
//reduxForm: first is form config, second is mapStateToProps, third is mapDispatchToProps

function mapDispatchToProps(dispatch){
    return bindActionCreators({createPost}, dispatch)
}

export default reduxForm({
    //ReduxForm Config
    //the name of the form (can be anything, does not have to mach component name)
    form: "PostNew",
    fields: ['title', 'categories', 'content'],
    validate
}, null, mapDispatchToProps)(PostNew);


