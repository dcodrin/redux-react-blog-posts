import React from 'react';
import {connect} from "react-redux";
import {fetchPost, deletePost} from "../actions/index";
import {bindActionCreators} from "redux";
import {Link} from "react-router";


class PostShow extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id)
    }
    onDeleteClick(){
        this.props.deletePost(this.props.params.id).then(()=>{
            this.context.router.push("/")
        })
    }
    render() {
        const {post} = this.props;
        if(!post){
            return (
                <div>
                    LOADING
                </div>
            );
        } else {
            return (
                <div>
                    <Link to="/">See All Posts</Link>
                    <button
                        onClick={this.onDeleteClick.bind(this)}
                        className="btn btn-danger pull-xs-right">Delete Post</button>
                    <h3>{post.title}</h3>
                    <h6>Category: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            );
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchPost, deletePost}, dispatch)
}

function mapStateToProps(state){
    return {post: state.posts.post}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
