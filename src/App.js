import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import Home from './components/Home';
import DragDrop from './components/DragDrop';
import Results from './components/Results';

const store = configureStore({
  reducer: rootReducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragdrop" element={<DragDrop />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
