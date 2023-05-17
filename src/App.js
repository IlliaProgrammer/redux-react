
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar';
import AppRoute from './components/AppRoute';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-700">
     <BrowserRouter>
          <NavBar/>
          <AppRoute/>
          <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
