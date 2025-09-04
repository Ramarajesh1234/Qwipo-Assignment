import React, { Component } from "react";
import { deleteAddress } from "../services/api";

class AddressList extends Component {
  handleDelete = (id) => {
    deleteAddress(id).then(() => this.props.onRefresh());
  };

  render() {
    const { addresses } = this.props;
    return (
      <ul>
        {addresses.map((a) => (
          <li key={a.id}>
            {a.address_details}, {a.city}, {a.state} - {a.pin_code}
            <button onClick={() => this.props.onEdit(a)}>Edit</button>
            <button onClick={() => this.handleDelete(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default AddressList;
