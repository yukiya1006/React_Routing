import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <>
      <h1>Page2です</h1>
      <Link to="/page2/1">Url Paramater</Link>
      <br />
      <Link to="/page2/1?name=hoge">Query Paramater</Link>
    </>
  );
};
