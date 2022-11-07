import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const RepoFile = () => {
  const [repos, setRepos] = useState([]);
  const [Loading, setLoading] = useState(true);
  const  params  = useParams();
  const githubLink = `https://github.com/joannaamy/${params}`;
  
  useEffect(() => {
    const link = `https://api.github.com/repos/joannaamy/${params}`;
    const fetchUsers = async () => {
      const res = await fetch(link)
      const data = await res.json();
      setRepos(data)
      setLoading(false)
    };
    fetchUsers();
  }, []);
//  
  let dateObj = new Date(repos.created_at);
  const myDate = (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1) + "/" + (dateObj.getUTCDate());

  return Loading ? (<h1>LOADING....
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
          <h2 className="fileName"> {repos.name} </h2>
          <p className="fileDate">{myDate}</p>
        </div>
        <div className="desc-container">
          
          <div className="singrepo-links">
            <a className="viewMore" href={githubLink}>VIEW REPOSITORIES</a>
            <Link className="return" to="/repos">REPOSITORIES</Link>
          </div>
        </div>
      </div>
    </div>)
}

export default RepoFile