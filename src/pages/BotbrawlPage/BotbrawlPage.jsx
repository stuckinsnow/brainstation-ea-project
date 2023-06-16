import "./BotbrawlPage.scss";

import React, { useState } from "react";

import up from "../../assets/icons/Group5.png";
import down from "../../assets/icons/Group4.png";

function BotbrawlPage() {
  const segments = [
    { id: 1, start: 0, end: 10, transcript: {
      "Player_1": "If you get a gunhouse comment instantly and me and Evan can jump off and we just fight bro but they might just 50 50 you guys up top I don’t know if I should go",
      "Player_2": "I might go up top though like you’re on the entrance side yeah",
      "YOU": "I’m going Bottom mid too I’m going Bottom mid with this guy"} },
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

          <div className="maincontent__right--title">
            <h2 id="something">Transcript from last game</h2>
          </div>

          <div className="container">
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
              <div className="chatGPT">
                {currentSegment.transcript.map((seg, index) => {
                  <div id={index}>seg</div>
                })}


              </div>

              <div className="maincontent__right--icons">
                <div onClick={handleAction} className="btn like-btn">
                  <img src={up} />
                </div>
                {/* <button onClick={handleAction}>Like</button> */}

                <div onClick={handleAction} className="btn dislike-btn">
                  <img src={down} />
                </div>
                {/* <button onClick={handleAction}>Dislike</button> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BotbrawlPage;
