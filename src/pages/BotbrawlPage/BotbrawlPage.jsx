import "./BotbrawlPage.scss";

import React, { useState } from "react";

function BotbrawlPage() {
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

  return (
    <div>
      <main>
        <section className="maincontent">
          <h1 className="maincontent__title">
            Bot Brawl Vocal Training Academy
          </h1>

          <div className="maincontent__card maincontent__left">
            <div className="maincontent__left--videoplayer">
              {/* <div>
                <div className="video-container">
                  <div className="video-container__video"> */}
                    <iframe
                    //   width="664"
                    //   height="400"
                      src={videoURL}
                      title="Video Player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  {/* </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="maincontent__card maincontent__right">
            <div className="maincontent__right--title">Transcript from last game</div>

            <div className="chatGPT">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              maxime nam, nemo ab odit dolores voluptas dolorum provident illo
              doloribus quidem, officiis error deleniti soluta. Ea sapiente qui
              quidem minima!
            </div>

            <div className="maincontent__right--icons">
              <div onClick={handleAction} className="btn like-btn">Up</div>
              {/* <button onClick={handleAction}>Like</button> */}

              <div onClick={handleAction} className="btn dislike-btn">Down</div>
              {/* <button onClick={handleAction}>Dislike</button> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BotbrawlPage;
