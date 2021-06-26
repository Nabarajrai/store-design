import React, { useEffect } from "react";
import { fetchUserandPost } from "../actions";
import { connect } from "react-redux";
import UseHeader from "./UseHeader";

const PostList = (props) => {
  useEffect(() => {
    props.fetchUserandPost();
  }, []);

  const postsList = props.posts.map((post) => (
    <div className="item" key={post.id}>
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <UseHeader userId={post.userId} />
      </div>
    </div>
  ));
  return <div>{postsList}</div>;
};
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchUserandPost })(PostList);
