import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="intro" id="intro">
        <div className="container">
          <p className="text-sm">Hello! I'm</p>
          <p className="text-lg">Direndra Kavindu</p>
          <p className="text-md">Major Tech Noob </p>
          <p className="intro-text">
            Welcome to my personal digital space where I share simply about
            myself, my goals, my projects, my achievements and where I'm headed.
            I write blogs about the things that I'm passionate about. Determined
            to be a great and skillfull software engineer one day.
          </p>
          <div className="social-icons">
            <ul>
              <li>
                <a href="">
                  {" "}
                  <Image
                    src="/linkedin-brands.svg"
                    height="20px"
                    width="20px"
                  ></Image>
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    src="/facebook-brands.svg"
                    height="20px"
                    width="20px"
                  ></Image>
                </a>
              </li>
            </ul>
          </div>
          <div className="down-arrow">
            <a href="#about">
              <Image
                src="/down-arrow-svgrepo-com.svg"
                width="30px"
                height="30px"
              ></Image>
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="avatar">
            <Image
              src="/Intro.jpg"
              height="400"
              width="400"
            />
          </div>
          <div className="bio">
            <h2>About Me</h2>
            <p>
              A dedicated and hard-working student who’s currently reading for a
              BSc in Computer Science degree at IIT. Always dreams to become a
              well reputed and skillful Software Engineer who creates and
              develops extraordinary programs.
              <br />A quick learner, always up to challenges and have a special
              interest at heart for programming. Currently searching for an
              internship to expand my horizons and to achieve my goals.
            </p>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="container">
          <div>
            <h2>Skills</h2>
            <p>
              These are the skills I'm most passionate about and I think I'm
              good at. Learning and developing these skills in a speedy manner.
            </p>
          </div>
          <div>
            <ul>
              <li>
                <Image
                  src="/html5-svgrepo-com.svg"
                  height="38px"
                  width="38px"
                ></Image>
              </li>
              <li>
                <Image
                  src="/css3-svgrepo-com.svg"
                  height="38px"
                  width="38px"
                ></Image>
              </li>
              <li>
                <Image
                  src="/js-official-svgrepo-com.svg"
                  height="38px"
                  width="38px"
                ></Image>
              </li>
              <li>
                <Image
                  src="/mongodb-svgrepo-com.svg"
                  height="38px"
                  width="38px"
                ></Image>
              </li>
              <li>
                <Image
                  src="/mysql-logo-svgrepo-com.svg"
                  height="38px"
                  width="38px"
                ></Image>
              </li>
              <li>
                <Image
                  src="/next-dot-js-svgrepo-com.svg"
                  height="38px"
                  width="38px"
                ></Image>
              </li>
              <li>
                <Image
                  src="/python-svgrepo-com.svg"
                  height="38px"
                  width="38px"
                ></Image>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hobbies" id="hobbies">
        <div className="container">
          <h2>Hobbies</h2>
          <div className="hobbies-container">
            <div className="Gamer">
              <div>
              <p className="title">A Massive gamer</p>
              <p>
                Even from a little age always were passionate about
                games.Multiplayer, single player, RPG, FPS you name it I like
                it. Nowadays more focused on competing on Esports platforms and
                improving my competitive multiplayer game skills{" "}
              </p>
              </div>
              <div>
              <video src="/valorant.mp4"  width="320" height="240" autoPlay controls="" loop muted>
              </video>
              </div>
            </div>
            <div className="TechGeek">
              <div>
              <p className="title">TechGeek</p>
              <p>
                In love with coding specially with python and java. Still a
                beginner and learning the fundamentals. Pretty excited about
                developing these skills to a further level{" "}
              </p>
              </div>
              <div>
              <video src="/Code.mp4"  width="320" height="240" autoPlay controls="" loop muted>
              </video>
              </div>
            </div>

            <div className="MusicEnthusiast">
              <div>
              <p className="title">Music Enthusiast</p>
              <p>
                Started learning about music form a little age. Plays violin,
                guitar and have decent vocals too. Accomplished some awards and
                first places in the past (all island level as well). Former
                rhythm guitarist in a band and would like to study more about
                music and do something creative with it one day
              </p>
              </div>
              <div>
              <video src="/Guitar.mp4"  width="320" height="240" autoPlay controls="" loop muted>
              </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog" id="blog">
        <h3>Blogs</h3> 
        <div className="container">

          <div className="youtubeJourney">
          <a href="/Blog.js">
          <h4>A youtube journey</h4>
          <img src="/Youtube.jpg" height="300" width="440px" />
          </a>
          </div>
          
          <div className="youtubeJourney">
          <a href="/Blog.js">
          <h4>A youtube journey</h4>
          <img src="/Youtube.jpg" height="300" width="440px" />
          </a>
          </div>
          </div>
      </section>
    </>
  );
}
