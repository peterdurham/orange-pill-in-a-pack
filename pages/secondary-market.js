import Layout from "@/components/layout";
import styled from "styled-components";
import Link from "next/link";

const ContainerWrapper = styled.div`
  width: 600px;
  margin: 60px auto;

  h1 {
    margin-bottom: 20px;
  }
`;

const SecondaryMarket = () => {
  return (
    <Layout>
      <ContainerWrapper>
        <h1>Secondary Market</h1>
        <p style={{ fontWeight: "700" }}>Where to find cards:</p>
        <p>
          <Link href="https://www.bitcoininlagos.com/auction-service/">
            Bitcoininlagos
          </Link>
        </p>
        <p>
          <Link href="https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=2022+bitcoin+trading+cards+series+1&_sacat=1&LH_TitleDesc=0&_fsrp=1&rt=nc&_odkw=2022+bitcoin+trading+cards+series+%60&_osacat=1&_sop=1&LH_All=1">
            Ebay
          </Link>
        </p>
        <p>
          <Link href="https://scarce.city/collections/bitcoin-trading-cards-2">
            Scarce.city
          </Link>
        </p>
        <p>
          <Link href="https://t.me/bitcointradingcards">Telegram</Link>
        </p>
      </ContainerWrapper>
    </Layout>
  );
};

export default SecondaryMarket;
