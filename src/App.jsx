import { useRoutes } from "react-router-dom";

import route from "./router";
import AppBar from "@/cpns/app-bar";
import { AppWrapper } from "./style";

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <div className="main">
          {useRoutes(route)}
        </div>
        <div className="bar">
          <AppBar />
        </div>
      </div>
    </AppWrapper>
  );
}

export default App;
