import PropTypes from "prop-types";

const Layout = (props) => {
  const { children } = props;
  return <div className="flex flex-col items-center mt-20">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
