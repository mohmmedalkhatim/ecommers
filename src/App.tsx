import { Outlet } from 'react-router-dom';
import './index.css';
import Header from './components/Header';

function App() {
  console.log("hello")
  return (
    <>
      <Header className=' bg-sky-600 text-white' />
      <Outlet />
    </>
  );
}
export default App;
