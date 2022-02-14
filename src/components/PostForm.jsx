import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      {/* Управляемый компонет */}
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type='text'
        placeholder={'Post title'}
      />
      {/* Неуправляемый компонент */}
      <MyInput
        value={post.body}
        type='text'
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder={'Post description'}
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;
