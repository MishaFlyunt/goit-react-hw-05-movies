import { ButtonStyled, Container } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <Container>
      <ButtonStyled onClick={loadMore}>Load More</ButtonStyled>
    </Container>
  );
};
