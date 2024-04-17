import './Feed.css';
import React from 'react';
import styled from 'styled-components';
import Stories from '../Stories/Stories';
import Messenger from '../Messenger/Messenger';
import Post from '../Post/Post';

const FeedWrapper = styled.div`
  flex: 1;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Feed = () => {
  return (
    <FeedWrapper>
      <Stories />
      <Messenger />
      <Post
        profilePic='https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg'
        message='Awesome post on CSS Animation. Loved it'
        timestamp='1609512232424'
        imgName='https://res.cloudinary.com/dxkxvfo2o/image/upload/v1598295332/CSS_Animation_xrvhai.png'
        username='Nabendu'
      />{' '}
      <Post
        profilePic='https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg'
        message='BookList app in Vanilla JavaScript'
        timestamp='1509512232424'
        imgName='https://res.cloudinary.com/dxkxvfo2o/image/upload/v1609138312/Booklist-es6_sawxbc.png'
        username='TWD'
      />
    </FeedWrapper>
  );
};
export default Feed;