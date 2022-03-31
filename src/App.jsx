import "./app.css";
import Container from "./layout/Container";
import Auctions from "./sections/Auctions/Auctions";
import Discover from "./sections/Discover/Discover";
import GettingStarted from "./sections/GettingStarted/GettingStarted";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Hero />
        <Auctions />
        <GettingStarted />
        <Discover />
      </Container>
    </div>
  );
}

export default App;
