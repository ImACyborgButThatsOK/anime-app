import { animesList } from "./data";
import { Button, Container, Info, Title, TopAnimes } from "./styles";
import ListItem from "../ListItem/ListItem";

const List = () => {
  return (
    <Container>
      <TopAnimes>
        <Info>
          <Title>Animes populares</Title>

          <Button>Ver mais</Button>
        </Info>

        <ListItem data={animesList} />
      </TopAnimes>
    </Container>
  );
};

export default List;
