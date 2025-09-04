import React, { Component } from "react";
import CustomerList from "../components/CustomerList";

class CustomerListPage extends Component {
  render() {
    return (
      <div>
        <h1>Customer List</h1>
        <CustomerList />
      </div>
    );
  }
}

export default CustomerListPage;
