import './App.css';
import Home from './pages/Home';
import { store } from './app/store';
import { Provider } from 'react-redux'
import AddRemove from './components/AddRemove';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        <AddRemove/>
      </div>
    </Provider>
  );
}

export default App;

