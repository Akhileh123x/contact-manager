import axios from "axios";
import { ContactType } from "../_types/Contact";


const API_URL = "http://localhost:3001";

// Get all contacts for a user
export const getContacts = async (userId: string) => {
  console.log("USER ID:", userId);
  console.log(typeof userId);


  const response = await axios.get(
    `${API_URL}/contacts`
  );

  const contacts = response.data.filter(
    (contact: ContactType) => contact.userId === userId
  );

  return contacts;
};

// Get single contact
export const getContactById = async (id: string) => {
  const response = await axios.get(
    `${API_URL}/contacts/${id}`
  );

  return response.data;
};

// Create contact
export const createContact = async (contact: ContactType) => {
  const response = await axios.post(
    `${API_URL}/contacts`,
    contact
  );

  return response.data;
};

// Delete contact
export const deleteContact = async (id: string) => {
  const response = await axios.delete(
    `${API_URL}/contacts/${id}`
  );

  return response.data;
};

// Update contact
export const updateContact = async (
  id: string,
  contact: ContactType
) => {
  const response = await axios.put(
    `${API_URL}/contacts/${id}`,
    contact
  );

  return response.data;
};