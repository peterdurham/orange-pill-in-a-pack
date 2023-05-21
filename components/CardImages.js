import Image from "next/image";
import Link from "next/link";
import seriesOneList from "../data/series-1-list.json";
import styled from "styled-components";

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
    <CardsWrapper>
      <div className="card-container">
        {seriesOneList.map((card) => (
          <Link href={`/series-1/${card.slug}`} key={card.number}>
            <img className="card-image" src={card.image} alt={card.name} />
          </Link>
        ))}
      </div>
    </CardsWrapper>
  );
};

export default CardImages;
