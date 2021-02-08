import { useDispatch } from "react-redux";
import Home from "../components/Home";
import { changeComponent } from "../modules/route";
// import Home2 from "../components/Home2";
export default function HomeContainer() {
  const dispatch = useDispatch();
  const onChangeComponent = (component) => dispatch(changeComponent(component));

  return (
    <>
      <Home onChangeComponent={onChangeComponent} />
    </>
  );
}
