import React from "react";

const Strike: React.FunctionComponent = (props) => {
  const { children } = props;
  return (
    <>
      &nbsp;
      <span style={{ textDecoration: "line-through" }}>{children}</span>
      &nbsp;
    </>
  );
};

export default Strike;
