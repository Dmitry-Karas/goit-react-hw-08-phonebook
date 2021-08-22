import Section from "components/Section/Section";
import { StyledLink } from "./HomePage.styled";
import { Text } from "./HomePage.styled";
import Container from "components/Container/Container";
import { Title } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Title>Welcome to the Phonebook!</Title>
        <Text>
          In this app, you can store and manage your contacts.
          <br />
          To get started, you need to{"\u00A0"}
          <StyledLink to="/register">create an account</StyledLink>
          {"\u00A0"}or{"\u00A0"}
          <StyledLink to="/login">log in</StyledLink>
          {"\u00A0"}
          if you already have one.
        </Text>
      </Container>
    </Section>
  );
};

export default HomePage;
