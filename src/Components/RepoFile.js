import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const RepoFile = () => {
  const [repos, setRepos] = useState([]);
  const [Loading, setLoading] = useState(true);
  const   { repoId }  = useParams();
  const githubLink = `https://github.com/joannaamy/${repoId}`;
  
  useEffect(() => {
    const link = `https://api.github.com/repos/joannaamy/${repoId}`;
    const fetchUsers = async () => {
      const res = await fetch(link)
      const data = await res.json();
      setRepos(data)
      console.log(data)
      setLoading(false)
    };
    fetchUsers();
  }, []);
//  
  
  return Loading ? (<h1>Loading....
  </h1>) : (
    <div>
      <Helmet>
        <title>REPOSITORY VIEW</title>
        <meta
          name="description"
          content="THIS PAGE HELPS YOU VIEW JOANNA'S REPOSITORIES ON GITHUB"
        />
      </Helmet>

      <div>
        <div className="repo-top">
          
        </div>
        <div className="desc-container">
          
          <div className="singrepo-links">
            {/* <a className="viewMore" href={githubLink}>VIEW REPOSITORIES</a>
            <Link className="return" to="/repos">REPOSITORIES</Link> */}
          </div>
        </div>
      </div>
    </div>)
}

export default RepoFile