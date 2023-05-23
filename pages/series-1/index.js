import Layout from "@/components/layout";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 800px;
  margin: 20px auto 60px auto;
  border: 1px solid #dee3e7;
  border-radius: 16px;

  & .series-header {
    padding: 16px;
    background: #f8f8f8;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    border-bottom: 1px solid #dee3e7;
  }

  .pack-info {
    padding: 16px;
    display: flex;
    border-bottom: 1px solid #dee3e7;
  }
  .pack-text {
    width: 60%;
  }
  .pack-image {
    width: 40%;
    padding-top: 16px;
  }
  .total-printed {
    background: #f8f8f8;
    padding: 16px;
  }
  @media (max-width: 720px) {
    & {
      width: calc(100% - 48px);
      margin-left: 24px;
      margin-right: 24px;
    }
    .pack-text {
      width: 100%;
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
        <div className="series-header">
          <h1>About Series 1</h1>
          <p style={{ fontStyle: "italic" }}>Released November 10, 2022</p>
          <p style={{ fontStyle: "italic" }}>Sold Out in 3 months</p>
        </div>

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
          />
        </div>

        <div className="total-printed">
          <h2 style={{ marginBottom: "10px" }}>Total Printed</h2>
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
            42 - Lost cards{" "}
            <span style={{ fontStyle: "italic" }}>(2 cards)</span>
          </p>
          <p>
            15 - Unique 1/1 cards{" "}
            <span style={{ fontStyle: "italic" }}>(15 cards)</span>
          </p>
        </div>
      </ContainerWrapper>
    </Layout>
  );
};

export default SeriesOne;
