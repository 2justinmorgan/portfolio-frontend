import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const paddingPropTypes = {
  top: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
};

const propTypes = {
  padding: PropTypes.shape(paddingPropTypes),
};

type PaddingPropT = PropTypes.InferProps<typeof paddingPropTypes>;
interface ParagraphPropsT {
  padding?: PaddingPropT;
}

const Paragraph: React.FunctionComponent<ParagraphPropsT> = (props) => {
  const { padding, children } = props;

  const getPaddingStr = (p?: PaddingPropT): string =>
    p ? `${p.top}px ${p.right}px ${p.bottom}px ${p.left}px` : "0 0 20px 0";

  return (
    <div style={{ padding: getPaddingStr(padding) }}>
      <Typography component="span" variant="body2">
        {children}
      </Typography>
    </div>
  );
};

Paragraph.propTypes = propTypes;

export default Paragraph;
