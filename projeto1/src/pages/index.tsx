export default function Home()
{

  function Topo(){
    return(
      <header className="flex justify-between items-center bg-amber-500">
        <div className="text-5xl text-amber-950 ">Logo</div>
        <div className="flex justify-between p-3 m-3 gap-3 links">
          <a href="">link1</a>
          <a href="">link2</a>
          <a href="">link3</a>
          <a href="">link4</a>
          <a href="">link5</a>
        </div>
      </header>
    )
  }

  return (
    <div>
      <Topo/>
      <div>Curso de React</div>
      <div>TypeScript</div>
      <div style={{
        display:"flex",
        justifyContent:"center",
      }}>exemplo de uso com style interno</div>
    </div>
  );
}
