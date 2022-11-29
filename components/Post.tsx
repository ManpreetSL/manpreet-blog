import React from 'react';
import { Post } from '../types';

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  return (
    <div>
      {post.title} {post.excerpt}
    </div>
  );
}

export default Post;
