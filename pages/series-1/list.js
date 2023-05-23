import Layout from "@/components/layout";
import CardList from "@/components/CardList";
import styled from "styled-components";
import Head from "next/head";
import seriesOneList from "../../data/series-1-list.json";

const HeadlineWrapper = styled.div`
  width: 800px;
  height: 21px;
  margin: 32px auto 10px auto;
  display: flex;
  align-items: center;
  position: relative;

  & .headline-line {
    width: 100%;
    height: 1px;
    background-color: rgb(209, 213, 219);
  }
  & .headline-text {
    min-width: 200px;
    background: #fff;
    font-size: 18px;
    position: absolute;
    padding-left: 16px;
    padding-right: 16px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 800px) {
    width: calc(100% - 48px);
    margin-top: 0px;
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const Cards = () => {
  return (
    <>
      <Head>
        <title>
          Orange Pill in a Pack Card List - Card Images - Bitcoin Trading Cards
        </title>
        <meta name="description" content="" />
        <meta
          name="description"
          content="Card List for Orange Pill in a Pack Bitcoin Trading Cards"
        />
        <meta
          name="keywords"
          content="Bitcoin Trading Cards, Orange Pill in a Pack, FUD Busters, btc-tc, card lists, set lists, booster packs, btc-tc listings, btc-tc marketplace, Pacific Bitcoin"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.orangepillinapack.com/" />
        <meta
          name="twitter:title"
          content="Orange Pill in a Pack - Bitcoin Trading Cards"
        />
        <meta name="og:title" content="Orange Pill in a Pack" />
        <meta
          name="og:description"
          content="Search site for Orange Pill in a Pack Bitcoin Trading Cards images, set lists, print run stats, booster pack simulator, and card listings for sale or trade."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://orangepillinapack.com/" />
        <meta name="og:site_name" content="Orange Pill in a Pack" />
        <meta name="og:locale" content="en_US" />
      </Head>
      <Layout>
        <HeadlineWrapper>
          <div className="headline-line"></div>
          <div className="headline-text">
            Series 1 - {seriesOneList.length} cards
          </div>
        </HeadlineWrapper>
        <CardList setList={seriesOneList} />
      </Layout>
    </>
  );
};

export default Cards;
