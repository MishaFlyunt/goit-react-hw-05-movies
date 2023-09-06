import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 25px 25px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const ContainerImg = styled.div`
  min-width: 20%;
`;

export const Info = styled.div`
  padding: 15px 60px;
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
`;

export const Title = styled.h1`
  color: rgb(139, 109, 54);
  margin-bottom: 15px;
`;

export const Overview = styled.h2`
  color: rgb(210, 106, 90);
  margin-bottom: 10px;
`;

export const Genres = styled.h2`
  color: rgb(210, 106, 90);
  margin-bottom: 10px;
`;

export const OverviewText = styled.p`
  margin-bottom: 10px;
  color: rgb(137, 135, 121);
  font-size: 20px;
`;

export const GenresText = styled.p`
  color: rgb(137, 135, 121);
  font-size: 20px;
`;

export const Rating = styled.p`
  margin-bottom: 10px;
  color: rgb(210, 106, 90);
  font-size: 20px;
`;
