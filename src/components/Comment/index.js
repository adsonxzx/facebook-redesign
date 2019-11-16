import React from 'react';

import './post-comment.scss';

export default ({ comments }) => (
  <>
    {
      comments.map(comment => (
        <div key={comment.id} className="post-comment">
          <div className="image">
            <img className="user-avatar" src={comment.author.avatar} alt="" />
          </div>
          <div className="comment">
            <span className="author"> {comment.author.name}</span>
            <p className="text">{comment.content}</p>
          </div>
        </div>
      ))
    }
  </>
)