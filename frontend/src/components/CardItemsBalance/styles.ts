import styled from "styled-components";

export const CardsBalance = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const CardItemBalance = styled.div`
width: 280px;
  height: 150px;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemBalanceTitle = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 500;
`;

export const ItemBalanceValue = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 400;

  small {
    font-size: 18px;
  }
`;

