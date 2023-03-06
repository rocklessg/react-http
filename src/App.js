import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';

function App() {
  return (
    <div className="App">
      <HookCounter3 />
      {/* < HookCounter2 /> */}
      {/* < HookCounter /> */}
      {/* < PostForm /> */}
      {/* < PostList /> */}
    </div>
  );
}

export default App;
