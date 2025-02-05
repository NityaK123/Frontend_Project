import './App.css';
import Home from './pages/Home';
//import { store } from './app/store';
import { store } from './reduxToolkit/store';
import { Provider } from 'react-redux'
import AddRemove from './components/AddRemove';
import Counter from './components/Counter';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        {/* <AddRemove/> */}
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;

