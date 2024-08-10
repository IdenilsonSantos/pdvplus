import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    padding: 15px;
    width: 65%;
    margin-left: 90px
`;

export const UserInfo = styled.div`
  height: 50px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const UserInfoImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const UserInfoBox = styled.div`
  font-size: 12px;
  display: flex;
  align-items: end;
  flex-direction: column;
  margin-left: 10px;
`;

export const UserInfoName = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const UserInfoFunction = styled.span``;

export const SearchForm = styled.form`
  height: auto;
  width: 99%;
`;

export const SearchFormInput = styled.input`
  width: 100%;
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


