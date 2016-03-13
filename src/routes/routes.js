import React from "react";
import {Route, IndexRoute} from "react-router";

import PostsIndex from "../components/posts_index";
import App from "../components/app";
import PostNew from "../components/post_new";
import PostShow from "../components/post_show"

//Notice that you have to pass this.props.children to the parent component to display the routes.
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostNew} />
        {/*the id will be available through this.props.params.id*/}
        <Route path="posts/:id" component={PostShow} />
    </Route>
);