import React, { Component } from "react";

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address_details: props.address?.address_details || "",
      city: props.address?.city || "",
      state: props.address?.state || "",
      pin_code: props.address?.pin_code || "",
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { address_details, city, state, pin_code } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="address_details"
          value={address_details}
          onChange={this.handleChange}
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="city"
          value={city}
          onChange={this.handleChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="state"
          value={state}
          onChange={this.handleChange}
          placeholder="State"
          required
        />
        <input
          type="text"
          name="pin_code"
          value={pin_code}
          onChange={this.handleChange}
          placeholder="Pin Code"
          required
        />
        <button type="submit">
          {this.props.address ? "Update" : "Add"} Address
        </button>
      </form>
    );
  }
}

export default AddressForm;
