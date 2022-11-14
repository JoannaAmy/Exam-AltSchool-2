import { Helmet } from "react-helmet-async";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineStar,
  AiFillMail,
  AiOutlineFork,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta
          name="description"
          content="THIS PAGE DISPLAYS JOANNA ALTSCHOOL EXAMINATION PROJECT"
        />
      </Helmet>

      <div className="home">
        <div className="intro">
          <div className="welcome">WELCOME TO MY LIST OF REPOSITORIES</div>
          <div className="About">
            <p>HI THERE 👋🏾</p>
            <br></br>
            <p>
              I'm a Frontend Developer, Virtual Assitant, and Customer care
              personnel who is currently a student at Developer Advocate at
              AltSchool Africa. I'm passionate about learning new things,
              problem solving, writing, drawing, and others. I am on my way to
              becoming a world class Engineer and help solve problems. I am open
              to new opportunies and look forward to contributing to as many
              fields as possible. 
              </p>
              <p>
              Here's a quick summary about me: </p>
              <p>😊 Pronouns: She/Her </p>
              <p>💡 Fun fact: I'm currently studying at AltSchool Africa
              School of Software Engineering Class of 2022.</p>
              <p> 🌱 I'm currently
              learning JavaScript, and Reactjs.</p>
              <p> 😊 I'm looking for help with
              OpenSource projects, hackathons, internships, and entry-level
              opportunities.</p>
              <p> 💼 Job interests: Front Engineer and OpenSource
              contributor (Intern or Junior level).</p> 
              <p>📫 You can view my resume
              and contact me by emailing egbunajoanna16@gmail.com.
              </p>
              <p>💼 MY SOCIALS: </p>
                <p>
              <a
            href="https://twitter.com/Joanna911X"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiOutlineTwitter /> Twitter
          </a>
          </p>
          <p>
          <a
            href="https://www.linkedin.com/in/joanna-egbuna-876a82225/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiFillLinkedin /> LinkedIn
          </a>
          </p>
          <p>
            <AiOutlineWhatsApp /> 08140290286
          </p>
          <p>
            <AiFillMail /> egbunajoanna16@gmail.com
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
