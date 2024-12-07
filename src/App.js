
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Single from './pages/single/Single';
import New from './pages/new/New';
import { userInputs } from './fromSource.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
