import React from "react";
import { FiMinus, FiPlus, FiTrash, FiPercent, FiSlash } from "react-icons/fi";
import { GrMoney } from 'react-icons/gr'
import { Section, TitleSection } from "../../styles";

import {
  SideOrder,
  CodeProductForm,
  CodeProductFormInput,
  ProductOrderList,
  CardProduct,
  CardProductInfo,
  CardProductInfoImage,
  CardProductInfoCod,
  CardProductInfoDescPrice,
  CardProductInfoDesc,
  CardProductInfoPrice,
  CardProductValueActions,
  CardProductQtd,
  CardProductButtons,
  ActionButton,
  SideOrderMenu,
  SideOrderMenuTotal,
  SideOrderMenuActions,
  LabelButton,
  LinkBtn
} from "./styles";

import Prod from "../../assets/Pic.png";

const OrderSideBar: React.FC = () => {
  return (
    <>
      <SideOrder>
        <Section>
          <TitleSection>
            <h1>Produtos</h1>
          </TitleSection>
          <CodeProductForm>
            <CodeProductFormInput type="text" placeholder="Código Produto" />
          </CodeProductForm>
          <ProductOrderList>
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
              <CardProductValueActions>
                <CardProductQtd>1</CardProductQtd>
                <CardProductButtons>
                  <ActionButton className="btnAdd">
                    <FiPlus />
                  </ActionButton>
                  <ActionButton className="btnRemove">
                    <FiMinus />
                  </ActionButton>
                  <ActionButton className="btnDelete">
                    <FiTrash />
                  </ActionButton>
                </CardProductButtons>
              </CardProductValueActions>
            </CardProduct>
          </ProductOrderList>
        </Section>
        <SideOrderMenu>
<SideOrderMenuTotal>
  <span>Total: </span>
  <span>R$ 20,00</span>
</SideOrderMenuTotal>
<SideOrderMenuActions>
    <LabelButton>
    <LinkBtn>
    <GrMoney size={20} />
    </LinkBtn>
    Fechar Conta
    </LabelButton>
    <LabelButton>
    <LinkBtn>
    <FiPercent size={20} />
    </LinkBtn>
    Desconto
    </LabelButton>
    <LabelButton>
    <LinkBtn>
    <FiSlash size={20} />
    </LinkBtn>
    Cancelar Pedido
    </LabelButton>
</SideOrderMenuActions>
        </SideOrderMenu>
      </SideOrder>
    </>
  );
};

export default OrderSideBar;
