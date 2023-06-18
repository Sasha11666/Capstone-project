import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Booking from "./components/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/booking">
                <Booking />
              </Route>
              <Route path="/confirm">
                <ConfirmedBooking />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
