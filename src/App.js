import logo from './logo.svg';
import Layout from './layout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <Layout>
        <Routes>
           <Route path="/" element   />

           <Route path="/add" element    />
        </Routes>
    </Layout>
</Router>

)
}

export default App;
 
