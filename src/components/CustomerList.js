import React, { Component } from "react";
import { getCustomers } from "../services/api";

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
  }

  componentDidMount() {
    this.fetchCustomers();
  }

  fetchCustomers = () => {
    getCustomers()
      .then((res) => this.setState({ customers: res.data.data }))
      .catch((err) => console.error("Error fetching customers:", err));
  };

  render() {
    const { customers } = this.state;
    return (
      <ul>
        {customers.map((c) => (
          <li key={c.id}>
            {c.first_name} {c.last_name} - {c.phone_number}
          </li>
        ))}
      </ul>
    );
  }
}

export default CustomerList;
