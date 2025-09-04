import "./styles.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerListPage from "./pages/CustomerListPage";
import CustomerFormPage from "./pages/CustomerFormPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<CustomerListPage />} />
          <Route path="/customers/new" element={<CustomerFormPage />} />
          <Route path="/customers/:id/edit" element={<CustomerFormPage />} />
          <Route path="/customers/:id" element={<CustomerDetailPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
