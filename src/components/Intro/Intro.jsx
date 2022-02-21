import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import { animes } from "./data";
import {
  Arrow,
  Button,
  Container,
  Desc,
  Image,
  ImgContainer,
  Info,
  Slide,
  Title,
  Wrapper,
} from "./styles";

const Intro = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleArrowLeft = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(3);
    }
  };

  const handleArrowRight = () => {
    if (slideIndex < 3) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  useEffect(() => {
    const time = setInterval(() => {
      if (slideIndex < 3) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(0);
      }
    }, 5000);

    return () => {
      clearInterval(time);
    };
  }, [slideIndex]);

  return (
    <Container>
      <Arrow direction={"left"} onClick={handleArrowLeft}>
        <ArrowLeftOutlined className="icon" />
      </Arrow>
      <Wrapper index={slideIndex}>
        {animes.map((data) => (
          <Slide key={data.id} bg={data.bg}>
            <ImgContainer>
              <Image src={data.image} alt={data.title} />
            </ImgContainer>

            <Info>
              <Title>{data.title}</Title>
              <Desc>{data.desc}</Desc>
              <Button>ASSISTIR</Button>
            </Info>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction={"right"} onClick={handleArrowRight}>
        <ArrowRightOutlined className="icon" />
      </Arrow>
    </Container>
  );
};

export default Intro;
