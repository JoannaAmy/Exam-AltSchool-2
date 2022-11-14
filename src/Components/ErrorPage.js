import { useState } from "react";

const ErrorPage = () => {
  const [count, setCount] = useState(0);
  function myCount() {
    setCount((prevCount) => prevCount + 1);
  }
  if (count > 0) {
    throw new Error("Oops!! An Error occured");
  }
  return (
    <div className="ErrorPage">
      {/* <h2>{count}</h2> */}
      <button className="error" onClick={myCount}>CLICK ME</button>
    </div>
  );
};

export default ErrorPage;
