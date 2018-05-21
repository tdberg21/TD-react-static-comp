import React from 'react';
import Button from './Button';
import Author from './Author'
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.story.img} />
      <div className='story-info'>
        <div>
          <h3>{props.story.title}</h3>
          <p>{props.story.desc}</p>
        </div>
        <Author 
          authName={props.story.authName} 
          authImg={props.story.authImg}
          estTime={props.story.estTime} />
      </div>
    </div>
  )
}

export default Story;
