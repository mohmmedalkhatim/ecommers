import { Outlet } from 'react-router-dom';
import './index.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default App;
