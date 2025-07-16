import "./App.css";
import Header from "./Components/layout/Header/Header";
import HeroSections from "./Components/main/HeroSection/HeroSection";
import UserForm from "./Components/main/users/UserForm/UserForm";

function App() {
  return (
    <>
      <Header />
      <HeroSections />
      <UserForm />
    </>
  );
}

export default App;
