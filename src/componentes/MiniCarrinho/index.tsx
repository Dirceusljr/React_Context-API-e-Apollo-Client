import { useNavigate } from "react-router-dom";
import sacola from "./assets/sacola.png"
import { useCarrinhoContext } from "../../contextApi/carrinho";
import BotaoNavegacao from "../BotaoNavegacao";
import MiniCarrinhoItem from "./MiniCarrinhoItem";
import { AbBotao } from "ds-alurabooks";
import "./MiniCarrinho.css";

const MiniCarrinho = () => {
  const navigate = useNavigate();
  const { carrinho } = useCarrinhoContext();
  
  return (
    <div>
      <div className="carrinho dropdown">
        <BotaoNavegacao
          imagemSrc={sacola}
          texto="Sacola"
          textoAltSrc="ícone de uma sacola de compras"
        />
        <div className="minicarrinho-conteudo">
          <h4>Resumo da compra</h4>
          {carrinho?.itens.map((item, index) => (
            <MiniCarrinhoItem key={index} item={item} />
          ))}
          <AbBotao texto="Ver Sacola" onClick={() => navigate('/minha-sacola')} />
        </div>
      </div>
    </div>

  )
}

export default MiniCarrinho