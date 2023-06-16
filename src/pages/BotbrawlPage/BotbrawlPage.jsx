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

          <div className="maincontent__right--title">
            <h2>Transcript from last game</h2>
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
                [Matty]: Hey, what’s up guys? Welcome to another Apex Legends
                gameplay video. Today I’m playing with my friends Taylor and
                Joe, and we’re going to try out the new Mixtape mode. Let’s see
                how it goes. [Taylor]: Hi everyone, I’m Taylor and I’m ready to
                kick some ass. [Joe]: Hey, I’m Joe and I’m here to have some
                fun. [Matty]: Alright, let’s do this. We’re starting with Team
                Deathmatch on Party Crasher. I’m going to pick Lifeline, she’s
                my favorite legend. [Taylor]: I’ll go with Bangalore, I like her
                smoke grenades and artillery strike. [Joe]: And I’ll choose
                Mirage, he’s hilarious and his decoys are useful. [Matty]: Nice,
                we have a good team composition. Let’s stick together and
                communicate. [Taylor]: Yeah, communication is key in this game
                mode. We have to coordinate our attacks and cover each other.
                [Joe]: Don’t worry, I’ll keep you guys updated with my witty
                remarks and jokes. [Matty]: Haha, sure thing. Alright, we’re
                dropping in. Let’s go to the center of the map, there’s a lot of
                loot there. [Taylor]: Roger that. I see some enemies landing on
                the other side. Watch out for snipers. [Joe]: Got it. I’ll
                deploy some decoys to distract them. [Matty]: Good idea. I found
                a R-301 and a Mastiff. What about you guys? [Taylor]: I got a
                Spitfire and a Wingman. Not bad. [Joe]: I got a Mozambique and a
                P2020. Yikes. [Matty]: Oof, that’s rough. Here, take this Eva-8,
                it’s better than the Mozambique. [Joe]: Thanks, you’re a
                lifesaver. [Matty]: No problem. Alright, let’s move up. I see
                some enemies on the radar. [Taylor]: Yeah, me too. They’re on
                the second floor of that building. [Joe]: Let’s flank them from
                both sides. [Matty]: Good plan. Taylor, you go left, Joe, you go
                right, I’ll go straight ahead. [Taylor]: Copy that. I’m throwing
                some smoke grenades to cover our approach. [Joe]: I’m sending
                some decoys to confuse them. [Matty]: Nice work. I’m healing up
                with my drone. [Taylor]: I got one down. He had a purple shield.
                [Joe]: I got another one down. He had a gold backpack. [Matty]:
                Nice kills. There’s one more left. He’s running away. [Taylor]:
                Don’t let him escape. Chase him down. [Joe]: I got him. He had a
                Kraber . [Matty]: Wow, good job guys. We wiped out the whole
                squad. [Taylor]: That was awesome. We’re in the lead now. [Joe]:
                Woo-hoo! We’re killing it. [Matty]: Yeah, we are. But don’t get
                cocky, there are still more enemies out there. [Taylor]: True,
                true. Let’s stay focused and alert. [Joe]: Yeah, yeah. But let’s
                also have some fun. [Matty]: Of course. Alright guys, that’s it
                for this round. We’ll be back with more Mixtape action in the
                next video. Thanks for watching and don’t forget to like and
                subscribe for more Apex Legends content. See you next time.
              </div>

              <div className="maincontent__right--icons">
                <div onClick={handleAction} className="btn like-btn">
                  Up
                </div>
                {/* <button onClick={handleAction}>Like</button> */}

                <div onClick={handleAction} className="btn dislike-btn">
                  Down
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
