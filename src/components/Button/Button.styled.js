import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 14px 15px;
  background-color: rgb(222, 88, 21);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  width: 140px;
  color: #fff;
  border: 0;
  border-radius: 15px;
  text-decoration: none;
  margin: 0 auto;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: rgb(45, 136, 233);
  }
  &:focus {
    background-color: rgb(45, 136, 233);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
