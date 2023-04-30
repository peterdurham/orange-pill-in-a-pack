import Layout from "@/components/layout";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 480px;
  margin: 60px auto;

  h1 {
    margin-bottom: 10px;
  }

  .pack-info {
    display: flex;
    margin-bottom: 40px;
  }
  .pack-text {
    width: 60%;
  }
  .pack-image {
    width: 40%;
    padding-top: 10px;
  }
  @media (max-width: 720px) {
    & {
      width: calc(100% - 80px);
      margin-left: 40px;
      margin-right: 40px;
    }
    .pack-text {
      width: 100%;
      margin-bottom: 40px;
    }
    .pack-image {
      width: 100%;
    }
    .pack-info {
      flex-direction: column;
    }
  }
`;

const SeriesOne = () => {
  return (
    <Layout>
      <ContainerWrapper>
        <h1>About Series 1</h1>
        <p style={{ marginBottom: "40px", fontStyle: "italic" }}>
          Released November 10, 2022
        </p>

        <div className="pack-info">
          <div className="pack-text">
            <h2 style={{ marginBottom: "10px" }}>Orange Pill in a pack</h2>

            <p>
              328 booster boxes - <span className="italic">24 packs each</span>
            </p>
            <p style={{ marginBottom: "10px" }}>7,894 packs total</p>
            <p style={{ fontWeight: "700" }}>Packs include:</p>
            <p>1x Rare, Ultra-rare, Legendary, or 1/1</p>
            <p>9x Series 1 Commons</p>
          </div>
          <img
            className="pack-image"
            src="/images/packs/unopened_s1_pack.jpg"
            style={{
              width: "100px",
              height: "142.5px",
              cursor: "pointer",
              margin: "0 auto",
            }}
          />
        </div>

        <div className="pack-info">
          <div className="pack-text">
            <h2 style={{ marginBottom: "10px" }}>Pacific Bitcoin pack</h2>
            <p style={{ marginBottom: "10px" }}>1,998 packs total</p>
            <p style={{ fontWeight: "700", marginTop: "10px" }}>
              Packs include:
            </p>
            <p>1x Pacific Bitcoin Rare</p>
            <p>9x Series 1 Commons</p>
          </div>
          <img
            className="pack-image"
            src="/images/packs/unopened_pb2022_pack.jpg"
            style={{
              width: "100px",
              height: "142.5px",
              cursor: "pointer",
              margin: "0 auto",
            }}
          />
        </div>

        <h2 style={{ marginTop: "40px", marginBottom: "10px" }}>
          Total Printed
        </h2>
        <p>98,920 - Total cards</p>
        <p>
          88,913 - Commons{" "}
          <span style={{ fontStyle: "italic" }}>(47 cards)</span>
        </p>
        <p>
          5,994 - Rares <span style={{ fontStyle: "italic" }}>(6 cards)</span>
        </p>
        <p>
          1,500 - Ultra-rares{" "}
          <span style={{ fontStyle: "italic" }}>(3 cards)</span>
        </p>
        <p>
          500 - Legendaries{" "}
          <span style={{ fontStyle: "italic" }}>(5 cards)</span>
        </p>
        <p>
          42 - Lost cards <span style={{ fontStyle: "italic" }}>(2 cards)</span>
        </p>
        <p>
          15 - Unique 1/1 cards{" "}
          <span style={{ fontStyle: "italic" }}>(15 cards)</span>
        </p>
      </ContainerWrapper>
    </Layout>
  );
};

export default SeriesOne;
