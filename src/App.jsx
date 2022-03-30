import "./app.css";
import Container from "./layout/Container";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import NFT_Card from "./UI/Cards/NFT_Card";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Hero />
      </Container>
    </div>
  );
}

export default App;
