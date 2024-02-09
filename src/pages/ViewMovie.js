import { useParams } from "react-router-dom";

const ViewMovie = () => {
  const getparams = useParams();

  const getId = getparams.id; 
  return <>This is viewPage {getId}</>;
};
export default ViewMovie;
