import PropTypes from "prop-types";

const InnerContainer = ({ children, flexGrow = 1 }) => {
  const flexGrowClass =
    {
      1: "grow",
      2: "grow-[2]",
      3: "grow-[3]",
    }[flexGrow] || "grow";

  return <div className={`p-4 ${flexGrowClass}`}>{children}</div>;
};

InnerContainer.propTypes = {
  children: PropTypes.node.isRequired,
  flexGrow: PropTypes.oneOf([1, 2, 3]),
};

export default InnerContainer;
