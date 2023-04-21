import Image from "next/image";
import Link from "next/link";
import setList from "../data/set-list.json";
import Layout from "@/components/layout";
import styled from "styled-components";

const CardsWrapper = styled.div`
  width: 690px;
  margin: 60px auto;
  display: flex;

  .card-container {
    width: 690px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
`;

const Cards = () => {
  return (
    <Layout>
      <CardsWrapper>
        <div className="card-container">
          {setList.map((card, index) => (
            <Link href={`/${card.number}`} key={index}>
              <div
                style={{
                  marginRight: "8px",
                  marginBottom: "8px",
                  background: "black",
                  padding: "10px",
                  borderRadius: "14px",
                  height: "305px",
                }}
              >
                <Image
                  src={card.image}
                  height={285}
                  width={200}
                  alt={card.name}
                />
              </div>
            </Link>
          ))}
        </div>
      </CardsWrapper>
    </Layout>
  );
};
export default Cards;
