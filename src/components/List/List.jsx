import { animesList } from "./data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {
  Arrow,
  Container,
  Image,
  ImageContainer,
  Info,
  Slide,
  Title,
  Wrapper,
} from "./styles";
import { useState } from "react";

const List = () => {
  const [listIndex, setListIndex] = useState(0);

  const handleArrowLeft = () => {
    if (listIndex > 0) {
      setListIndex(listIndex - 1);
    } else {
      setListIndex(2);
    }
  };

  const handleArrowRight = () => {
    if (listIndex < 2) {
      setListIndex(listIndex + 1);
    } else {
      setListIndex(0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={handleArrowLeft}>
        <ArrowLeftOutlined className="icon" />
      </Arrow>
      <Wrapper index={listIndex}>
        {animesList.map((item) => (
          <Slide>
            <ImageContainer>
              <Image src={item.image} alt="" />
            </ImageContainer>

            <Info>
              <Title>{item.title}</Title>
            </Info>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={handleArrowRight}>
        <ArrowRightOutlined className="icon" />
      </Arrow>
    </Container>
  );
};

export default List;
