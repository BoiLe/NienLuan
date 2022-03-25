import axios from "axios";

const URL = "http://localhost:5000";
export const fetchProduct = async (page) =>
  await axios.get(`${URL}/product?page=0`);
export const logInAPI = async (email, password) =>
  await axios.post(`${URL}/auth/login`, {
    email,
    password,
  });
export const registerAPI = async (email, password) => {
  await axios.post(`${URL}/auth/register`, {
    email,
    password,
  });
};
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
