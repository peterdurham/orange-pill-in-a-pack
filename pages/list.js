import Layout from "@/components/layout";
import setList from "../data/set-list.json";
import Link from "next/link";

const List = () => {
  return (
    <Layout>
      <h1>Card List</h1>
      <div style={{ width: "1000px", margin: "0 auto" }}>
        {setList.map((card) => {
          return (
            <div
              key={card.number}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ width: "100px" }}>{card.number}</div>
              <Link href={`/series-1/${card.number}`}>
                <div style={{ width: "250px" }}>{card.name}</div>
              </Link>

              <div style={{ width: "250px" }}>{card.type}</div>
              <div style={{ width: "100px" }}>{card.rarity}</div>
              <div style={{ width: "200px" }}>
                {card.rarity === "L" && "100"} {card.rarity === "R" && "999"}
                {card.rarity === "UR" && "500"} {card.rarity === "C" && "1,892"}{" "}
                printed
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default List;
