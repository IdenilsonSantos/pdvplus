import styled from "styled-components";

export const ListProducts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 40px;
`;

export const CardProduct = styled.div`
  width: 190px;
  height: 100px;
  background: #f1f4f6;
  border: 1px solid #e3e8eb;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const CardProductInfo = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardProductInfoImage = styled.img`
  width: 70px;
  height: 70px;
  background: #f1f4f6;
  border: 1px solid #cdcecf;
  border-radius: 50px;
`;

export const CardProductInfoCod = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  color: #6b6f70;
`;

export const CardProductInfoDescPrice = styled.div`
width: 100px;
height: 100px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const CardProductInfoDesc = styled.span`
font-size: 12px;
`;

export const CardProductInfoPrice = styled.span`
font-size: 24px;
font-weight: 600;
color: #DE0000
`;


