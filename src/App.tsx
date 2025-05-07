import { Outlet } from 'react-router-dom';
import './index.css';
import Header from './components/Header';

function App() {
  console.log("hello")
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default App;
