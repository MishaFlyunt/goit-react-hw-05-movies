import styled from 'styled-components';

export const SearchbarForm = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 40px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  border: 3px solid rgb(233, 167, 45);
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 14px;
  padding-right: 4px;

  & ::placeholder {
    font: inherit;
    font-size: 18px;
    color: rgb(244, 167, 104);
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  cursor: pointer;
`;
