import { Outlet } from 'react-router-dom';
import './index.css';
import './main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/aside';

function App() {
  return (
    <>
      <Header />
      <div className="pt-[7rem]">
        <Outlet />
      </div>
      <Footer />
      <Aside />
    </>
  );
}
export default App;
