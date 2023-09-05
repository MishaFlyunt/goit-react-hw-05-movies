import { BiSearchAlt } from 'react-icons/bi';
import {
  SearchbarForm,
  SearchForm,
  SearchFormInput,
  ButtonStyled,
} from './ MoviesSearch.styled';

export const MoviesSearch = ({ submit }) => {
  return (
    <SearchbarForm>
      <SearchForm onSubmit={submit}>
        <ButtonStyled>
          <BiSearchAlt size={36} />
        </ButtonStyled>
        <SearchFormInput
          type="text"
          name="query"
          placeholder="Search movies"
          autoFocus
        />
      </SearchForm>
    </SearchbarForm>
  );
};
