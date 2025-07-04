import "./App.css";
import Header from "./Components/layout/Header/Header";
import HeroSections from "./Components/main/HeroSection/HeroSection";
import UserList from "./Components/users/UserList";

function App() {
  return (
    <>
      <Header />
      <HeroSections />
      <UserList />
    </>
  );
}

export default App;
