import Head from "next/head";
import Image from "next/image";
import setList from "../data/set-list.json";
import styled from "styled-components";
import Layout from "@/components/layout";

const CardDetailsWrapper = styled.div`
  width: 600px;
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
            // padding: "10px",
            // borderRadius: "10px",
            height: "285px",
            width: "200px",
          }}
        >
          <Image src={card.image} height={285} width={200} alt={card.name} />
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
          <p>
            <span className="bold">Flavor Text:</span>{" "}
            <span className="italic">
              These spirits of the air are winsome and wild, and cannot be truly
              contained. Only marginally intelligent, they often substitue
              whimsy for strategy, delighting in mischief and mayhem.
            </span>
          </p>
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
