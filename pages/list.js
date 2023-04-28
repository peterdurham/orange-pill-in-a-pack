import Layout from "@/components/layout";
import setList from "../data/set-list.json";
import Link from "next/link";
import styled from "styled-components";

const ListItemWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 60px;
  cursor: pointer;
  font-weight: 400;

  a {
    color: #000;
    text-decoration: none;
  }

  & .list-item {
    border: 1px solid rgb(209, 213, 219);
    padding: 8px 16px;
    border-bottom: none;
    background: #fff;
  }
  & .list-item:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .list-item:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: 1px solid rgb(209, 213, 219);
  }
  .list-item:hover {
    background: rgb(249, 250, 251);
  }
`;

const List = () => {
  return (
    <Layout>
      <div style={{ width: "1000px", margin: "20px auto 0 auto" }}>
        <h1>Card List - Series 1</h1>
      </div>
      <ListItemWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "700",
            textDecoration: "underline",
            padding: "16px",
          }}
        >
          <p style={{ width: "70px" }}>Number</p>
          <p style={{ width: "250px" }}>Name</p>
          <p style={{ width: "150px" }}>Rarity</p>
          <p style={{ width: "150px" }}># Printed</p>
          <p style={{ width: "250px" }}>Type</p>
        </div>
        {setList.map((card) => {
          return (
            <Link href={`/series-1/${card.number}`} key={card.number}>
              <div
                className="list-item"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p style={{ width: "70px" }}>{card.number}</p>
                <p style={{ width: "250px", fontWeight: "700" }}>{card.name}</p>
                <p style={{ width: "150px" }}>
                  {card.rarity === "L" && "Legendary"}{" "}
                  {card.rarity === "R" && "Rare"}
                  {card.rarity === "UR" && "Ultrarare"}{" "}
                  {card.rarity === "C" && "Common"}
                </p>
                <p style={{ width: "150px", fontStyle: "italic" }}>
                  {card.rarity === "L" && "100"} {card.rarity === "R" && "999"}
                  {card.rarity === "UR" && "500"}{" "}
                  {card.rarity === "C" && "1,892"}
                </p>
                <p style={{ width: "250px" }}>{card.type}</p>
              </div>
            </Link>
          );
        })}
      </ListItemWrapper>
    </Layout>
  );
};

export default List;
