import React, { Component } from "react";

class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: props.customer?.first_name || "",
      last_name: props.customer?.last_name || "",
      phone_number: props.customer?.phone_number || "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { first_name, last_name, phone_number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={first_name}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={last_name}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={phone_number}
          onChange={this.handleChange}
          required
        />
        <button type="submit">
          {this.props.customer ? "Update" : "Add"} Customer
        </button>
      </form>
    );
  }
}

export default CustomerForm;
