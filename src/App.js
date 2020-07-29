import React, { Component } from "react";
import { Provider } from "react-redux";

import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import Message from "./components/Message";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import store from "./store";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <main id="mainContainer">
            <div className="container">
              <Header></Header>
              <ProductsContainer></ProductsContainer>
              <Message></Message>
              <Cart></Cart>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </Provider>
    );
  }
}

export default App;
