import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import BaseRouter from "./routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { loadUser } from "./store/actions/auth";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Router>
            <Navbar />
            <BaseRouter />
            <Footer />
          </Router>
        </Fragment>
      </Provider>
    );
  }
}
export default App;
