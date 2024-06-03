import { useCarrinho } from "../../graphql/carrinho/hooks";
import { ICarrinho } from "../../interfaces/ICarrinho";
import { ReactElement, createContext, useContext } from "react";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

export interface ICarrinhoContext {
  carrinho?: ICarrinho;
  adicionarItemCarrinho: (item: IItemCarrinho) => void;
}

interface ICarrinhoProvider {
  children: ReactElement;
}

export const CarrinhoContext = createContext<ICarrinhoContext>({ adicionarItemCarrinho: () => null });

const CarrinhoProvider = ({ children }: ICarrinhoProvider) => {

  const { data } = useCarrinho()

  const adicionarItemCarrinho = (item: IItemCarrinho) => {
    console.log('[CarrinhoProvider] - adicionarItemCarrinho', item)
  }
  return (
    <CarrinhoContext.Provider value={{ carrinho: data?.carrinho, adicionarItemCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
    return useContext<ICarrinhoContext>(CarrinhoContext)
}

export default CarrinhoProvider;
