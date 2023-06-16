import './BotbrawlPage.scss';



function BotbrawlPage() {
    return (
        <div>

            <header>
                header goes here, it can be refactored later
            </header>

            <main>
                <section className='maincontent'>
                    <h1 className='maincontent__title'>Bot Brawl Vocal Training Academy</h1>

                    <div className='maincontent__card maincontent__left'>
                        <div className="maincontent__left--videoplayer">
                            VIDEO COMPONENT GOES HERE
                        </div>
                    </div>

                    <div className='maincontent__card maincontent__right'>
                        <div>
                            Transcript from last game
                        </div>

                        <div className="chatGPT">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat maxime nam, nemo ab odit dolores voluptas dolorum provident illo doloribus quidem, officiis error deleniti soluta. Ea sapiente qui quidem minima!
                        </div>


                        <div className='maincontent__right--icons'>
                            <div className=''>
                                Up
                            </div>

                            <div className=''>
                                Down
                            </div>
                        </div>


                    </div>





                </section>

            </main>

        </div>
    )
}

export default BotbrawlPage;