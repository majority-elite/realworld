import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import { Footer } from './components/Footer';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header isAuthenticated={false} />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/settings"></Route>
          <Route path="/article/:slug"></Route>
          <Route path="/editor/"></Route>
          <Route path="/editor/:slug"></Route>
          <Route path="/profile/:username"></Route>
          <Route path="/profile/:username/favorites"></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
