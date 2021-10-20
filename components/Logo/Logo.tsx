import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const propTypes = {
  height: PropTypes.number,
};

type LogoPropsT = PropTypes.InferProps<typeof propTypes>;

const Logo: React.FunctionComponent<LogoPropsT> = ({ height }) => {
  const logoHeight = height || 46;
  return (
    <div data-testid="logo-testid">
      <Image
        src="/justin.png"
        alt="Logo - Justin"
        width={237}
        height={logoHeight}
      />
      &nbsp;
      <Image src="/lee.png" alt="Logo - Lee" width={127} height={logoHeight} />
      &nbsp;
      <Image
        src="/morgan.png"
        alt="Logo - Morgan"
        width={327}
        height={logoHeight}
      />
    </div>
  );
};

Logo.propTypes = propTypes;

export default Logo;
