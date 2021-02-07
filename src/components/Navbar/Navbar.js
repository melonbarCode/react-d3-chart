import { useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = (props) => {
  return useMemo(
    () => (
      <NavbarStyledWrapper>
        <Link className="link-item" to={"/scatter-chart"}>
          SCATTER CHART
        </Link>
        <Link className="link-item" to={"/bar-chart"}>
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
  margin-bottom: 30px;

  .link-item {
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
  }

  .link-item:hover {
    opacity: 0.5;
  }
`;
