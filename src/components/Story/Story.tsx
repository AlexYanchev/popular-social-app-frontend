import './Story.css';
import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StoryWrapper = styled.div`
  background-image: url(${(props) => (props.datatype ? props.datatype : '')});
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 120px;
  height: 200px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 100ms ease-in;
  &:hover {
    transform: scale(1.07);
  }
  .story__avatar {
    margin: 10px;
    border: 5px solid #2e81f4;
  }
  h4 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
  }
`;

const Story = ({ image, profileSrc, title }: any) => {
  return (
    <StoryWrapper datatype={`${image}`}>
      <Avatar src={profileSrc} className='story__avatar' /> <h4>{title}</h4>
    </StoryWrapper>
  );
};
export default Story;
