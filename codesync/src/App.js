import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <>
      <div>
      <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#4aed88',
              color: '#fff',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
            },
            success: {
              duration: 3000, // Set the duration for success toast messages
            },
          }}
        />
      </div>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/editor/:roomId'
             element={<EditorPage/>}
             ></Route>
          </Routes>    
       </BrowserRouter>
    </>
  );
}

export default App;
