import React from "react";
import { FiMonitor, FiBox, FiUser, FiSettings } from "react-icons/fi";

import { SideNav, SideNavLogo, SideNavLinks, LinkBtn } from "./styles";
import Logo from "../../assets/logo.png";

const SideBar: React.FC = () => {
  return (
    <>
      <SideNav>
        <SideNavLogo src={Logo} />
        <SideNavLinks>
          <LinkBtn>
            <FiMonitor size={20} />
          </LinkBtn>
          <LinkBtn>
            <FiBox size={20} />
          </LinkBtn>
          <LinkBtn>
            <FiUser size={20} />
          </LinkBtn>
          <LinkBtn>
            <FiSettings size={20} />
          </LinkBtn>
        </SideNavLinks>
      </SideNav>
    </>
  );
};

export default SideBar;
