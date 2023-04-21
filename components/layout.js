import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

const HeaderStyles = styled.div`
  border-bottom: 1px solid rgb(209, 213, 219);
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
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

const Layout = ({ children }) => {
  function handleClick(e) {
    console.log("clicked");
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;
