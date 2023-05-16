import { FC } from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import { Provider } from 'react-redux';
import './App.css';

//components 
import FirstTask from './components/FirstTask/FirstTask';
import SecondTask from './components/SecondTask/SecondTask';

import store from './store/index';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<FirstTask />} />
            <Route path="/secondTask" element={<SecondTask />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;