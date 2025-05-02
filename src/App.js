import logo from './logo.svg';
import Layout from './layout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registeration from './Registeration';
import './App.css';

function App() {
  return (
    <Router>
    <Layout>
        <Routes>
           <Route path="/" element={<Registeration/>}   />

           <Route path="/add" element    />
        </Routes>
    </Layout>
</Router>

)
}

export default App;
 
