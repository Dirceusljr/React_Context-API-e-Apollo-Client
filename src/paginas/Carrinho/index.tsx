import './Carrinho.css'
import TituloPrincipal from '../../componentes/TituloPrincipal'
import { Link } from 'react-router-dom'
import { formatador } from '../../utils/formatador-moeda'
import { AbBotao } from 'ds-alurabooks'
import ItemCarrinho from './ItemCarrinho'
import { useCarrinhoContext } from '../../contextApi/carrinho'
import LoadingCarrinho from '../../componentes/LoadingCarrinho'

const Carrinho = () => {
    const { carrinho, carregando } = useCarrinhoContext()

  return (
    <section className="pagina-carrinho">
        {carregando && <LoadingCarrinho />}
        <TituloPrincipal texto='Minha Sacola' />
        <div className="conteudo">
            <h4>Itens Selecionados</h4>
            <div className="itens">
                {carrinho?.itens.map((item, index) => (
                    <ItemCarrinho key={index} item={item} />
                ))}
            </div>
            <div>
                <Link to='/'>Continuar Comprando</Link>
            </div>
            <footer>
                <ul>
                    <li>
                        Total da compra
                    </li>
                    <li>
                        <strong>{formatador.format(carrinho?.total || 0)}</strong>
                    </li>
                    <li>
                        <AbBotao texto='Finalizar compra' />
                    </li>
                </ul>
            </footer>
        </div>
    </section>
  )
}

export default Carrinho