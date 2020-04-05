import React from "react";
import PropTypes from "prop-types";
import { HeaderWrapper, HeaderIcon, HeaderText } from "./style";

function Header({ title }) {
  const onClick = (e) => console.log(e.target);
  return (
    <HeaderWrapper>
      <HeaderIcon
        className="icon icon-arrow-lift"
        onClick={onClick}
      ></HeaderIcon>
      <HeaderText>{title}</HeaderText>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "主页",
};

export default Header;
