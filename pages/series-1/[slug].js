import Head from "next/head";
import Image from "next/image";
import setList from "../../data/set-list.json";
import styled from "styled-components";
import Layout from "@/components/layout";
import BackButton from "@/components/BackButton";

const CardDetailsWrapper = styled.div`
  width: 720px;
  margin: 0 auto 40px auto;
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

const BackButtonContainer = styled.div`
  width: 720px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export default function Page({ card }) {
  if (!card) {
    return <div>404</div>;
  }

  const cardTitle = `${card.name} | Orange Pill in a Pack | Bitcoin Trading Cards`;

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
      <BackButtonContainer>
        <BackButton />
      </BackButtonContainer>
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
