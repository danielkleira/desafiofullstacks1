
import './App.css';
import GlobalStyle from './Styles/global';
import Routes from './Routes';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Providers from './Providers';


function App() {
  return (
    <>
    <Providers>
    <GlobalStyle/>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    <Routes/>
    </Providers>
    </>
  );
}

export default App;
