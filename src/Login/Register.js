import React, { memo, useState } from "react";
import SignIn from "./SignIn";

function Register() {
  const [arr, setArr] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  const onFormValue = (e) => {
    e.preventDefault();
    if (e.target.password.value === e.target.ConfirmPassword.value) {
      const targetData = e.target;
      const value = {};
      for (let i = 0; i < targetData.length; i++) {
        if (targetData[i].name !== "") {
          value[targetData[i].name] = targetData[i].value;
          setArr([...arr, { ...value }]);
        }
        localStorage.setItem("user", JSON.stringify([...arr, { ...value }]));
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
      {arr.map((item, i) => {
        return (
          <div key={i}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.ConfirmPassword}</p>
          </div>
        );
      })}
      <SignIn data={arr} />
    </>
  );
}

export default memo(Register);
