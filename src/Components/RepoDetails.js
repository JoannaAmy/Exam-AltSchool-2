import { Link } from "react-router-dom";

function RepoDetails(props) {
  return (
    <div className="repo-container">
      <div>
        <aside>
       <img src={props.Avatar} alt="jj"/>
       </aside>
        <h1 className="repo-title">{props.title}</h1>
        <div className="owner">{props.owner}</div>
      </div>
      {/* <div className="index">0{props.index + 1}</div> */}
      <br></br>
      <p>{props.description}</p>
      <Link to={`/repos/${props.title}`} className="links">
        CHECK OUT REPO
      </Link>
    </div>
  );
}
export default RepoDetails;
