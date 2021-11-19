import Header from "../../components/header/header"
import BasicCard from "../cards/basic-card";

export default function Home(){
  return (
  <>
    <Header />
      <div class="row">
        <BasicCard title="Definição" descricao="Isto é uma definição de geografia" />
        <BasicCard title="Geografia" descricao="A Geografia é uma ciência que tem por objetivo o estudo da superfície terrestre e a distribuição espacial de fenômenos significativos na paisagem. Também estuda a relação recíproca entre o homem e o meio ambiente." />
      </div>
  </>

  );
}