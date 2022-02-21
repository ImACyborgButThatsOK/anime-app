import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  overflow: hidden;

  user-select: none;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "5px"};
  right: ${(props) => props.direction === "right" && "5px"};
  margin: auto;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  background-color: #242423;
  border: none;

  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    color: white;
    font-size: 30px;
  }

  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  transform: ${(props) => `translateX(-${props.index * 100}vw)`};

  transition: all 1s ease;
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0b090a;
  display: flex;
  background-color: ${(props) => `#${props.bg}`};
`;

export const ImgContainer = styled.div`
  flex: 1;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: end;
  justify-content: center;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const Info = styled.div`
  width: 100vw;
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #ffe8d6;
`;

export const Desc = styled.p`
  width: 70%;

  font-size: 18px;
`;

export const Button = styled.button`
  width: 40%;

  padding: 15px;

  background-color: transparent;
  border: 2px solid #800f2f;
  border-radius: 5px;
  color: white;

  font-size: 20px;
  font-weight: 500;

  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`;
