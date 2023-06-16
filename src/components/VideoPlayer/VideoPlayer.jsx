import React, { useState } from 'react';

const VideoPlayer = () => {
  const segments = [
    { id: 1, start: 0, end: 10 },
    { id: 2, start: 100, end: 110 },
    { id: 3, start: 200, end: 210 },
    { id: 4, start: 300, end: 310 },
    { id: 5, start: 400, end: 410 },
  ];

  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);

  const currentSegment = segments[currentSegmentIndex];

  const videoURL = `https://www.youtube.com/embed/kGzm_5X7CqY?rel=0&start=${currentSegment.start}&end=${currentSegment.end}&autoplay=1`;

  const handleAction = () => {
    setCurrentSegmentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= segments.length ? 0 : nextIndex;
    });
  };


  //TODO 
  /**
    *  remove picture in picture
    * 
    *  video subtitles on the right? youtube api???
    * 
    *   liked fragment send to backend // => backend API endpoint?
    * 
    *   
    * 
    * 
    **/

  return (
    <div>
      <iframe 
        width="560" 
        height="315" 
        src={videoURL} 
        title="Video Player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
      <button onClick={handleAction}>Like</button>
      <button onClick={handleAction}>Dislike</button>
    </div>
  );
}

export default VideoPlayer;



