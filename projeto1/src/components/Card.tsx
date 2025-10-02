interface cardProps{
    produto:string;
    preco:number;
    desconto:number;
}

export default function Card(props:cardProps){
    return(
        <div>
            <div>Produto: {props.produto}</div>
            <div>Preço: R${props.preco}</div>
            <div>Desconto: R${props.desconto}</div>
            <div>Preço venda: {props.preco - props.desconto}</div>
        </div>
    )
}