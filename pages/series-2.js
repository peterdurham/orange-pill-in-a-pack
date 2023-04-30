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

const SeriesTwo = () => {
  return (
    <Layout>
      <ContainerWrapper>
        <h1>About Series 2</h1>
        <p style={{ marginBottom: "40px", fontStyle: "italic" }}>
          Coming May 17, 2022
        </p>

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
        <p>243,100 - Total cards</p>
        <p>
          222,025 - Commons{" "}
          <span style={{ fontStyle: "italic" }}>(93 cards)</span>
        </p>
        <p>
          10,000 - Rares <span style={{ fontStyle: "italic" }}>(10 cards)</span>
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
      </ContainerWrapper>
    </Layout>
  );
};

export default SeriesTwo;
