import React, { Component } from "react";
import CustomerForm from "../components/CustomerForm";
import {
  createCustomer,
  updateCustomer,
  getCustomerById,
} from "../services/api";

class CustomerFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = { customer: null };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      getCustomerById(id).then((res) => this.setState({ customer: res.data }));
    }
  }

  handleSubmit = (data) => {
    const { customer } = this.state;
    if (customer) {
      updateCustomer(customer.id, data).then(() => alert("Customer updated!"));
    } else {
      createCustomer(data).then(() => alert("Customer created!"));
    }
  };

  render() {
    return (
      <CustomerForm
        customer={this.state.customer}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default CustomerFormPage;
