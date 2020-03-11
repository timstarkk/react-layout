import React from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import roomBook from '../../images/roomBook.png';
import outcache from '../../images/outcache.png';
import bookShoe from '../../images/bookShoe.png';
import gifSearch from '../../images/gifSearch.png';
import skyskraper from '../../images/skyskraper.png';
import rpgGame from '../../images/rpgGame.png';
import edeburgah from '../../images/edeburgah.png';

AOS.init({
    offet: 200,
    duration: 800
});

export default function Projects() {
    return (
        <>
            <div id="projects"></div>
            <div className="container">
                <section className="featured-card" data-aos="fade-up">
                    <img src={outcache} alt="Hotel Room Locator" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Outcache</h3>
                                <p>A peer-to-peer rental website for outdoor equipment. Built using the MERN stack. I was responsible for the front-end of this website, as well as some back end routing and component work.
                            <br /><br />
                                    <a href="http://www.outcache.com/" target="_blank">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/outcache" target="_blank">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <br></br>
                <section className="card" data-aos="fade-right">
                    <img src={roomBook} alt="Hotel Room Locator" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Hotel Room Locator</h3>
                                <p>A React.js application that allows users to search for and locate hotel rooms. This app features Google Maps API integration and allows users to filter the search results based on certain parameters, in which case the results will automatically re-render to display updated search results.
                            <br /><br />
                                    <a href="http://roomboook.herokuapp.com/" target="_blank">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/roombook" target="_blank">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="card" data-aos="fade-left">
                    <img src={bookShoe} alt="Book and Shoe Finder" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Book and Shoe Finder</h3>
                                <p>A Computer Vision application that uses realtime object detection to identify books and shoes. I created and trained the deep learning model using IBM Cloud Annotations and IBM Watson Machine Learning. The application itself was forked from Github. I only made visual changes to the app and optimized for mobile. This is hosted on Heroku and is SSL-encrypted using Cloudflare.
                            <br /><br />
                                    <a href="https://www.timbostark.com" target="_blank">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/object-detection-react" target="_blank">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="card" data-aos="fade-right">
                    <img src={skyskraper} alt="Mongo News Scraper" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Mongo News Scraper</h3>
                                <p>A Node.js app that uses Cheerio.js to scrape the web (FinViz.com) for news articles, and stores them in a MongoDB database. Links to those articles are then pulled from the database and displayed on the homepage, and users can also create/delete comments on each article. This app uses mLab for hosting the database.
                            <br /><br />
                                    <a href="https://fin-news-talk.herokuapp.com" target="_blank">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/news-scraper" target="_blank">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="card" data-aos="fade-left">
                    <img src={edeburgah} alt="SQL burger app" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>SQL burger app</h3>
                                <p>A simple C.R.U.D. app built with Node.js and MySQL, hosted on Heroku. The app allows users to add burgers to the list and 'devour' them. This app uses JawsDB for hosting the database.
                            <br /><br />
                                    <a href="https://edeburgah.herokuapp.com" target="_blank">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/burger" target="_blank">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="card" data-aos="fade-right">
                    <img src={gifSearch} alt="Gif Search" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Gif Search</h3>
                                <p>A simple gif search tool using the Giphy API. This was made using jQuery and Bootstrap, and uses local storage to save search terms.
                            <br /><br />
                                    <a href="https://timstarkk.github.io/GIFsearch/" target="_blank">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/GIFsearch" target="_blank">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="card" data-aos="fade-left">
                    <img src={rpgGame} alt="Card Fighting Game" />
                    <div>
                        <div className="border-box">
                            <div className="text-box">
                                <h3>Card Fighting Game</h3>
                                <p>A simplistic card-fighting game where the user must choose a hero and defeat all remaining enemies to win. Built with html/css/javascript, using bootstrap and jQuery. This was my first time trying animations.
                            <br /><br />
                                    <a href="https://timstarkk.github.io/card-game" target="_blank">
                                        <button class="btn btn-primary" >View Project</button>
                                    </a>
                                    <a href="https://github.com/timstarkk/card-game" target="_blank">
                                        <button class="btn btn-secondary">View Source</button>
                                    </a>
                                    <hr />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
