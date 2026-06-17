import './AboutPage.css'

const AboutPage = () => (
    <>
    <head>
        <meta charset="UTF-8"></meta>
        <title>CV - Ocat</title>
        <meta name="description" content="simple CV example created with HTML and CSS"></meta>
        <meta name="author" content="Fly Nerd"></meta>
        <link rel="icon" href="./img/favicon.ico"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"></link>
    </head>

    <body>
        <main>
{/* Start welcome section */}
            <section class='welcome'>
                <div>
                    <img src="./luxurious-ship.png" alt='welcomeImage'/>
                </div>
                <h1>Om Gisle Gowsigan T Tarhavn</h1>
                <div>
                    <p>About page is under construction</p>
                    <a href="https://www.linkedin.com/in/tarhavn" target="_blank" rel="noreferrer">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/tarhavn" target="_blank" rel="noreferrer">
                        <i class="fab fa-github-alt"></i>
                    </a>
                </div>
            </section>
{/* Start welcome section */}

{/* Start Experience section */}
            <section>
                <h3>Experience</h3>
                <article>
                    <div class='job-title'><span>03.2018 - 06.2018</span> <strong>Tentacles Company</strong><br></br> <strong>Position:</strong> Web developer Intern</div>
                    <div>
                        <p><strong>Tech stack:</strong> HTML5 / CSS</p>
                        <ul class="job-description">
                            <li>Develop web application for Octopoda departments</li>
                        </ul>
                    </div>
                </article>
            </section>
{/* End Experience section */}

{/* Start Education section */}
            <section>
                <h3>Education</h3>
                <article>
                    <div class='school'>
                        <span>2015-2018</span> <strong>Octocats tech academy</strong>
                    </div>
                    <div class="descrition">
                        Bechelor Degree of Octorobotics
                    </div>
                </article>
            </section>
{/* End Education section */}

{/* Start Course and workshop section */}
            <section>
                <h3>Courses and Workshops</h3>
                <article class='course'>
                    <div class='title'>
                        <h4>Udacity: Intro to HTML and CSS</h4>
                    </div>
                    <div class="descrition">
                        <p>Build styled, well-structured websites. Learn how to use HTML5 standard to create websites. Understand CSS syntax, selectors, and units. Learn about code editors and a browser's Developer Tools.</p>
                    </div>
                </article>
            </section>
{/* End Course and workshop section */}

{/* Start Skills section */}
            <section>
                <h3>Skills</h3>
                <div class='skills'>
                    <div class='column'>
                        <h4>Good knowledge</h4>
                        <ul>
                            <li>HTML5</li>
                        </ul>
                    </div>
                    <div class='column'>
                        <h4>Basic knowledge</h4>
                        <ul>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Languages</h4>
                        <p>🇬🇧 English - Proficient C1/C2</p>
                        <p>🇪🇸 Spanish - Intermediate - B1/B2</p>
                        <p>🇫🇷 French - Advanced - C1</p>
                    </div>
                </div>
            </section>
{/* End Skills section */}
        </main>
    </body>
    <footer><p>Nettsiden utviklet av: <a href="https://tarhavn.com/">@Gisle Gowsigan</a>  / <a href="https://www.linkedin.com/in/tarhavn">LinkedIn</a> / 2025 </p></footer>
    </>
);

export default AboutPage;