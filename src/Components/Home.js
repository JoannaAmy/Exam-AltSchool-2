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
          <p>HI THERE</p>
          <br></br>
          <p></p>
          </div>
        </div>
        <footer>
        <a
          href="https://twitter.com/Joanna911X"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <AiOutlineTwitter /> Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/joanna-egbuna-876a82225/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <AiFillLinkedin /> LinkedIn
        </a>
        <p>
          {" "}
          <AiOutlineWhatsApp /> 08140290286
        </p>
        <a
        >
          {" "}
          <AiFillMail /> egbunajoanna16@gmail.com
        </a>
        </footer>
      </div>
    </>
  );
}

export default Home;
