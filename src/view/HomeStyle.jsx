import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  padding: 15px;
  margin: auto;
`;

export const Header = styled.div`
  max-width: 1200px;
  padding: 15px;
  margin: auto;
  display: flex;
  align-items: center;
  img {
    height: 60px;
  }
`;

export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
`;

export const Row = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  > span {
    width: 45%;
  }
`;
export const AddBreak = styled.button`
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 17px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
`;
export const BreaksTitle = styled.h4`
  font-weight: 500;
  text-align: center;
  margin: 20px;
  font-size: 18px; ;
`;
