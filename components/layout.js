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
  width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

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
  @media (max-width: 1000px) {
    width: 100%;
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
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
      margin-left: 8px;
    }
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

  function handleClick(e) {
    // console.log("clicked");
  }
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeaderStyles>
        <Link href="/" className="home-link">
          Orange Pill in a Pack
        </Link>
        {router.route !== "/random-pack" && (
          <Link
            href="/random-pack"
            className="site-link"
            onClick={handleClick()}
          >
            Open a Pack
          </Link>
        )}
      </HeaderStyles>
      {router.route === "/" && (
        <BannerWrapper>
          <Link href="https://btc-tc.com/collections/frontpage">
            Pre-order series 2 packs
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
          </Link>
        </BannerWrapper>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
