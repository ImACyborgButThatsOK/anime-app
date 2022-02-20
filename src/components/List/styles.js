import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  padding: 50px 0px;

  overflow: hidden;
`;

export const Arrow = styled.button`
  position: absolute;
  border: none;
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 50%;

  top: 0;
  left: ${(props) => props.direction === "left" && "5px"};
  right: ${(props) => props.direction === "right" && "5px"};
  margin: auto;
  bottom: 0;
  z-index: 999;

  cursor: pointer;

  .icon {
    color: black;
    font-size: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 300px;

  transition: all 1s ease;
  transform: translateX(-${(props) => props.index * 100}vw);
`;

export const Info = styled.div`
  opacity: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.4s ease;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  width: 500px;
  height: 100%;

  border: 1px solid black;

  position: relative;

  cursor: pointer;

  &:hover ${Info} {
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
  flex: 2;
  width: 450px;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const Title = styled.h1``;
