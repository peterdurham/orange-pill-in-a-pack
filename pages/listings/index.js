import Layout from "@/components/layout";
import styled from "styled-components";
import Link from "next/link";
import activeListings from "../../data/active-listings.json";
import Listing from "@/components/Listing";

const listings = [
  {
    slug: "blockchain-ultrarare",
  },
];

const ListingsWrapper = styled.div`
  width: 720px;
  margin: 60px auto;
  border: 1px solid #dee3e7;
  border-radius: 16px;

  & .page-header {
    padding: 16px;
    background: #f8f8f8;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    border-bottom: 1px solid #dee3e7;
  }

  & .listing {
    display: flex;
    padding: 16px;
    text-decoration: none;
    color: #000;
  }
  & .title-link {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 720px) {
    & {
      width: calc(100% - 48px);
      margin-left: 24px;
      margin-right: 24px;
    }
  }
`;

const Listings = () => {
  return (
    <Layout>
      <ListingsWrapper>
        <h1 className="page-header">Current Listings</h1>
        {/* <h1 style={{ padding: "16px" }}>Scarce.city</h1> */}
        <h1 style={{ padding: "16px" }}>ebay</h1>
        <div>
          {activeListings.map((listing, index) => {
            return (
              <Listing
                key={index}
                url={listing.url}
                imageURL={listing.imageURL}
                title={listing.title}
                price={listing.price}
                sellerName={listing.sellerName}
                sellerURL={listing.sellerURL}
              />
            );
          })}
        </div>
      </ListingsWrapper>
    </Layout>
  );
};

export default Listings;
