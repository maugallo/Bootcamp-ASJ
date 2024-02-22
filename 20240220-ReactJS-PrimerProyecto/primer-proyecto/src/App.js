import './App.css';

import HeaderComponent from './components/header/HeaderComponent';
import MainComponent from './components/main/MainComponent';

function App() {
  return (
    <div className='container-fluid px-0'>
      <HeaderComponent/>
      <MainComponent/>
    </div>
  );
}

export default App;
