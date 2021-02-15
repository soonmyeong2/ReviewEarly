import "./css/App.scss";

import HomeContainer from "./containers/HomeContainser";
import TopBarContainer from "./containers/TopBarContainer";
function App() {
  return (
    <div className="app">
      <TopBarContainer />
      <div className="contents-box">
        <HomeContainer />
      </div>
    </div>
  );
}

export default App;
