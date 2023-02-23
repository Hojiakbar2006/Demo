import React, { memo } from "react";

function SignIn({ data }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (data.name === e.target.name.value) {
            if (data.ConfirmPassword === e.target.signinPassword.value) {
              alert("To'g'ri");
            } else {
              alert("xato");
            }
          } else {
            alert("no name");
          }
        }}
      >
        <input type="text" name="name" />
        <input type="text" name="signinPassword" />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default memo(SignIn);
