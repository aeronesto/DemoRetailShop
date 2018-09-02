import React, { Component } from 'react';


class Comment extends Component {
  constructor(props){
    super(props);
    this.state = { comments : {} }

    this.addComment = this.addComment.bind(this);
    this.renderComment = this.renderComment.bind(this);
  }

  addComment(commentData) {
    let timeStamp = (new Date()).getTime();
    this.state.comments['comment-id' + timeStamp] = commentData;
    this.setState({
      comments: this.state.comments
    });
  }

  renderComment(key) {
    return (
      <li className="">
        <NewComment key={key} index={key} details={this.state.comments[key]} />
      </li>
    )
  }

  render() {
    return (
	    <div className="row medium-8 large-7 columns">

	      <ol className="comment-list block-comments">
            {
              Object
                .keys(this.state.comments)
                 // Creating a NEW array
                .map(this.renderComment)
            }
	      </ol>

	      <AddCommentForm addComment={this.addComment}/>

        <pre>{JSON.stringify(this.state, null, 2)}</pre>

	    </div>
    )
  }
};

/*
  Add comment Form
  <AddCommentForm />
*/
// Semi-Dumb
const AddCommentForm = ({ addComment }) => {

  const processComment = (event) => {
    event.preventDefault();

    // 1. Take data from from form
    let commentData = {
      // commentBody: this.refs.desc.value
    }

    // 2. Pass data back to App
    addComment(commentData);

    // 3. Reset the form
    // this.refs.commentForm.reset();

  };

    return (
      <div className="callout secondary">
        <h4 className="leave-comment">Add a Comment</h4>
        <form className="post-edit" onSubmit={this.processComment}>
          <textarea placeholder="Add your comment here" required/>
          <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
        </form>
      </div>
    )
};


/*
  Newcomment
  <NewComment />
*/
const NewComment = ({ details }) => {
    return (
      <div className="block-comment-content module text">
        <div className="comment-user">
          <div className="comment-user-avatar-wrap">
            <a>
              <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/3/profile/profile-512_29.jpg" className="comment-avatar" alt="" />
            </a>
          </div>
          <div className="comment-user-text">
            <a href="#0" data-username="cathbailh" className="comment-username">
                <span className="username">
                  {details.commentName}
                </span>
            </a>
            <span className="on"> on </span>
            <a href="#0">
              <time className="block-comment-time">
                {(Date()).getTime()}
              </time>
            </a>
          </div>
        </div>

        <div className="comment-text">
          <p>{details.commentBody}</p>
        </div>
      </div>

    )
};


export default Comment;
