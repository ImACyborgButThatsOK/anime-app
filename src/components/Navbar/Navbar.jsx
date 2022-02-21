import { ArrowDropDown } from "@material-ui/icons";
import {
  Container,
  Left,
  Logo,
  NavItem,
  Right,
  SubItem,
  SubItems,
  SubItemsContainer,
  Wrapper,
} from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Super Animes</Logo>

          <NavItem>Series</NavItem>
          <NavItem>Filmes</NavItem>
          <SubItemsContainer>
            <NavItem className="categories">
              Categorias
              <ArrowDropDown className="icon" />
            </NavItem>

            <SubItems>
              <SubItem>Romance</SubItem>
              <SubItem>Ação</SubItem>
              <SubItem>Histórico</SubItem>
              <SubItem>Mistério</SubItem>
              <SubItem>Shounen</SubItem>
              <SubItem>Aventura</SubItem>
              <SubItem>Slice-of-life</SubItem>
              <SubItem></SubItem>
            </SubItems>
          </SubItemsContainer>
        </Left>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
