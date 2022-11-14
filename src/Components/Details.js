import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    AiOutlineStar,
    AiOutlineFork,
  } from "react-icons/ai";



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

//   let dateObj = new Date(repos.created_at);
//   const myDate =
//     dateObj.getUTCFullYear() +
//     "/" +
//     (dateObj.getMonth() + 1) +
//     "/" +
//     dateObj.getUTCDate();

  return (
    <>
    <div>
      <div className="particulars">
        <h1 className="fileName"> {repos.name} </h1>
        {/* <img src={repos.owner.avatar_url} alt="Joanna's DP" /> */}
        <p>{repos.full_name}</p>
        {/* <p className="Date">DATE: {myDate}</p> */}
        <p>{repos.language}</p>
        <p className="date">
          {" "}
          CREATED ON {new Date(repos.created_at).toDateString()}
          <br></br>
          LAST UPDATE {new Date(repos.updated_at).toDateString()}
        </p>{" "}
      </div>
      <button>
        <a className="viewMore" href={repos.html_url}>
          VIEW REPOSITORIES
        </a>
      </button>
      <button>
        <Link className="return" to="/repos">
          REPOSITORIES
        </Link>
      </button>
    </div>
    </>
  );
}
