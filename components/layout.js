import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderStyles = styled.div`
  border-bottom: 1px solid rgb(209, 213, 219);
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 24px;

  @media (max-width: 720px) {
    font-size: 18px;
  }

  .home-link {
    color: #000;
    text-decoration: none;
  }
  .site-link {
    color: #000;
    text-decoration: none;
  }
`;

const BannerWrapper = styled.div`
  width: 100%;
  background: #f9b200;
  text-align: center;
  font-size: 18px;
  padding: 8px 0;
  & a {
    color: black;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
  & a:visited {
    color: black;
  }
`;

const Layout = ({ children }) => {
  const router = useRouter();
  console.log("router", router);
  function handleClick(e) {
    // console.log("clicked");
  }
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="MTG Alpha" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <HeaderStyles>
        <Link href="/" className="home-link">
          Orange Pill in a Pack
        </Link>
        <Link href="/random-pack" className="site-link" onClick={handleClick()}>
          Open a Pack
        </Link>
      </HeaderStyles>
      {router.route === "/" && (
        <BannerWrapper>
          <Link href="https://btc-tc.com/collections/frontpage">
            Pre-order series 2
          </Link>
        </BannerWrapper>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
