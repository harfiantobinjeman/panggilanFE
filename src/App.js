import { BrowserRouter, Routes, Route } from "react-router-dom";
import PanggilanList from "./components/PanggilanList.js";


function App() {
  return (
    <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PanggilanList/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
