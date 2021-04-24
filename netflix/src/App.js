import requests from "./requests";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      <Banner></Banner>
      <Row title="Trending now" fetchUrl={requests.fetchTrending} isLarge />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
