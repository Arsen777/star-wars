import MultiActionAreaCard from "../../components/Card";

import './style.scss';

export default function Home() {
  return (
    <main className="home">
      <div className="cards">
        {[1,2,3,4,5].map((el, i) => (
          <MultiActionAreaCard key={i}/>
        ))}
      </div>
    </main>
  );
}
