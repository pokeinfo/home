import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";

import "./scss/global/master.scss";

const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
