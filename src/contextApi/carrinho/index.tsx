import {
  useAdicionarItem,
  useCarrinho,
  useRemoverItem,
} from "../../graphql/carrinho/hooks";
import { ICarrinho } from "../../interfaces/ICarrinho";
import { ReactElement, createContext, useContext } from "react";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

export interface ICarrinhoContext {
  carrinho?: ICarrinho;
  adicionarItemCarrinho: (item: IItemCarrinho) => void;
  removerItemCarrinho: (item: IItemCarrinho) => void;
  carregando: boolean;
}

interface ICarrinhoProvider {
  children: ReactElement;
}

export const CarrinhoContext = createContext<ICarrinhoContext>({
  adicionarItemCarrinho: () => null,
  removerItemCarrinho: () => null,
  carregando: false
});

const CarrinhoProvider = ({ children }: ICarrinhoProvider) => {
  const { data, loading: loadingCarrinho } = useCarrinho();

  const [adicionarItem, {loading: loagindAdicionar} ] = useAdicionarItem();
  const [removerItem] = useRemoverItem();

  const adicionarItemCarrinho = (item: IItemCarrinho) => {
    adicionarItem({
      variables: {
        item: {
          livroId: item.livro.id,
          opcaoCompraId: item.opcaoCompra.id,
          quantidade: item.quantidade,
        },
      },
    });
  };

  const removerItemCarrinho = (item: IItemCarrinho) => {
    removerItem({
      variables: {
        item: {
          livroId: item.livro.id,
          opcaoCompraId: item.opcaoCompra.id,
          quantidade: item.quantidade,
        },
      },
    });
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho: data?.carrinho,
        adicionarItemCarrinho,
        removerItemCarrinho,
        carregando: loadingCarrinho || loagindAdicionar
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
  return useContext<ICarrinhoContext>(CarrinhoContext);
};

export default CarrinhoProvider;
