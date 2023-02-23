import React, { memo } from "react";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";

function Register() {
  const data = JSON.parse(localStorage.getItem("user"));

  console.log(data);
  const onFormValue = (e) => {
    e.preventDefault();
    if (e.target.password.value === e.target.ConfirmPassword.value) {
      const targetData = e.target;
      const value = {};
      for (let i = 0; i < targetData.length; i++) {
        if (targetData[i].name !== "") {
          value[targetData[i].name] = targetData[i].value;
        }
        localStorage.setItem("user", JSON.stringify(value));
      }
      return value;
    } else {
      alert("dovdir xato qilding");
    }
  };

  return (
    <>
      <form className="register" onSubmit={(e) => onFormValue(e)}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <input type="text" name="ConfirmPassword" placeholder="Password" />
        <input type="submit" value="submit" />
      </form>
      <SignIn data={data} />
      <ForgotPassword data={data} />
    </>
  );
}

export default memo(Register);
