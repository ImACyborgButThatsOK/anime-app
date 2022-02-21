import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #000000;

  z-index: 999;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* .categories {
    color: aqua;
    filter: brightness(0.7);
  } */
`;

export const Logo = styled.h1`
  margin: 0px 50px;
  color: #118ab2;
`;

export const NavItem = styled.a`
  margin-right: 20px;

  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }

  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 20px;
  }
`;

export const SubItems = styled.div`
  opacity: 0;
  margin-top: 20px;
  position: absolute;
  left: -10px;
  display: none;

  width: 400px;
  background-color: black;
`;

export const SubItemsContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  &:hover ${SubItems} {
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const SubItem = styled.span`
  padding: 10px;

  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    filter: brightness(0.7);
  }
`;

export const Right = styled.div``;
