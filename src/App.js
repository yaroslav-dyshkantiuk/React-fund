import react, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import Postitem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Javascript',
      body: 'Description',
    },
    {
      id: 2,
      title: 'Javascript 2',
      body: 'Description',
    },
    {
      id: 3,
      title: 'Javascript 3',
      body: 'Description',
    },
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  };

  return (
    <div className='App'>
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
      <PostList posts={posts} title='Post about JS' />
    </div>
  );
}

export default App;
