import Home from "./Pages/Home";
import Bollywood from "./Pages/Bollywood";
import Fitness from "./Pages/Fitness";
import Gaming from "./Pages/Gaming";
import Technology from "./Pages/Technology";
import Hollywood from "./Pages/Hollywood";
import Store from "./Utilities/ContextApi/ContextData";
import RouteCompo from "../src/Utilities/Routes/RouteCompo";
// import "./global1.css";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Store>
        <RouteCompo>
          <Home />
          <Bollywood />
          <Hollywood />
          <Technology />
          <Fitness />
          <Gaming />
        </RouteCompo>
        <Footer />
      </Store>
    </div>
  );
}

export default App;
