import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login";
import { login } from "../redux/reducers/auth.js";

export default function LoginContainer() {
  const dispatch = useDispatch();
  const [data, setdata] = useState("");
  const user = useSelector((state) => state.user);
  console.log(user)
  const getlogin = (data) => {
    setdata(data)
  
  }
  React.useEffect(() => {
    dispatch(login(data.email, data.password));
  }, [dispatch]);

  return <Login login={getlogin} />;
}
