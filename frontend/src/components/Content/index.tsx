import React from "react";
import { FiDollarSign, FiCreditCard, FiInbox } from "react-icons/fi";

import {
  Container,
  UserInfo,
  UserInfoImg,
  UserInfoBox,
  UserInfoName,
  UserInfoFunction,
  SearchForm,
  SearchFormInput
} from "./styles";
import { Section, TitleSection } from "../../styles";

import User from "../../assets/user.png";
import CardProductList from "../CardProductList";
import CardItemsBalance from "../CardItemsBalance";


const Content: React.FC = () => {
  return (
    <Container>
      <Section>
        <TitleSection>
          <h2>Painel</h2>
          <UserInfo>
            <UserInfoImg src={User} />
            <UserInfoBox>
              <UserInfoName>Usuário</UserInfoName>
              <UserInfoFunction>Operador de Caixa</UserInfoFunction>
            </UserInfoBox>
          </UserInfo>
        </TitleSection>
        <CardItemsBalance/>
      </Section>
      <Section className="form-box">
        <SearchForm>
          <SearchFormInput
            type="text"
            placeholder="Digite aqui para buscar produtos"
          />
        </SearchForm>
        <CardProductList/>
      </Section>
    </Container>
  );
};

export default Content;
