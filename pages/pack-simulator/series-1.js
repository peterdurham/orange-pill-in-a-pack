import { useState, useEffect } from "react";
import seriesOneList from "../../data/series-1-list.json";
import CardStack from "../../components/card-stack";
import Layout from "@/components/layout";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import styled from "styled-components";
import * as gtag from "../../lib/gtag";

const PackWrapper = styled.div`
  text-align: center;

  & img {
    width: 170px;
    height: 285px;
    cursor: pointer;
    margin: 32px auto;
    position: absolute;
    top: 200px;
    transform: translate(-50%, -50%);
    transition: 0.7s all 0.2s;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }
  & .click-text {
    position: absolute;
    top: 104px;
    left: 50%;
    z-index: 10;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }
`;

const commons = seriesOneList.filter((card) => card.rarity === "C"); // 47
const rares = seriesOneList.filter((card) => card.rarity === "R"); // 8
const ultraRares = seriesOneList.filter((card) => card.rarity === "UR"); // 3
const legendaries = seriesOneList.filter((card) => card.rarity === "L"); // 5

const rarePool = [];
rares.forEach((rare) => {
  if (rare.number !== "1" && rare.number !== "2")
    for (let i = 0; i < 999; i++) {
      rarePool.push(rare.number);
    }
});
ultraRares.forEach((ultrarare) => {
  for (let i = 0; i < 500; i++) {
    rarePool.push(ultrarare.number);
  }
});
legendaries.forEach((legendary) => {
  for (let i = 0; i < 100; i++) {
    rarePool.push(legendary.number);
  }
});

const RandomPack = () => {
  const [didMount, setDidMount] = useState(false);
  const [packCount, setPackCount] = useState(0);
  const [contents, setContents] = useState([]);
  const [isPackEmpty, setIsPackEmpty] = useState(true);
  const [clicked, setClicked] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!clicked && didMount) {
      const commonsPool = [...commons];
      let commonsOpened = [];

      for (let i = 0; i < 9; i++) {
        const indexOpened = Math.floor(Math.random() * commonsPool.length);
        const cardOpened = commonsPool.splice(indexOpened, 1)[0];
        commonsOpened.push(cardOpened);
      }

      const rareIndex = Math.floor(Math.random() * 7994);
      const rareOpened = seriesOneList.find(
        (card) => card.number === rarePool[rareIndex]
      );

      const packContents = [].concat(rareOpened).concat(commonsOpened);
      setContents(packContents);
      setIsPackEmpty(false);
      setPackCount(packCount + 1);
      gtag.event({
        action: "pack_open",
        category: "pack_event",
        label: "series_1_pack_label",
        value: "series_1_pack",
      });
    }
    if (!didMount) {
      setDidMount(true);
    }
  }, [clicked]);

  return (
    <Layout>
      <PackWrapper>
        {isPackEmpty && packCount === 0 && (
          <div className="click-text">Click to open</div>
        )}
        <img
          src="/images/packs/unopened_s1_pack.jpg"
          style={{
            boxShadow: isPackEmpty
              ? "0 12.5px 100px -10px rgba(50, 50, 73, 0.3), 0 10px 10px -10px rgba(50, 50, 73, 0.3)"
              : "none",
          }}
          onClick={() => {
            setClicked(true);
            setTimeout(() => {
              setClicked(false);
            }, 200);
          }}
        />
      </PackWrapper>

      {contents.length > 0 && !clicked && (
        <CardStack
          contents={contents}
          isMobile={width <= 600}
          setIsPackEmpty={setIsPackEmpty}
        />
      )}
    </Layout>
  );
};
export default RandomPack;
