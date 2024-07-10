import {useLocation} from "react-router-dom";

const CreatePeoplePage = () => {
  const {pathname} = useLocation();
  return (
    <div>This is Create Pizza Page-{pathname}</div>
  )
};

export default CreatePeoplePage;
