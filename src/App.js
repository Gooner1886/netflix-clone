import "./App.css";
import Row from "./Row/Row";
import requests from "./requests";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.findNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.findTrending} />
      <Row title="Top Rated" fetchURL={requests.findTop} />
      <Row title="Action" fetchURL={requests.findActionMovies} />
      <Row title="Comedy" fetchURL={requests.findComedyMovies} />
      <Row title="Horror" fetchURL={requests.findHorrorMovies} />
      <Row title="Romance" fetchURL={requests.findRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.findDocumentaries} />
    </div>
  );
}

export default App;
