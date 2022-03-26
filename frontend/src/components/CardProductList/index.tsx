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

import Prod from "../../assets/Pic.png";

const CardProductList: React.FC = () => {
  return (
    <>
    <ListProducts>
          <CardProduct>
            <CardProductInfo>
              <CardProductInfoImage src={Prod} />
              <CardProductInfoCod>A0rtVd</CardProductInfoCod>
            </CardProductInfo>
            <CardProductInfoDescPrice>
              <CardProductInfoDesc>
                Ovinhos de Amendoim YOKI Pacote 90g
              </CardProductInfoDesc>
              <CardProductInfoPrice>R$ 5,00</CardProductInfoPrice>
            </CardProductInfoDescPrice>
          </CardProduct>
          <CardProduct>
            <CardProductInfo>
              <CardProductInfoImage src={Prod} />
              <CardProductInfoCod>A0rtVd</CardProductInfoCod>
            </CardProductInfo>
            <CardProductInfoDescPrice>
              <CardProductInfoDesc>
                Ovinhos de Amendoim YOKI Pacote 90g
              </CardProductInfoDesc>
              <CardProductInfoPrice>R$ 5,00</CardProductInfoPrice>
            </CardProductInfoDescPrice>
          </CardProduct>
          <CardProduct>
            <CardProductInfo>
              <CardProductInfoImage src={Prod} />
              <CardProductInfoCod>A0rtVd</CardProductInfoCod>
            </CardProductInfo>
            <CardProductInfoDescPrice>
              <CardProductInfoDesc>
                Ovinhos de Amendoim YOKI Pacote 90g
              </CardProductInfoDesc>
              <CardProductInfoPrice>R$ 5,00</CardProductInfoPrice>
            </CardProductInfoDescPrice>
          </CardProduct>
          <CardProduct>
            <CardProductInfo>
              <CardProductInfoImage src={Prod} />
              <CardProductInfoCod>A0rtVd</CardProductInfoCod>
            </CardProductInfo>
            <CardProductInfoDescPrice>
              <CardProductInfoDesc>
                Ovinhos de Amendoim YOKI Pacote 90g
              </CardProductInfoDesc>
              <CardProductInfoPrice>R$ 5,00</CardProductInfoPrice>
            </CardProductInfoDescPrice>
          </CardProduct>
          <CardProduct>
            <CardProductInfo>
              <CardProductInfoImage src={Prod} />
              <CardProductInfoCod>A0rtVd</CardProductInfoCod>
            </CardProductInfo>
            <CardProductInfoDescPrice>
              <CardProductInfoDesc>
                Ovinhos de Amendoim YOKI Pacote 90g
              </CardProductInfoDesc>
              <CardProductInfoPrice>R$ 5,00</CardProductInfoPrice>
            </CardProductInfoDescPrice>
          </CardProduct>
          <CardProduct>
            <CardProductInfo>
              <CardProductInfoImage src={Prod} />
              <CardProductInfoCod>A0rtVd</CardProductInfoCod>
            </CardProductInfo>
            <CardProductInfoDescPrice>
              <CardProductInfoDesc>
                Ovinhos de Amendoim YOKI Pacote 90g
              </CardProductInfoDesc>
              <CardProductInfoPrice>R$ 5,00</CardProductInfoPrice>
            </CardProductInfoDescPrice>
          </CardProduct>
        </ListProducts>
    </>
  );
};

export default CardProductList;
