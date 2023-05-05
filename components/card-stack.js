import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import styles from "styles/CardStack.module.css";
import styled from "styled-components";

const DeckWrapper = styled.div`
  cursor: url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png")
      39 39,
    auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;

  & .deck {
    position: absolute;
    width: 300px;
    height: 200px;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: none;
  }

  & .deck > div {
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 200px;
    height: 285px;
    will-change: transform;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
      0 10px 10px -10px rgba(50, 50, 73, 0.3);
    border-bottom: 1px solid grey;
  }
`;

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -1, // Change to -1.5 to increase card stack height
  scale: 1,
  // rot: -10 + Math.random() * 20,
  rot: 0,
  delay: i * 1, // 21 shows rare border
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck({ contents, isMobile, setIsPackEmpty }) {
  const cards = contents.map((item) => item?.image);
  const [clicked, setClicked] = useState(false);
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out;
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = isMobile ? velocity > 0.2 : velocity >= 0; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      if (index === 0) {
        setIsPackEmpty(true);
      }
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
    }
  );

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  );
}

export default function CardStack({ contents, isMobile, setIsPackEmpty }) {
  return (
    <DeckWrapper>
      <Deck
        contents={contents}
        isMobile={isMobile}
        setIsPackEmpty={setIsPackEmpty}
      />
    </DeckWrapper>
  );
}
