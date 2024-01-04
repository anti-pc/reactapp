import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="container">
      <Navbar title = "User App" altTitle = "Another Title" />
      <Navbar altTitle = "Another Title" />
      <hr/>

      <User
      name = "Aslıhan"
      salary = "5000"
      department = "Bilişim"
      />

      <User
      name = "Oktay"
      salary = "4000"
      department = "Bilişim"
      />

      <User
      name = "Bilgi"
      department = "Eğitim"
      />
    </div>
  );
}

export default App;
