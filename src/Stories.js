import React from 'react';
import Story from './Story';
import './Stories.css';

const Stories = (props) => {
  return (
    <div className='Stories'>
      <div className='  stories-header'>
        <h3>{props.storiesTitle}</h3>
        <a href='https://www.youtube.com/watch?v=Ienv1rBZFyc'>See more</a>
      </div>
      <div className='stories-grid'>
        {
          props.stories.map( (story, index) => {
            return (<Story story={story}/>);
          })
        }
      </div>
    </div>
  )
}

export default Stories;
