import React, { Component } from 'react';
import "./PortfolioPage.css"



class PortfolioPage extends Component {
    render() {
        return (
            <body>
                <div>
                    <h1 className='name'>Hunter Lee McGuire</h1>
                    <h5 className='git'>GitHub@ DazingPluto</h5>
                    <div className='headerBlock'>
                        <div className="headerPhoto">
                            <img src="https://i.imgur.com/otvLfgl.jpg" className='personalPhoto'></img>

                        </div>
                        <div className="headerText">
                            <p className='missionStatement'>I am a science enthusiast, artist, and  lover of technology.
                                A past server, now bootcamp graduate seeking a new career in the field! My goal is to enrich my life with innovation,
                                creation, and education. I  aspire to help mold the landscape of software and hardware, and boost humanity forward.
                            </p>

                        </div>
                    </div>
                    <div className="projects">
                        <h2 className="headerTwo">General Assembly | Fellow</h2>
                        <div className='projectBlock'>
                            <div className="projectOne">
                                <a href="https://dazingpluto.github.io/Space-Flyer/">
                                    <img src="https://i.imgur.com/9iXQktQ.jpg" className='projectImage space'></img>

                                </a>
                                <div className='Description'>
                                    <p>"Space Balls The Game" represents my overall knowledge achieved thus far in Javascript, by building a simple (or not so simple) game!
                                        It is indeed named after the infamous movie Space Balls which gives it some personal flare! Comedy and Space!</p>

                                </div>
                            </div>
                            <div className="projectTwo">
                                <a href="https://anime-boop.herokuapp.com/">
                                    <img src="https://i.imgur.com/gTj9FEw.jpg" className='projectImage anime'></img>

                                </a>
                                <div className='Description'>
                                    <p>In "Anime Boop" I wanted to mix my love of anime with my new found knowledge of API's. Here you will see me flex to my best ability with
                                        using DOM monipulation to grab and display API DATA. I'm continuing to work vigorously on the project
                                        to give the users a more personal experience and apply CRUD!
                                    </p>

                                </div>
                            </div>
                            <div className="projectThree">
                                <a href='https://my-recipe-page.herokuapp.com/?name='>
                                    <img src="https://i.imgur.com/L1MKQZQ.jpg" className='projectImage recipe'></img>
                                </a>
                                <div className='Description'>
                                    <p>For "My Recipe" I challenged myself to make an API. and use componentDidMount() too display the data. Here you
                                        can see my current state of creating API's and displaying the DATA on the Frontend of the page. Stretch goals are to apply
                                        CRUD to my page, and utilize the API I created. This project, like them all, is a work in progress.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default PortfolioPage;
