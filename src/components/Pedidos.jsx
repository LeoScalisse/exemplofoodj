import { useState } from "react"

// Arrays de objeto conttendo o estado inicial do cardápio
const cardapio = [
  {id:1, nome:"Combo-01", preco:25.00, disponivel:true, quantidade: 10},
  {id:2, nome:"Combo-02", preco:35.00, disponivel:false, quantidade:0},
  {id:3, nome:"Combo-03", preco:45.00, disponivel:false, quantidade:0},
  {id:4, nome:"Combo-04", preco:55.00, disponivel:true, quantidade: 18},
];


const Pedidos = () => {

  // Hook - useState manipula o estado das variáveis para gerenciar a lista de itens do cardápio
  const [ items, setItems]=useState(cardapio);
  const [status, setStatus]=useState("");
  const [enviar, setEnviar]=useState(false);


  // Valor fixo adicionado ao totaç quando tiver carrinho
  const taxaEntrega = 5.00

  // Função que altera a quantidade do pedido
  const AlterarQuantidade = (id, valor)=>{
    setItems(alt =>
      //MAP criar um nove array e percorre os itens sem mudar o original (IMUTABILIDADE)
      // Ternário - Verifica se o item da iteração atual é o que deve ser alterado
      // Spread - (...item) - mantém os valores antigos e adiciona os novos
      // Math.max() - Garante que a quantidade nunca será maior que 0
      alt.map(item=>
        item.id === id ? {...item, quantidade:Math.max(0, item.quantidade + valor)} : item
      )

    )
  };

  // Filter - Seleciona apenas os produtos disponíveis no carrinho

  const produtosDisponiveis = items.filter(item=>item.disponivel);
  const carrinho = items.filter(item => items.quantidade > 0);

  // Reduce - calcula a soma dos itens (preço + quantidade) e adiciona a taxa de entrega

  const subTotal = carrinho.reduce((ac, item)=> ac + item.preco * item.quantidade, 0);
  const total = subTotal > 0 ? subTotal + taxaEntrega: 0;

  // Simulação do ciclo de vida da entrega usando temporizados assincrono

  const ConfirmarPedido = ()=>{
    setEnviar(true);
    setStatus("Restaurante confirmou o seu pagamento, Preparando seu pedido...")
    setTimeout( ()=>{
      setStatus("Seu pedido saiu para entrega!")
      setEnviar(false)
    }, 5000) // 5 segundos
    setTimeout(()=>{
      setStatus("Pedido Envidado, avalie seu pedido!")
      setEnviar(false)
    }, 10000) // 10 segundos

  };


  return (
    <>
      
    </>
  )
}

export default Pedidos
