import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Link } from 'react-router-dom';

function App() {

  return (
     <BrowserRouter>
          <nav>
            <Link to="/" >Home</Link> |
            <Link to="/counter">Counter</Link>
          </nav>
        <AppRoutes/>
     </BrowserRouter>
  );
}

export default App;

