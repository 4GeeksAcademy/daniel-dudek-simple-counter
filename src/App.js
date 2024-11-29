import { useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import HomePageHeader from "./components/HomePageHeader";
import { Container } from "react-bootstrap";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const pageMap = {
    Home: <HomePage />,
    Counter: <CounterPage />,
  };

  return (
    <>
      <HomePageHeader currentPage={currentPage} pageSetter={setCurrentPage} />
      <Container>{pageMap[currentPage]}</Container>
    </>
  );
};

export default App;
