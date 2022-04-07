import axios from "axios";
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:5000";
export const fetchProduct = async (page) =>
  await axios.get(`${URL}/product?page=0`);
export const createProduct = async (payload) =>
  await axios.post(`${URL}/product`, payload);
export const deleteProduct = async (productId) =>
  await axios.delete(`${URL}/product/${productId}`);

export const logInAPI = async (email, password) =>
  await axios
    .post(`${URL}/auth/login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
export const registerAPI = async (email, password, phone_number) => {
  await axios.post(`${URL}/auth/register`, {
    email,
    password,
    phone_number,
  });
};
export const logoutAPI = async (email, password) =>
  await axios.post(`${URL}/auth/login`, {
    email,
    password,
  });
// export default function fetchAuth(){
//     const login = async (email, password) => {
//         const response = await axios.post(`${URL}/auth/login`, {
//           email,
//           password,
//         });
//         return { token: response.data.accessToken };
//       };
//     const register = async (email, password) => {
//         await axios.post(`${URL}/auth/register`, {
//           email,
//           password,
//         });
//       };
// }
