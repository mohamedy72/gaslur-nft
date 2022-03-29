import "./app.css";
import Container from "./layout/Container";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";

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
