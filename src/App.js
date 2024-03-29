import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
