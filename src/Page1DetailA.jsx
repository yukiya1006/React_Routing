import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();

  const history = useHistory();
  const onClickBack = () => history.goBack();

  console.log(state);

  return (
    <>
      <h1>Page1DetailAです</h1>
      <br />
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};
