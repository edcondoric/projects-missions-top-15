import logo from './logo.svg';
import './App.css';
import {Home} from './pages/Home'
import {About} from './pages/About'
import {ProductDetail} from './pages/ProductDetail'
import {Navigate} from './components/Navigate'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
        <Navigate />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/home" element = {<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
