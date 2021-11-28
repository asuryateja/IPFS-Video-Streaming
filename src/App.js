import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Upload from './components/Upload';
import { Routes, Route} from "react-router-dom";
import Stream from './components/Stream';

function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/stream" element={<Stream />} />
      </Routes>
     
    </div>
    
  );
}

export default App;
