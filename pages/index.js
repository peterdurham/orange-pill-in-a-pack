import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import Button from "@/components/button";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 1000px;
  margin: 20px auto 40px auto;

  & .image-row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;

const LinksWrapper = styled.div`
  display: grid;
  & a {
    text-decoration: none;
    margin-bottom: 12px;
  }

  & button {
    margin-right: 10px;
    display: flex;
    justify-content: flex-start;
    padding-left: 16px;

    & svg {
      margin-right: 8px;
      font-size: 20px;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  border: 1px solid #dee3e7;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  width: 313px;
  height: 200px;
  border-radius: 8px;
  margin: 10px;
  transition: 0.2s all;

  &:hover {
    // transform: translate(0, -2px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    // box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
    //   0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .card-link {
    text-decoration: none;
    color: #121212;
  }

  .card-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .card-text {
    padding: 8px 16px;
    font-weight: 600;
  }
`;

const Card = ({
  text,
  src = "/images/cards/series-1/pacific-bitcoin-surfboard.jpeg",
  alt = "Card alt",
}) => {
  return (
    <CardWrapper>
      <Link href="/random-pack" className="card-link">
        <div>
          <img className="card-image" src={src} alt={alt} />
        </div>
        <div className="card-text">{text}</div>
      </Link>
    </CardWrapper>
  );
};

function Home() {
  const siteTitle = "Orange Pill in a Pack - Bitcoin Trading Cards";

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Search site for Orange Pill in a Pack Bitcoin Trading Cards images, set lists, print run stats, booster pack simulator, and card listings for sale or trade."
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
          name="og:image"
          content="https://orangepillinapack.com/_ipx/w_256,q_75/%2Fimages%2Flogos%2FBTC_MAIN_LOGO.png?url=%2Fimages%2Flogos%2FBTC_MAIN_LOGO.png&w=256&q=75"
        />
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
        <HomeContainer>
          <div className="image-row">
            <Image
              src="/images/logos/BTC_MAIN_LOGO.png"
              height={105}
              width={150}
              alt="bitcoin trading cards logo"
            />
          </div>
          <LinksWrapper>
            <h1 style={{ margin: "0 10px 10px 10px" }}>
              Series Two - FUD Busters
            </h1>
            <CardContainer>
              <Card text="Set Images" />
              <Card text="Set List" />
              <Card text="Open a Pack" />
              <Card text="About Series 2" />
              <Card text="Listings" />
              <Card text="Buy a pack" />
            </CardContainer>
            <h1 style={{ margin: "30px 10px 10px 10px" }}>
              Series One - Orange Pill in a Pack
            </h1>
            <CardContainer>
              <Card
                text="Set Images"
                src="/images/cards/series-1/satoshi-limited-edition.jpeg"
              />
              <Card
                text="Set List"
                src="/images/cards/series-1/world-of-rusty.jpeg"
              />
              <Card
                text="Open a Pack"
                src="/images/packs/unopened_s1_pack.jpg"
              />
              <Card
                text="About Series 1"
                src="/images/cards/series-1/blockchain-ultrarare.jpeg"
              />
              <Card
                text="Listings"
                src="/images/cards/series-1/zimbabwe-dollar.jpeg"
              />
              <Card text="Buy a pack" />
            </CardContainer>

            <Link href="/series-1/cards">
              <Button href="/cards">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                  <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"></path>
                </svg>
                Series 1 Cards
              </Button>
            </Link>
            <Link href="/random-pack">
              <Button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h5v-2H4V7h16v12h-5v2h5c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                  <path d="M13 21v-5h3l-4-5-4 5h3v5z"></path>
                </svg>
                Open a Booster Pack
              </Button>
            </Link>
            <Link href="/listings">
              <Button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686z"></path>
                  </g>
                </svg>
                Current Listings
              </Button>
            </Link>

            <Link href="/series-1">
              <Button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 6C7.03 6 2 7.546 2 10.5v4C2 17.454 7.03 19 12 19s10-1.546 10-4.5v-4C22 7.546 16.97 6 12 6zm-8 8.5v-1.197a9.989 9.989 0 0 0 2 .86v1.881c-1.312-.514-2-1.126-2-1.544zm12 .148v1.971c-.867.179-1.867.31-3 .358v-2a21.75 21.75 0 0 0 3-.329zm-5 2.33a18.788 18.788 0 0 1-3-.358v-1.971c.959.174 1.972.287 3 .33v1.999zm7-.934v-1.881a9.931 9.931 0 0 0 2-.86V14.5c0 .418-.687 1.03-2 1.544zM12 13c-5.177 0-8-1.651-8-2.5S6.823 8 12 8s8 1.651 8 2.5-2.823 2.5-8 2.5z"></path>
                </svg>
                About Series 1 - Orange Pill
              </Button>
            </Link>
            <Link href="/series-2">
              <Button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M264.4 95.01c-35.6-.06-80.2 11.19-124.2 34.09C96.27 152 61.45 182 41.01 211.3c-20.45 29.2-25.98 56.4-15.92 75.8 10.07 19.3 35.53 30.4 71.22 30.4 35.69.1 80.29-11.2 124.19-34 44-22.9 78.8-53 99.2-82.2 20.5-29.2 25.9-56.4 15.9-75.8-10.1-19.3-35.5-30.49-71.2-30.49zm91.9 70.29c-3.5 15.3-11.1 31-21.8 46.3-22.6 32.3-59.5 63.8-105.7 87.8-46.2 24.1-93.1 36.2-132.5 36.2-18.6 0-35.84-2.8-50.37-8.7l10.59 20.4c10.08 19.4 35.47 30.5 71.18 30.5 35.7 0 80.3-11.2 124.2-34.1 44-22.8 78.8-52.9 99.2-82.2 20.4-29.2 26-56.4 15.9-75.7zm28.8 16.8c11.2 26.7 2.2 59.2-19.2 89.7-18.9 27.1-47.8 53.4-83.6 75.4 11.1 1.2 22.7 1.8 34.5 1.8 49.5 0 94.3-10.6 125.9-27.1 31.7-16.5 49.1-38.1 49.1-59.9 0-21.8-17.4-43.4-49.1-59.9-16.1-8.4-35.7-15.3-57.6-20zm106.7 124.8c-10.2 11.9-24.2 22.4-40.7 31-35 18.2-82.2 29.1-134.3 29.1-21.2 0-41.6-1.8-60.7-5.2-23.2 11.7-46.5 20.4-68.9 26.1 1.2.7 2.4 1.3 3.7 2 31.6 16.5 76.4 27.1 125.9 27.1s94.3-10.6 125.9-27.1c31.7-16.5 49.1-38.1 49.1-59.9z"></path>
                </svg>
                About Series 2 - FUD Busters
              </Button>
            </Link>
            <Link href="https://btc-tc.com/" target="_blank">
              <Button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
                Official Website
              </Button>
            </Link>
          </LinksWrapper>
        </HomeContainer>
      </Layout>
    </>
  );
}

export default Home;
