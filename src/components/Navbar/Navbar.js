import { useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = (props) => {
  return useMemo(
    () => (
      <NavbarStyledWrapper>
        <Link className="link-item" to={`${process.env.PUBLIC_URL}/`}>
          SCATTER CHART
        </Link>
        <Link className="link-item" to={`${process.env.PUBLIC_URL}/bar-chart`}>
          BAR CHART
        </Link>
      </NavbarStyledWrapper>
    ),
    []
  );
};

export default Navbar;

const NavbarStyledWrapper = styled.div`
  padding: 20px;
  box-sizing: border-box;
  border-bottom: #8e8883 1px solid;
  margin: 30px;

  .link-item {
    display: inline-block;
    list-style: none;
    font-style: none;
    text-decoration: none;
    margin: 20px;
    padding: 15px;
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    border: #8e8883 1px solid;
  }

  .link-item:hover {
    opacity: 0.5;
  }
`;
