import { useState, ChangeEvent } from "react";
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

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <Section>
        <TitleSection>
          <h2>Painel</h2>
          <UserInfo>
            <UserInfoImg src={User} />
            <UserInfoBox>
              <UserInfoName>João da Silva Oliveira</UserInfoName>
              <UserInfoFunction>Operador de Caixa</UserInfoFunction>
            </UserInfoBox>
          </UserInfo>
        </TitleSection>
        <CardItemsBalance />
      </Section>
      <Section className="form-box">
        <SearchForm>
          <SearchFormInput
            type="text"
            placeholder="Digite aqui para buscar produtos"
            onChange={handleSearch}
          />
        </SearchForm>
        <CardProductList searchTerm={searchTerm} />
      </Section>
    </Container>
  );
};

export default Content;