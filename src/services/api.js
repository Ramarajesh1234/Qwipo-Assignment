import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getCustomers = () => axios.get(`${API_URL}/customers`);
export const getCustomerById = (id) => axios.get(`${API_URL}/customers/${id}`);
export const createCustomer = (data) =>
  axios.post(`${API_URL}/customers`, data);
export const updateCustomer = (id, data) =>
  axios.put(`${API_URL}/customers/${id}`, data);
export const deleteCustomer = (id) =>
  axios.delete(`${API_URL}/customers/${id}`);

export const getAddresses = (customerId) =>
  axios.get(`${API_URL}/customers/${customerId}/addresses`);
export const createAddress = (customerId, data) =>
  axios.post(`${API_URL}/customers/${customerId}/addresses`, data);
export const updateAddress = (id, data) =>
  axios.put(`${API_URL}/addresses/${id}`, data);
export const deleteAddress = (id) => axios.delete(`${API_URL}/addresses/${id}`);
