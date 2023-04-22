import Head from "next/head";
import Image from "next/image";
import setList from "../data/set-list.json";
import styled from "styled-components";
import Layout from "@/components/layout";

const CardDetailsWrapper = styled.div`
  width: 800px;
  margin: 40px auto;
  display: flex;

  & h2 {
    margin-bottom: 20px;
  }
  & p {
    margin-bottom: 10px;
  }
`;

export default function Page({ card }) {
  console.log("card", card);

  if (!card) {
    return <div>404</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{card.name}</title>
      </Head>
      <CardDetailsWrapper>
        <div
          style={{
            margin: "0 auto",
            background: "black",
            height: "570px",
            width: "400px",
            boxShadow: "1px 1px 6px rgb(0 0 0 / 45%)",
          }}
        >
          <Image src={card.image} height={570} width={400} alt={card.name} />
        </div>
        <div style={{ width: "300px" }}>
          <h2>{card.name}</h2>
          <p style={{ fontWeight: "700" }}>Card Details</p>
          <p>
            {card.type && (
              <>
                <span className="bold">Type: </span>
                {card.type}
              </>
            )}
          </p>
          <p>
            <span className="bold">Rarity:</span> ({card.rarity})
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
    return { params: { slug: card.number } };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const card = setList.find((card) => card.number === params.slug);
  if (!card) {
    return {
      notFound: true,
    };
  }

  return { props: { card } };
}
