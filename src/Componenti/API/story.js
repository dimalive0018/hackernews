import { useEffect, useState } from 'react';
import { estrazione } from './apiHackerNews';
import dateFormat from 'dateformat';

export const Story = ({typeOfStory}) => {
    const [story, setStory] = useState([]);

    const theDate = (t) => dateFormat(t*=1000, "dddd, mmmm dS, yyyy, h:MM:ss TT");

    useEffect(() => {
        estrazione(typeOfStory).then(data => setStory(data));
     }, [])

     return (
        <div className='border-black border-2 m-5 text-xs md:text-base bg-[#111d5e] text-white'>
        <h3 className='text-lg hover:text-xl md:text-xl md:hover:text-2xl'><a href={story.url}>{story.title}</a></h3>
        <h4>Author: {story.by}</h4>
        <h4>Date: {theDate(story.time)}</h4>
        </div>
      );
}
