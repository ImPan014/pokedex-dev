import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen } from "./routes/HomeScreen";
import { AllPokemon } from "./routes/allPokemon";
import { TypeTable } from "./routes/typeTable";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/allPokemon" element={<AllPokemon></AllPokemon>}></Route>
        <Route path="/typeTable" element={<TypeTable></TypeTable>}></Route>
        <Route path="/*" element={<Navigate to={"/"} />}></Route>
      </Routes>
    </>
  );
}

export default App;
