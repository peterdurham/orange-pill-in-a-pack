import Image from "next/image";
import Link from "next/link";
import setList from "../data/set-list.json";
import Layout from "@/components/layout";
import styled from "styled-components";

const CardsWrapper = styled.div`
  width: 100%;
  margin: 60px auto;
  display: flex;
  padding: 0 2.5%;

  .card-container {
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: 20px auto 15px auto;
  }
  .card-image {
    margin-left: 2.5px;
    margin-right: 2.5px;
    background: black;
    width: 245px;
    box-shadow: 1px 1px 6px rgb(0 0 0 / 45%);
  }
`;

const Cards = () => {
  return (
    <Layout>
      <CardsWrapper>
        <div className="card-container">
          {setList.map((card, index) => (
            <Link
              href={`/${card.number}`}
              key={card.number}
              className="card-link"
            >
              <img className="card-image" src={card.image} alt={card.name} />
            </Link>
          ))}
        </div>
      </CardsWrapper>
    </Layout>
  );
};
export default Cards;
