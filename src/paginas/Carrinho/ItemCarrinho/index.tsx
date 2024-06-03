import { AbInputQuantidade } from 'ds-alurabooks'
import { IItemCarrinho } from '../../../interfaces/IItemCarrinho'
import { formatador } from '../../../utils/formatador-moeda'
import './ItemCarrinho.css'
import lixeira from './assets/lixeira.png'

interface IItemCarrinhoProps {
    item: IItemCarrinho
}

const ItemCarrinho = ({ item }: IItemCarrinhoProps) => {
  return (
    <div className="item-carrinho">
        <figure>
            <img src={item.livro.imagemCapa} alt={item.livro.descricao} />
        </figure>
        <div className="detalhes">
            <ul>
                <li className='titulo'>{item.livro.titulo}</li>
                <li className='descricao'>{item.livro.descricao}</li>
                <li className='autor'>Por: {item.livro.autor.nome}</li>
            </ul>
        </div>
        <div>
            <ul className="preco">
                <li className="label">
                    <strong>Preço:</strong>
                </li>
                <li className='valor'>
                    {formatador.format(item.opcaoCompra.preco)}
                </li>
            </ul>
        </div>
        <div className="quantidade">
            <AbInputQuantidade value={item.quantidade} onChange={() => console.log('ABInputQuantidade - OnChange')} />
        </div>
        <div>
            <button className="btn-excluir">
                <img src={lixeira} alt="Ícone de uma lixeira" />
            </button>
        </div>
    </div>
)
}

export default ItemCarrinho