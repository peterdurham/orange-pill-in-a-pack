import Link from "next/link";
import styled from "styled-components";

const ListingWrapper = styled.div`
  border-bottom: 1px solid rgb(209, 213, 219);
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
  title,
  price,
  currency,
  site,
  sellerName,
  sellerURL,
}) => {
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
          <div
            style={{
              width: "20%",
              fontSize: "20px",
              fontWeight: "700",
              marginTop: "6px",
              marginBottom: "4px",
            }}
          >
            <Link target="_blank" href={url} className="title-link">
              {currency === "USD" && "$"}
              {price.toFixed(2)}
            </Link>
          </div>
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
