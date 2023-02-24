import React, { memo } from "react";

function SignIn({ data }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (data.name === e.target.login.value) {
            if (data.ConfirmPassword === e.target.signinPassword.value) {
              alert("To'g'ri");
            } else {
              alert("xato");
            }
          } else {
            alert("no name");
          }

          console.log(data.name);
        }}
      >
        <input type="text" name="login" />
        <input type="text" name="signinPassword" />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default memo(SignIn);
