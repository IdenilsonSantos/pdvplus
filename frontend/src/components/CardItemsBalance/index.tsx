import React from "react";
import { FiCreditCard, FiDollarSign, FiInbox } from "react-icons/fi";

import {
  CardsBalance,
  CardItemBalance,
  ItemBalanceTitle,
  ItemBalanceValue,
} from "./styles";


const CardItemsBalance: React.FC = () => {
  return (
    <>
    <CardsBalance>
          <CardItemBalance>
            <ItemBalanceTitle>
              Dinheiro
              <FiDollarSign size={14} color={"#10B047"} />
            </ItemBalanceTitle>
            <ItemBalanceValue>
              <small>R$</small>
              0,00
            </ItemBalanceValue>
          </CardItemBalance>
          <CardItemBalance>
            <ItemBalanceTitle>
              Cartão
              <FiCreditCard size={14} color={"#BC0000"} />
            </ItemBalanceTitle>
            <ItemBalanceValue>
              <small>R$</small>
              0,00
            </ItemBalanceValue>
          </CardItemBalance>
          <CardItemBalance>
            <ItemBalanceTitle>
              Caixa
              <FiInbox size={14} color={"#858585"} />
            </ItemBalanceTitle>
            <ItemBalanceValue>
              <small>R$</small>
              0,00
            </ItemBalanceValue>
          </CardItemBalance>
        </CardsBalance>
    </>
  );
};

export default CardItemsBalance;
