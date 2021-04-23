import requests from './requests';
import './App.css';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Row title="Netflix" fetchUrl={requests.fetchTrending}></Row>
     </div>
  );
}

export default App;
