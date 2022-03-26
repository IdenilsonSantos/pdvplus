import styled from "styled-components";

export const Container = styled.div``;

export const SideNav = styled.div`
z-index: 1000;
position: fixed;
left: 250px;
width: 60px;
height: 100%;
margin-left: -250px;
overflow-y: auto;
background-color: #00c27a;
padding: 10px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
`;

export const SideNavLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const SideNavLinks = styled.div`
  width: 50px;
  height: 70%;
  display: flex;
  flex-direction: column;
`;

export const LinkBtn = styled.button`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  background: rgb(194, 194, 194);
  background: linear-gradient(
    180deg,
    rgba(194, 194, 194, 1) 0%,
    rgba(240, 242, 245, 1) 100%
  );
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
