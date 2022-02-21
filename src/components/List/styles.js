import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

export const Animes = styled.div`
  margin: 50px 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0b090a;
`;

export const Info = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  /* margin-bottom: 10px; */
  margin-left: 10px;

  font-size: 20px;
`;

export const Button = styled.button`
  margin-right: 20px;
  border: 1px solid white;
  background-color: transparent;

  color: white;

  padding: 5px;

  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    filter: brightness(0.7);
  }
`;
