import React from "react";
import PropTypes from "prop-types";
import MuiLink from "next/link";

const propTypes = {
  uri: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  text: PropTypes.string,
};

type LinkPropsT = PropTypes.InferProps<typeof propTypes>;

const Link: React.FunctionComponent<LinkPropsT> = (props) => {
  const { uri, text, isExternal, children } = props;

  const href = isExternal ? uri : `/${uri.toLowerCase()}`;

  return (
    <MuiLink href={href}>
      <a
        target={isExternal ? "_blank" : ""}
        rel={isExternal ? "noreferrer" : ""}
      >
        <b>{children || text}</b>
      </a>
    </MuiLink>
  );
};

export default Link;
