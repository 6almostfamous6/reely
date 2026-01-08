import React from 'react';
import CreatePost from '../components/CreatePost';
import Timeline from '../components/Timeline';
import '../styles/feed.css';

export default function Home() {
  return (
    <div className="feed-container">
      <CreatePost />
      <Timeline />
    </div>
  );
}
