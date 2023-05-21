import Link from "next/link";
import styled from "styled-components";

const ListingWrapper = styled.div`
  border-bottom: 1px solid rgb(209, 213, 219);

  .listing-price {
    width: 20%;
    font-size: 20px;
    font-weight: 700;
    margin-top: 6px;
    margin-bottom: 4px;
  }
`;

const AuctionLabelWrapper = styled.div`
  color: rgb(183, 110, 0);
  background-color: rgba(255, 171, 0, 0.16);
  padding: 0px 6px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  display: inline-block;
  margin: 5px 0;
`;

const ListingLabelWrapper = styled.div`
  color: rgb(27, 128, 106);
  background-color: rgba(54, 179, 126, 0.16);
  padding: 0px 6px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  display: inline-block;
  margin: 5px 0;
`;

const CardImageWrapper = styled.div`
  width: 100px;
  padding-right: 16px;

  & img {
    width: 100%;
  }

  @media (max-width: 720px) {
    width: 120px;
  }
`;

const Listing = ({
  url,
  imageURL,
  type,
  title,
  price,
  currency,
  site,
  sellerName,
  sellerURL,
}) => {
  console.log("type", type);
  return (
    <ListingWrapper className="listing">
      <Link target="_blank" href={url}>
        <CardImageWrapper>
          <img src={imageURL} />
        </CardImageWrapper>
      </Link>
      <div style={{ width: "100%" }}>
        <Link target="_blank" href={url} className="title-link">
          <p style={{ fontWeight: 400 }}>{title}</p>
        </Link>
        {price && (
          <div className="listing-price">
            <Link target="_blank" href={url} className="title-link">
              {currency === "USD" && "$"}
              {price.toFixed(2)}
            </Link>
          </div>
        )}
        {type === "auction" && (
          <AuctionLabelWrapper>Auction</AuctionLabelWrapper>
        )}
        {type === "listing" && (
          <ListingLabelWrapper>Listing</ListingLabelWrapper>
        )}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Link target="_blank" href={url} className="title-link">
              {site}{" "}
            </Link>
            <span>
              ({" "}
              {sellerURL ? (
                <Link href={sellerURL} target="_blank">
                  {sellerName}
                </Link>
              ) : (
                <span>{sellerName}</span>
              )}{" "}
              )
            </span>
          </div>
        </div>
        <div style={{ width: "80%" }}></div>
      </div>
    </ListingWrapper>
  );
};

export default Listing;
