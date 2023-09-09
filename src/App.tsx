import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/#/"></Route>
          <Route path="/#/login"></Route>
          <Route path="/#/register"></Route>
          <Route path="/#/settings"></Route>
          <Route path="/#/article/:slug"></Route>
          <Route path="/#/editor/"></Route>
          <Route path="/#/editor/:slug"></Route>
          <Route path="/#/profile/:username"></Route>
          <Route path="/#/profile/:username/favorites"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
