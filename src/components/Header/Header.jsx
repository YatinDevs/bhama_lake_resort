import React from "react";
import { NavMobile } from "./nav-mobile";
import { NavDesktop } from "./nav-desktop";
import textLogo from "../../assets/images/logo/textLogo.png";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
function Header() {
  return (
    <ContentWrapper>
      {" "}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border z-40">
        <nav className="container flex items-center justify-between h-16">
          <div className="text-lg">
            <img src={textLogo} className="w-36 h-20" />
          </div>
          <NavMobile />
          <NavDesktop />
        </nav>
      </div>
    </ContentWrapper>
  );
}

export default Header;
