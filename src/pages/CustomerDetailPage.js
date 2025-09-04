import React, { Component } from "react";
import {
  getCustomerById,
  getAddresses,
  createAddress,
  updateAddress,
} from "../services/api";
import AddressList from "../components/AddressList";
import AddressForm from "../components/AddressForm";

class CustomerDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = { customer: null, addresses: [], editingAddress: null };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getCustomerById(id).then((res) => this.setState({ customer: res.data }));
    this.fetchAddresses();
  }

  fetchAddresses = () => {
    const { id } = this.props.match.params;
    getAddresses(id).then((res) => this.setState({ addresses: res.data }));
  };

  handleAddressSubmit = (data) => {
    const { editingAddress } = this.state;
    const { id } = this.props.match.params;
    if (editingAddress) {
      updateAddress(editingAddress.id, data).then(() => this.fetchAddresses());
    } else {
      createAddress(id, data).then(() => this.fetchAddresses());
    }
    this.setState({ editingAddress: null });
  };

  handleEditAddress = (address) => this.setState({ editingAddress: address });

  render() {
    const { customer, addresses, editingAddress } = this.state;
    if (!customer) return <div>Loading...</div>;
    return (
      <div>
        <h1>
          {customer.first_name} {customer.last_name}
        </h1>
        <AddressList
          addresses={addresses}
          onEdit={this.handleEditAddress}
          onRefresh={this.fetchAddresses}
        />
        <AddressForm
          address={editingAddress}
          onSubmit={this.handleAddressSubmit}
        />
      </div>
    );
  }
}

export default CustomerDetailPage;
