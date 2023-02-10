// importing pages
import Dashboard from "./pages/Dashboard";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={< Dashboard />} />
          <Route exact path="/page2" element={< Page2 />} />
          <Route exact path="/page3" element={< Page3 />} />
          <Route exact path="/page4" element={< Page4 />} />
          <Route exact path="/page5" element={< Page5 />} />
          <Route exact path="/page6" element={< Page6 />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
