import React from "react";
import { NavWrapper, NavItem } from "./style";

function Nav(props) {
  return (
    <NavWrapper>
      <NavItem>
        <i className="icon icon-hot"></i>
        首页
      </NavItem>
      <NavItem>
        <i className="icon icon-all"></i>
        分类
      </NavItem>
      <NavItem>
        <i className="icon icon-cart-full"></i>
        购物车
      </NavItem>
      <NavItem>
        <i className="icon icon-account"></i>
        我的
      </NavItem>
    </NavWrapper>
  );
}

export default Nav;
