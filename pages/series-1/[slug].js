import Head from "next/head";
import Image from "next/image";
import setList from "../../data/set-list.json";
import styled from "styled-components";
import Layout from "@/components/layout";
import CardNavigation from "@/components/CardNavigation";

const CardNaivgationWrapper = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: block;
  }
`;

const CardImageWrapper = styled.div`
  margin: 0 auto;
  // background: black;
  height: 427.5px;
  width: 300px;
  box-shadow: 1px 1px 6px rgb(0 0 0 / 45%);

  & .card-image {
    height: 427.5px;
    width: 300px;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: auto;

    & .card-image {
      width: 100%;
      height: auto;
    }
  }
`;

const CardDetailsWrapper = styled.div`
  width: 720px;
  margin: 40px auto;
  display: flex;
  & .mobile-title {
    display: none;
  }
  & .desktop-hidden {
    display: none;
  }

  & h2 {
    margin-bottom: 20px;
  }
  & p {
    margin-bottom: 10px;
  }

  & .card-details {
    width: 480px;
    margin-left: 60px;
  }

  @media (max-width: 720px) {
    & .mobile-hidden {
      display: none;
    }
    & .mobile-title {
      display: block;
    }
  }

  @media (max-width: 720px) {
    width: calc(100% - 48px);
    margin-left: 24px;
    margin-right: 24px;
    flex-direction: column;

    & .card-details {
      margin-top: 20px;
      margin-left: 0;
      width: 100%;
    }
  }
`;

export default function Page({ card }) {
  if (!card) {
    return <div>404</div>;
  }

  const cardTitle = `${card.name} - Orange Pill in a Pack`;
  const cardDescription = `${card.name} - Orange Pill in a Pack - Bitcoin Trading Card`;
  const cardNumber = Number(card.number);
  const twitterURL = `https://www.orangepillinapack.com/series-1/${card.slug}`;
  const imageURL = `https://www.orangepillinapack.com/images/cards/series-1/`;

  let prevCard, nextCard;

  setList.forEach((setCard) => {
    const setCardNumber = Number(setCard.number);

    if (cardNumber - 1 === setCardNumber) {
      prevCard = setCard;
    } else if (cardNumber + 1 === setCardNumber) {
      nextCard = setCard;
    }
  });

  return (
    <Layout>
      <Head>
        <title>{cardTitle}</title>
        <meta name="description" content={cardDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={twitterURL} />
        <meta name="twitter:title" content={cardTitle} />
        <meta
          name="og:title"
          content={`${card.name} - Orange Pill in a Pack`}
        />
        <meta name="og:image" content={imageURL} />
        <meta name="og:description" content={cardDescription} />
        <meta name="og:url" content="https://orangepillinapack.com/" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
      </Head>
      <CardDetailsWrapper>
        <h1 className="mobile-title" style={{ marginBottom: "20px" }}>
          {card.name}
        </h1>
        <CardImageWrapper>
          <img src={card.image} className="card-image" alt={card.name} />
          <CardNavigation
            nextCard={nextCard}
            prevCard={prevCard}
            className="mobile-hidden"
          />
        </CardImageWrapper>
        <div className="card-details">
          <h2
            style={{ marginBottom: "8px", fontSize: "32px" }}
            className="mobile-hidden"
          >
            {card.name}
          </h2>
          <p
            className="mobile-hidden"
            style={{ color: "#767676", marginBottom: "24px" }}
          >
            Orange Pill in a Pack Edition
          </p>
          <h2
            style={{
              fontWeight: "700",
              marginBottom: "10px",
              fontSize: "16px",
            }}
          >
            Card Details
          </h2>
          <p>
            <span className="bold">Number:</span> {card.number}/65
          </p>
          <p>
            {card.type && (
              <>
                <span className="bold">Type: </span>
                {card.type}
              </>
            )}
          </p>

          <p>
            <span className="bold">Rarity:</span>{" "}
            {card.rarity === "L" && "Legendary"}
            {card.rarity === "UR" && "Ultrarare"}
            {card.rarity === "R" && "Rare"}
            {card.rarity === "C" && "Common"}
          </p>
          {card.stats && (
            <p>
              <span className="bold">Stats:</span>{" "}
              <span className="italic">{card.stats}</span>
            </p>
          )}
          {card.text && (
            <p>
              <span className="bold">Text:</span>{" "}
              <span className="italic">{card.text}</span>
            </p>
          )}
          {card.quote && (
            <p>
              <span className="bold">Quote:</span>{" "}
              <span className="italic">{card.quote}</span>
            </p>
          )}
        </div>
      </CardDetailsWrapper>
      <CardNaivgationWrapper>
        <CardNavigation nextCard={nextCard} prevCard={prevCard} />
      </CardNaivgationWrapper>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = setList.map((card) => {
    return { params: { slug: card.slug } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const card = setList.find((card) => card.slug === params.slug);
  if (!card) {
    return {
      notFound: true,
    };
  }

  return { props: { card } };
}
