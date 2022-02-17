import { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
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

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPost]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='Post about JS'
      />
    </div>
  );
}

export default App;
