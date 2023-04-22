import Image from "next/image";
import Link from "next/link";
import setList from "../data/set-list.json";
import Layout from "@/components/layout";
import styled from "styled-components";

const HeadlineWrapper = styled.div`
  width: 1000px;
  height: 36px;
  margin: 40px auto 10px auto;
  display: flex;
  align-items: center;
  position: relative;

  & .headline-line {
    width: 100%;
    height: 1px;
    background-color: rgba(95, 79, 102, 0.35);
  }
  & .headline-text {
    background: #f4f7f8;
    font-size: 24px;
    position: absolute;
    padding-left: 16px;
    padding-right: 16px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 1000px) {
    width: calc(100% - 48px);
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const CardsWrapper = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  & .card-container {
    display: grid;
    max-width: 1000px;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
    grid-gap: 16px;
  }
  .card-image {
    height: 100%;
    width: 100%;
    box-shadow: 1px 1px 6px rgb(0 0 0 / 45%);
  }
`;

const Cards = () => {
  return (
    <Layout>
      <HeadlineWrapper>
        <div className="headline-line"></div>
        <div className="headline-text">Series 1 - {setList.length} cards</div>
      </HeadlineWrapper>
      <CardsWrapper>
        <div className="card-container">
          {setList.map((card) => (
            <Link href={`/${card.number}`} key={card.number}>
              <img className="card-image" src={card.image} alt={card.name} />
            </Link>
          ))}
        </div>
      </CardsWrapper>
    </Layout>
  );
};
export default Cards;
