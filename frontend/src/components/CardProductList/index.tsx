import React from "react";
import {
  ListProducts,
  CardProduct,
  CardProductInfo,
  CardProductInfoImage,
  CardProductInfoCod,
  CardProductInfoDescPrice,
  CardProductInfoDesc,
  CardProductInfoPrice,
} from "./styles";

import { productList } from "../../utils/products.mock";

interface CardProductListProps {
  searchTerm: string;
}

const CardProductList: React.FC<CardProductListProps> = ({ searchTerm }) => {
  const filteredList = productList.filter((item) =>
        item.descricao.toLowerCase().includes(searchTerm.toLowerCase())
      )

  return (
    <ListProducts>
      {filteredList.map((item) => (
        <CardProduct key={item.nome}>
          <CardProductInfo>
            <CardProductInfoImage src={item.imagem} alt={item.nome} />
            <CardProductInfoCod>{item.nome}</CardProductInfoCod>
          </CardProductInfo>
          <CardProductInfoDescPrice>
            <CardProductInfoDesc>{item.descricao}</CardProductInfoDesc>
            <CardProductInfoPrice>R$ {item.preco}</CardProductInfoPrice>
          </CardProductInfoDescPrice>
        </CardProduct>
      ))}
    </ListProducts>
  );
};

export default CardProductList;