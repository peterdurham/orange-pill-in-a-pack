import Layout from "@/components/layout";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 600px;
  margin: 60px auto;

  h1 {
    margin-bottom: 10px;
  }
  .italic
`;

const SeriesOne = () => {
  return (
    <Layout>
      <ContainerWrapper>
        <h1>About Series 1</h1>
        <p style={{ marginBottom: "40px", fontStyle: "italic" }}>
          Released November 10, 2022
        </p>

        <h2 style={{ marginBottom: "10px" }}>Orange Pill in a pack</h2>

        <p style={{ fontWeight: "700" }}>Packs include:</p>
        <p>1x Rare, Ultra-rare, Legendary, or 1/1</p>
        <p>9x Commons</p>

        <p style={{ fontWeight: "700", marginTop: "20px" }}>Print run:</p>
        <p>
          328 boxes - <span className="italic">24 packs each</span>
        </p>

        <p style={{ marginBottom: "10px" }}>7,894 packs</p>
        <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>
          Pacific Bitcoin pack
        </h2>
        <p style={{ fontWeight: "700", marginTop: "20px" }}>Packs include:</p>
        <p>1x Pacific Bitcoin Rare</p>
        <p>9x Series 1 commons</p>

        <p style={{ fontWeight: "700", marginTop: "20px" }}>Print run:</p>
        <p>1,998 Pacific Bitcoin packs</p>

        <h2 style={{ marginTop: "40px", marginBottom: "10px" }}>
          Total Printed
        </h2>
        <p>98,920 - total cards</p>
        <p>88,913 - commons</p>
        <p>5,994 - rares</p>
        <p>1,500 - ultra-rares</p>
        <p>500 - legendaries</p>
        <p>42 - lost cards</p>
        <p>15 - unique 1/1 cards</p>
      </ContainerWrapper>
    </Layout>
  );
};

export default SeriesOne;
