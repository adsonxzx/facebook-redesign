import React from 'react';
import './feed-post.scss';

import Comment from '../Comment/index';

export default ({ posts }) => (
  <>
    {
      posts.map(post => (
        <div key={post.id} className="feed-post">
          {/* Post Author */}
          <div className="post-author">
            <div className="image">
              <img src={post.author.avatar} alt="" />
            </div>
            <div className="author">
              <span className="name">{post.author.name}</span>
              <span className="date">{post.date}</span>
            </div>
          </div>

          {/* Content */}
          <p className="post-content"> {post.content}</p>

          {/* Comments */}
          <Comment comments={post.comments}/>
        </div>
      ))
    }
  </>
)