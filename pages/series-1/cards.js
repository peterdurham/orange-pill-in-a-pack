import Layout from "@/components/layout";
import CardList from "@/components/CardList";
import CardImages from "@/components/CardImages";
import styled from "styled-components";
import Head from "next/head";
import setList from "../../data/set-list.json";

const HeadlineWrapper = styled.div`
  width: 800px;
  height: 21px;
  margin: 16px auto 10px auto;
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

const CardsWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 24px auto;
  max-width: 800px;

  @media (max-width: 720px) {
    padding: 0 24px;
  }
`;

const ToggleButton = styled.button`
  padding: 7px 14px;
  background: white;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 4px;
  cursor: pointer;
`;

const Cards = ({ cardView, setCardView }) => {
  function handleToggle() {
    if (cardView === "images") {
      setCardView("list");
    } else if (cardView === "list") {
      setCardView("images");
    }
  }

  return (
    <>
      <Head>
        <title>
          Orange Pill in a Pack Card List - Card Images - Bitcoin Trading Cards
        </title>
        <meta name="description" content="" />
        <meta
          name="description"
          content="Card Images and Card List views for Orange Pill in a Pack Bitcoin Trading Cards images"
        />
        <meta
          name="keywords"
          content="Bitcoin Trading Cards, Orange Pill in a Pack, FUD Busters, btc-tc, card lists, card images, set lists, booster packs, btc-tc listings, btc-tc marketplace, Pacific Bitcoin, scarce city auctions"
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
        <CardsWrapper>
          <h2>
            {cardView === "list" && "List"} {cardView === "images" && "Image"}{" "}
            view
          </h2>
          <ToggleButton onClick={handleToggle}>
            Show {cardView === "list" && "images"}{" "}
            {cardView === "images" && "list"}
          </ToggleButton>
        </CardsWrapper>
        <HeadlineWrapper>
          <div className="headline-line"></div>
          <div className="headline-text">Series 1 - {setList.length} cards</div>
        </HeadlineWrapper>
        {cardView === "list" && <CardList />}
        {cardView === "images" && <CardImages />}
      </Layout>
    </>
  );
};

export default Cards;
