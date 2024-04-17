import './Feed.css';
import React from 'react';
import styled from 'styled-components';
import Stories from '../Stories/Stories';
import Messenger from '../Messenger/Messenger';
import Post from '../Post/Post';
import { useEffect, useState } from 'react';
import axios from '../axios.js';
import Pusher from 'pusher-js';

const FeedWrapper = styled.div`
  flex: 1;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Feed = () => {
  const [postsData, setPostsData] = useState([]);
  const syncFeed = () => {
    axios.get('/posts').then((res) => {
      console.log(res.data);
      setPostsData(res.data);
    });
  };
  useEffect(() => {
    syncFeed();
  }, []);

  useEffect(() => {
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_ID || '', {
      cluster: 'eu',
    });
    const channel = pusher.subscribe('socialPosts');
    channel.bind('inserted', (data: any) => {
      syncFeed();
    });
  }, []);

  return (
    <FeedWrapper>
      <Stories />
      <Messenger />
      {postsData.map((entry: any, index) => (
        <Post
          key={index}
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))}
    </FeedWrapper>
  );
};
export default Feed;
