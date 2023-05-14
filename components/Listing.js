import Link from "next/link";
import styled from "styled-components";

const CardImageWrapper = styled.div`
  width: 80px;
  padding-right: 16px;

  & img {
    width: 100%;
  }

  @media (max-width: 720px) {
    width: 120px;
  }
`;

const Listing = ({ url, imageURL, title, price, sellerName, sellerURL }) => {
  return (
    <div className="listing">
      <Link target="_blank" href={url}>
        <CardImageWrapper>
          <img src={imageURL} />
        </CardImageWrapper>
      </Link>
      <div>
        <Link target="_blank" href={url} className="title-link">
          <p style={{ fontWeight: 700 }}>{title}</p>
        </Link>
        <div style={{ margin: "4px auto" }}>${price.toFixed(2)}</div>
        <Link href={sellerURL} target="_blank">
          {sellerName}
        </Link>
      </div>
    </div>
  );
};

export default Listing;
