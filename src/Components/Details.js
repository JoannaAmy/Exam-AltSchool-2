import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
  const { repoId } = useParams();
  const [repos, setRepos] = useState([]);
  const [Loading, setLoading] = useState(true);

  console.log(repoId);

  const githubLink = `https://api.github.com/repos/JoannaAmy/${repoId}`;

  useEffect(() => {
    const link = `${githubLink}`;
    const fetchUsers = async () => {
      const res = await fetch(`${githubLink}`);
      const data = await res.json();
      setRepos(data);
      console.log(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <>
    <div className="all">
      <div className="detailRepo">
        <div className="particulars">
          <h1 className="repoName"> {repos.name} </h1>
          {/* <p>NAME: {repos.owner.login}</p> */}
          <p>LANGUAGE: {repos.language ? repos.language : "No language Used"}</p>
          <p>DEFAULT BRANCH: {repos.default_branch}</p>
          <p className="date">
            CREATED ON {new Date(repos.created_at).toDateString()}
            </p>
            <p className="date">
            LAST UPDATE {new Date(repos.updated_at).toDateString()}
          </p>
          <p>VISIBILITY: {repos.visibility}</p>
        </div>
      </div>
      <button>
            <a className="more" href={repos.html_url}>
              VIEW REPO ON GITHUB
            </a>
          </button>
          <button>
            <Link className="more" to="/repos">
              REPOSITORIES
            </Link>
          </button>
      </div>
    </>
  );
}
