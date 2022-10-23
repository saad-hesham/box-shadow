import Countries from "./Component/Countries";
import Upper from "./Component/Upper";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Component/Details";


function App() {
  return (
    <div className="App">

<Routes>
<Route path="/" element={<Countries />} />
<Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
