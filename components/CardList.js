import seriesOneList from "../data/series-1-list.json";
import Link from "next/link";
import styled from "styled-components";

const ListItemWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 60px;
  cursor: pointer;
  font-weight: 400;

  .list-header {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    text-decoration: underline;
    padding: 16px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid rgb(209, 213, 219);
  }

  a {
    color: #000;
    text-decoration: none;
  }

  & .list-item {
    border-bottom: 1px solid rgb(209, 213, 219);
    border-left: 1px solid rgb(209, 213, 219);
    border-right: 1px solid rgb(209, 213, 219);
    padding: 8px 16px;
    background: #fff;
  }
  & a:first-child .list-item {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top: 1px solid rgb(209, 213, 219);
  }
  & a:last-child .list-item {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: 1px solid rgb(209, 213, 219);
  }
  .list-item:hover {
    background: rgb(249, 250, 251);
  }
  @media (max-width: 720px) {
    width: calc(100% - 48px);
    margin-left: 24px;
    margin-right: 24px;

    & .card-type {
      display: none;
    }
    & .list-item {
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
`;

const CardList = () => {
  return (
    <ListItemWrapper>
      <div className="list-header">
        <p style={{ width: "70px" }}>Number</p>
        <p style={{ width: "250px" }}>Name</p>
        <p style={{ width: "150px" }}>Rarity</p>
        <p style={{ width: "150px" }}># Printed</p>
        <p className="card-type" style={{ width: "250px" }}>
          Type
        </p>
      </div>
      {seriesOneList.map((card) => {
        return (
          <Link href={`/series-1/${card.slug}`} key={card.number}>
            <div
              className="list-item"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ width: "70px" }}>{card.number}</p>
              <p style={{ width: "250px", fontWeight: "700" }}>{card.name}</p>
              <p style={{ width: "150px" }}>
                {card.rarity === "X" && "Lost Card"}{" "}
                {card.rarity === "L" && "Legendary"}{" "}
                {card.rarity === "R" && "Rare"}
                {card.rarity === "UR" && "Ultrarare"}{" "}
                {card.rarity === "C" && "Common"}
              </p>
              <p style={{ width: "150px", fontStyle: "italic" }}>
                {card.rarity === "X" && "21"}
                {card.rarity === "L" && "100"} {card.rarity === "R" && "999"}
                {card.rarity === "UR" && "500"} {card.rarity === "C" && "1,892"}
              </p>
              <p className="card-type" style={{ width: "250px" }}>
                {card.type}
              </p>
            </div>
          </Link>
        );
      })}
    </ListItemWrapper>
  );
};

export default CardList;
