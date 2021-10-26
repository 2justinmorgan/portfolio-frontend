import React from "react";

const ParagraphTitle: React.FunctionComponent = (props) => {
  const { children } = props;
  return (
    <div>
      <b>{children}</b>:
    </div>
  );
};

export default ParagraphTitle;
