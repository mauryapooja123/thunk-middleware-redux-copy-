import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormData from "./component/pages/FormData";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/form" element={<Form />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<FormData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
