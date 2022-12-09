import './App.css';
import List from './components/List';
import Countries from './components/Countries';
function App() {

  return (
    <div className='container'>
      <Countries/>
      <h1>Welcome</h1>
      <List />
    </div>
  );
}

export default App;
