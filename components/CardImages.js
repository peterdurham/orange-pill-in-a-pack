import Image from "next/image";
import Link from "next/link";
import setList from "../data/set-list.json";
import Layout from "@/components/layout";
import styled from "styled-components";
import CardList from "@/components/CardList";

const HeadlineWrapper = styled.div`
  width: 800px;
  height: 36px;
  margin: 16px auto 10px auto;
  display: flex;
  align-items: center;
  position: relative;

  & .headline-line {
    width: 100%;
    height: 1px;
    background-color: rgb(209, 213, 219);
  }
  & .headline-text {
    min-width: 200px;
    background: #fff;
    font-size: 18px;
    position: absolute;
    padding-left: 16px;
    padding-right: 16px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 800px) {
    width: calc(100% - 48px);
    margin-top: 12px;
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const CardsWrapper = styled.div`
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 64px;

  & .card-container {
    display: grid;
    max-width: 800px;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 16px;
  }
  .card-image {
    height: 100%;
    width: 100%;
    box-shadow: 1px 1px 6px rgb(0 0 0 / 45%);
  }
  @media (max-width: 850px) {
    & .card-container {
      grid-gap: 32px;
    }
  }
  @media (max-width: 480px) {
    & .card-container {
      grid-gap: 32px;
    }
  }
`;

const CardImages = () => {
  return (
    <>
      <HeadlineWrapper>
        <div className="headline-line"></div>
        <div className="headline-text">Series 1 - {setList.length} cards</div>
      </HeadlineWrapper>
      <CardsWrapper>
        <div className="card-container">
          {setList.map((card) => (
            <Link href={`/series-1/${card.slug}`} key={card.number}>
              <img className="card-image" src={card.image} alt={card.name} />
            </Link>
          ))}
        </div>
      </CardsWrapper>
    </>
  );
};

export default CardImages;
