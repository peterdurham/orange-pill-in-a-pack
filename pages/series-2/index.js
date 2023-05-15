import Layout from "@/components/layout";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 640px;
  margin: 20px auto;
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
    padding-right: 32px;
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
      padding-right: 0px;
    }
    .pack-image {
      width: 100%;
    }
    .pack-info {
      flex-direction: column;
    }
  }
`;
const SeriesTwo = () => {
  return (
    <Layout>
      <ContainerWrapper>
        <div className="series-header">
          <h1>About Series 2</h1>
          <p style={{ fontStyle: "italic" }}>Coming May 17, 2022</p>
        </div>

        <div className="pack-info">
          <div className="pack-text">
            <h2 style={{ marginBottom: "10px" }}>FUD Busters</h2>

            <p>
              875 booster boxes - <span className="italic">24 packs each</span>
            </p>
            <p style={{ marginBottom: "10px" }}>21,000 packs total</p>
            <p style={{ fontWeight: "700" }}>Packs include:</p>
            <p>1x Rare, Ultra-rare, Mega-rare, Legendary, or 21 Club card</p>
            <p>9x Series 2 Commons</p>
          </div>
          <img
            className="pack-image"
            src="/images/packs/fud-busters-pack.jpg"
          />
        </div>

        <div className="pack-info">
          <div className="pack-text">
            <h2 style={{ marginBottom: "10px" }}>
              Bitcoin 2023 Commemorative Pack
            </h2>
            <p style={{ marginBottom: "10px" }}>2,100 packs total</p>
            <p style={{ fontWeight: "700", marginTop: "10px" }}>
              Packs include:
            </p>
            <p>1x Bitcoin 2023 Miami Rare, Ultra-rare, or Legendary</p>
            <p>9x Series 2 Commons</p>
          </div>
          <img
            className="pack-image"
            src="/images/packs/bitcoin-2023-miami-pack.jpg"
          />
        </div>

        <div className="pack-info">
          <div className="pack-text">
            <h2 style={{ marginBottom: "10px" }}>
              Bitcoin 2023 Commemorative Whale Pack
            </h2>
            <p style={{ marginBottom: "10px" }}>1,210 packs total</p>
            <p style={{ fontWeight: "700", marginTop: "10px" }}>
              Packs include:
            </p>
            <p>
              1x Bitcoin 2023 Miami Whale Pack Ultra-rare, Legendary, or 1/10
              Super-Legendary
            </p>
            <p>9x Series 2 Commons</p>
          </div>
          <img
            className="pack-image"
            src="/images/packs/bitcoin-2023-whale-pack.jpg"
          />
        </div>

        <div className="total-printed">
          <h2 style={{ marginBottom: "10px" }}>Total Printed</h2>
          <p>243,100 - Total cards</p>
          <p>
            222,025 - Commons{" "}
            <span style={{ fontStyle: "italic" }}>(93 cards)</span>
          </p>
          <p>
            10,000 - Rares{" "}
            <span style={{ fontStyle: "italic" }}>(10 cards)</span>
          </p>
          <p>
            9,000 - Ultra-rares{" "}
            <span style={{ fontStyle: "italic" }}>(18 cards)</span>
          </p>
          <p>
            1,470 - Mega-rares{" "}
            <span style={{ fontStyle: "italic" }}>(18 cards)</span>
          </p>
          <p>
            500 - Legendaries{" "}
            <span style={{ fontStyle: "italic" }}>(5 cards)</span>
          </p>
          <p>
            105 - Twenty-One Club cards{" "}
            <span style={{ fontStyle: "italic" }}>(5 cards)</span>
          </p>
        </div>
      </ContainerWrapper>
    </Layout>
  );
};

export default SeriesTwo;
