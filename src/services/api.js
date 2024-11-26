import axios from "axios";

// Base URL for user management API
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch user list from the server
export const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data; // Returns the fetched user data as an array
};

// Add a new user to the server
export const addUser = async (userData) => {
    const response = await axios.post(API_URL, userData);
    return response.data;
};

// Update existing user details
export const updateUser = async (id, userData) => {
    const response = await axios.put(`${API_URL}/${id}`, userData);
    return response.data;
};

// Delete a user from the server
export const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
