import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { Navbar } from "../components/ui/NavBar";
import { LoginScreen } from "../components/login/LoginScreen";
import { SearchScreen } from "../components/search/SearchScreen";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar>Welcome to React Router!</Navbar>
      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}