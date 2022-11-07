import { useEffect, useState } from "react";
import RepoDetails from "./RepoDetails";
import RepoFile from "./RepoFile";
import { Helmet } from "react-helmet-async";
// import axios from "axios"

 function Repos() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(4);
  const [Loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`https://api.github.com/users/joannaamy/repos`).then((response) => {
//         setRepos(response.data)
//         setLoading(true)
//         // console.log (data)
//     })
// },[])
  useEffect(() => {
    const link = "https://api.github.com/users/JoannaAmy/repos";
    const fetchUsers = async () => {
      const res = await fetch(link);
      const data = await res.json();
      console.log(data)
      setRepos(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  
  const pagelength = repos.length;
  const indexOfLastRepo = currentPage * perPage;
  const indexOfFirstRepo = indexOfLastRepo - perPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  // Mapping Repo details
  const reposMapped = currentRepos.map((item, index) => (
    <RepoDetails
      key={item.id}
      title={item.name}
      index={index}
      owner={item.owner.login}
      id={item.name}
    />
  ));

  // Create page array
  const pageNumbersArr = [];
  let reposLength = Math.ceil(pagelength / perPage);
  for (let i = 1; i <= reposLength; i++) {
    pageNumbersArr.push(i);
  }

  // Map over Page Array and Change page
  const pageNumbers = pageNumbersArr.map((number) => {
    return (
      <button
        key={number}
        onClick={(e) => setCurrentPage(number)}
        className="page-link"
      >
        {number}
      </button>
    );
  });

  return (
    <>
      <Helmet>
        <title>JOANNA REPOSITORIES</title>
        <meta
          name="description"
          content="THIS PAGE DISPLAYS JOANNA'S GITHUB REPOSITORY"
        />
      </Helmet>

      {Loading ? (
        <h1> LOADING...</h1>
      ) : (
        <div>
          <div className="repo-details">{reposMapped} </div>
          <div className="current-page">
            Page <span className="strong">{currentPage} </span> of {reposLength}{" "}
          </div>
          <br></br>
          <section className="pagination-container">
            <button
              className="page-link"
              disabled={currentPage <= 1}
              aria-disabled={currentPage <= 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              PREVIOUS
            </button>
            <div className="pagination">{pageNumbers}</div>
            <button
              className="page-link"
              disabled={currentPage >= reposLength}
              aria-disabled={currentPage >= 1}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              NEXT
            </button>
          </section>
        </div>
      )}
    </>
  );
}

export default Repos
