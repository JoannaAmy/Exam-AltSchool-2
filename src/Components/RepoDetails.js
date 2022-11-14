import { Link } from "react-router-dom";

function RepoDetails(props) {
  return (
    <div className="repo-container">
      <div>
        <div className="avatar">
          <img src={props.Avatar} alt="jj" />
        </div>
        <h1 className="repo-title">{props.title}</h1>
        <div className="owner">{props.owner}</div>
      </div>
      {/* <div className="index">0{props.index + 1}</div> */}
      <br></br>
      <p>{props.description ? props.description : "No description added"}</p>
      <Link to={`/repos/${props.title}`} className="more">
        CHECK OUT REPO
      </Link>
    </div>
  );
}
export default RepoDetails;
