import React, { memo, useState } from "react";

function ForgotPassword({ data }) {
  const [state, setState] = useState(false);

  return (
    <form>
      <input
        type="text"
        placeholder="name"
        name="login"
        onChange={(e) => {
          data.name.ConfirmPassword === e.target.value
            ? setState(true)
            : setState(false);
        }}
      />
      <input
        type="text"
        placeholder="new password"
        name="newPassword"
        style={state ? { visibility: "visible" } : { visibility: "hidden" }}
      />
      <input type="submit" value="changes" />
    </form>
  );
}

export default memo(ForgotPassword);
