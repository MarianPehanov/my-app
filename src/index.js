import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updatePostText, newPostText, subscribe } from './components/redux/state';
import state from './components/redux/state';
 
const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App posts={state.profile.posts} addPost={addPost} updatePostText={updatePostText} newPostText={newPostText} />
      </BrowserRouter>
    </React.StrictMode>
  );
reportWebVitals();
  }
rerenderEntireTree();
subscribe(rerenderEntireTree);






