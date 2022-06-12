import { useParams, useLocation } from "react-router-dom";

export const UrlParamater = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <>
      　<h1>UrlParamaterです</h1>
      <p>パラメーター: {id}</p>
      <p>クエリパラメーター: {query.get("name")}</p>
    </>
  );
};
