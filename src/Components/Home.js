
import { Helmet } from "react-helmet-async";

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
      <div className="welcome">
        WELCOME TO MY LIST OF REPOSITORIES
        </div>
        <div className="About">
            <p>HI THERE</p> 
            <br></br>
            <p></p>
      </div>
      </div>
      
  </> 
  );
}
 
export default Home;