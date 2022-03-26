import styled from "styled-components";

export const Container = styled.div``;

export const SideOrder = styled.div`
z-index: 1000;
position: fixed;
right: 300px;
width: 300px;
height: 100%;
margin-right: -300px;
overflow-y: auto;
background-color: #F4F6F8;
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

h1 {
  color: #292C48
}
`;

export const CodeProductForm = styled.form`
  height: auto;
  width: 99%;
`;

export const CodeProductFormInput = styled.input`
  width: 98%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-left: 5px;
  outline: none;
  color: #bfbbbb;
  font-size: 14px;

  &:hover {
    outline: 1px solid #bfbbbb;
  }
`;

export const ProductOrderList = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const CardProduct = styled.div`
  height: 100px;
  background: #fff;
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
  justify-content: space-around;
  align-items: center;
`;

export const CardProductInfoImage = styled.img`
  width: 40px;
  height: 40px;
  background: #f1f4f6;
  border: 1px solid #cdcecf;
  border-radius: 50px;
`;

export const CardProductInfoCod = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  color: #6b6f70;
`;

export const CardProductInfoDescPrice = styled.div`
width: 100px;
height: 100px;
display: flex;
flex-direction: column;
justify-content: space-around;

`;

export const CardProductInfoDesc = styled.span`
font-size: 12px;
`;

export const CardProductInfoPrice = styled.span`
font-size: 20px;
font-weight: 600;
color: #DE0000
`;

export const CardProductValueActions = styled.span`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CardProductQtd = styled.span`
  font-size: 30px;
  margin-top: 20px;
`;

export const CardProductButtons = styled.div`
    
    .btnDelete {
      background: #DE0000;
      color: #FFF
    }

    .btnDelete:hover {
      background-color: #ff0000
    }
`;

export const ActionButton = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  cursor: pointer;
  background-color: #cdcdcd;
  border:none;
  border-radius: 4px;
  opacity: 0.8;

  &:hover {
    background-color: #dbdbdb
  }
  
  svg {
    margin-top: 3px
  }
`;

export const SideOrderMenu = styled.div`
  width: 100%;
  height: 200px;
`;

export const SideOrderMenuTotal = styled.div`
  display: flex;
  justify-content: space-between;
  
  span {
    color: #DE0000;
    font-size: 24px;
    font-weight: 500;
    margin-top: 20px
  }
`;

export const SideOrderMenuActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px
`;

export const LabelButton = styled.div`
font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`;

export const LinkBtn = styled.button`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  background: rgb(251 251 251);
    background: linear-gradient( 180deg, rgb(235 235 235) 0%, rgba(240,242,245,1) 100% );
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out linear;
  &:hover {
    background: rgb(241, 241, 241);
    background: linear-gradient(
      180deg,
      rgba(241, 241, 241, 1) 0%,
      rgba(240, 242, 245, 1) 100%
    );
  }
`;


