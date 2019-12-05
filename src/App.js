import React, { Fragment, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound";
import Modal from "./components/Modal";

import { Provider } from "react-redux";
import Store from "./Store";

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Provider store={Store}>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={NotFound} />
          <Modal hide={showModal} show={() => setShowModal(true)} />
        </Switch>
      </Fragment>
    </Provider>
  );
};
