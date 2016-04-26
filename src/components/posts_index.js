import React, { Component } from 'react';
//import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router';

class PostsIndex extends Component{
  //React call this when the component is about to render
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map((post) => {
      return(
      <li className="list-group-item" key={post.id}>
        <Link to={'posts/' + post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </Link>
      </li>);
    });
  }

  render(){
    return(
        <div>
          <div className="text-xs-right">
            <Link to="/posts/new" className="btn btn-primary">
              Add a Post
            </Link>
          </div>

          <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>

        </div>
    );
  }
}

/*function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPosts}, dispatch);
}*/

function mapStateToPros(state){
  return {posts: state.posts.all};
}


export default connect(mapStateToPros,{fetchPosts})(PostsIndex);
