import Head from "next/head";
import Image from "next/image";
import setList from "../../data/set-list.json";
import styled from "styled-components";
import Layout from "@/components/layout";
import Link from "next/link";

const CardDetailsWrapper = styled.div`
  width: 720px;
  margin: 40px auto;
  display: flex;

  & h2 {
    margin-bottom: 20px;
  }
  & p {
    margin-bottom: 10px;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const CardNavigationContainer = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: #767676;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: 0.2s all;
  }
  a:hover {
    color: #000;
  }
  & svg {
    font-size: 24px;
  }
  a:first-child svg {
    margin-right: 4px;
  }
  a:last-child svg {
    margin-left: 4px;
  }
`;

export default function Page({ card }) {
  if (!card) {
    return <div>404</div>;
  }

  const cardTitle = `${card.name} | Orange Pill in a Pack | Bitcoin Trading Cards`;
  const cardNumber = Number(card.number);
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
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Search site for Orange Pill in a Pack Bitcoin Trading Cards images, set lists, print run stats, booster pack simulator, and card listings for sale or trade."
        />
        <meta
          name="keywords"
          content="Bitcoin Trading Cards, Orange Pill in a Pack, FUD Busters, btc-tc, card lists, card images, set lists, booster packs, btc-tc listings, btc-tc marketplace, Pacific Bitcoin, scarce city auctions"
        />
        <meta
          name="og:title"
          content={`${card.name} - Orange Pill in a Pack`}
        />
        <meta
          name="og:description"
          content="Search site for Orange Pill in a Pack Bitcoin Trading Cards images, set lists, print run stats, booster pack simulator, and card listings for sale or trade."
        />
        <meta name="og:url" content="https://orangepillinapack.com/" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <CardDetailsWrapper>
        <div
          style={{
            margin: "0 auto",
            background: "black",
            height: "427.5px",
            width: "300px",
            boxShadow: "1px 1px 6px rgb(0 0 0 / 45%)",
          }}
        >
          <Image src={card.image} height={427.5} width={300} alt={card.name} />
          <CardNavigationContainer>
            {prevCard ? (
              <Link href={`/series-1/${prevCard.slug}`}>
                {" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"></path>
                </svg>
                Previous card
              </Link>
            ) : (
              <div></div>
            )}
            {nextCard ? (
              <Link href={`/series-1/${nextCard.slug}`}>
                Next card
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </CardNavigationContainer>
        </div>
        <div style={{ width: "480px", marginLeft: "60px" }}>
          <h2 style={{ marginBottom: "8px", fontSize: "32px" }}>{card.name}</h2>
          <p style={{ color: "#767676", marginBottom: "24px" }}>
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
