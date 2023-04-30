import styled from "styled-components";
import Link from "next/link";

const CardNavigationContainer = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: #767676;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: 0.2s all;
    max-width: 50%;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }
  a:hover {
    color: #000;
  }
  & svg {
    font-size: 24px;
  }
  a:first-child svg {
    margin-right: 4px;
  }
  a:last-child svg {
    margin-left: 4px;
  }
`;

const CardNavigation = ({ prevCard, nextCard }) => {
  return (
    <CardNavigationContainer className="mobile-hidden">
      {prevCard ? (
        <Link href={`/series-1/${prevCard.slug}`}>
          {" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"></path>
          </svg>
          {prevCard.name}
        </Link>
      ) : (
        <div></div>
      )}
      {nextCard ? (
        <Link href={`/series-1/${nextCard.slug}`}>
          {nextCard.name}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
          </svg>
        </Link>
      ) : (
        <div></div>
      )}
    </CardNavigationContainer>
  );
};
export default CardNavigation;
