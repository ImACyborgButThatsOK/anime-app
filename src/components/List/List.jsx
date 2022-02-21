import { animesList } from "./data";
import { Button, Container, Info, Title, Animes } from "./styles";
import ListItem from "../ListItem/ListItem";

const List = () => {
  return (
    <Container>
      <Animes>
        <Info>
          <Title>Animes populares</Title>

          <Button>Ver mais</Button>
        </Info>

        <ListItem data={animesList} />
      </Animes>

      <Animes>
        <Info>
          <Title>Últimos episódios</Title>

          <Button>Ver mais</Button>
        </Info>

        <ListItem data={animesList} />
      </Animes>

      <Animes>
        <Info>
          <Title>Animes recentes</Title>

          <Button>Ver mais</Button>
        </Info>

        <ListItem data={animesList} />
      </Animes>
    </Container>
  );
};

export default List;
