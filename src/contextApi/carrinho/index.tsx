import { ICarrinho } from '../../interfaces/ICarrinho';
import { ReactElement, createContext } from "react";

export interface ICarrinhoContext {
    carrinho?: ICarrinho
}

interface ICarrinhoProvider {
    children: ReactElement
}

export const CarrinhoContext = createContext<ICarrinhoContext>({})

const CarrinhoProvider = ({ children } : ICarrinhoProvider) => {

    const carrinho: ICarrinho = {
        itens: [],
        total: 0
    }

    return (
        <CarrinhoContext.Provider value={{carrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}


export default CarrinhoProvider