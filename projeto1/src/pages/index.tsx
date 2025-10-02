import Topo from "@/components/Topo";
import Card from "@/components/Card";
export default function Home()
{
  return (
    <div>
      <Topo/>
      <div>Curso de React</div>
      <div>TypeScript</div>
      <div style={{
        display:"flex",
        justifyContent:"center",
      }}>exemplo de uso com style interno</div>
      <div>
        <Card produto={"mouse"} preco={60.00} desconto={50}></Card>
        <Card produto={"produto"} preco={70.00} desconto={10}></Card>
        <Card produto={"monitor"} preco={100.00} desconto={20}></Card>
      </div>
    </div>
  );
}
