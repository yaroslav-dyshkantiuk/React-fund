import { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'aa',
      body: 'zz',
    },
    {
      id: 2,
      title: 'ffff 2',
      body: 'q',
    },
    {
      id: 3,
      title: 'bb 3',
      body: 'gg',
    },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPost() {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }

  const sortedPost = getSortedPost();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search...'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Sort by'
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By description' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={sortedPost}
          title='Post about JS'
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
      )}
    </div>
  );
}

export default App;
