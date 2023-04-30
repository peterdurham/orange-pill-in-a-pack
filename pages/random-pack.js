import { useState, useEffect } from "react";
import setList from "../data/set-list.json";
import CardStack from "../components/card-stack";
import Layout from "@/components/layout";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const commons = setList.filter((card) => card.rarity === "C"); // 47
const rares = setList.filter((card) => card.rarity === "R"); // 8
const ultraRares = setList.filter((card) => card.rarity === "UR"); // 3
const legendaries = setList.filter((card) => card.rarity === "L"); // 5

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
  const [contents, setContents] = useState([]);
  const [isPackEmpty, setIsPackEmpty] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!clicked) {
      const commonsPool = [...commons];
      let commonsOpened = [];

      for (let i = 0; i < 9; i++) {
        const indexOpened = Math.floor(Math.random() * commonsPool.length);
        const cardOpened = commonsPool.splice(indexOpened, 1)[0];
        commonsOpened.push(cardOpened);
      }

      const rareIndex = Math.floor(Math.random() * 7994);
      const rareOpened = setList.find(
        (card) => card.number === rarePool[rareIndex]
      );

      const packContents = [].concat(rareOpened).concat(commonsOpened);
      setContents(packContents);
      setIsPackEmpty(false);
    }
  }, [clicked]);

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <img
          src="/images/packs/unopened_s1_pack.jpg"
          style={{
            width: "170px",
            height: "285px",
            cursor: "pointer",
            margin: "16px auto",
            position: "absolute",
            top: "200px",
            transform: "translate(-50%, -50%)",
            boxShadow: isPackEmpty
              ? "0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)"
              : "none",
            // margin: "0 auto",
          }}
          onClick={() => {
            setClicked(true);
            setTimeout(() => {
              setClicked(false);
            }, 200);
          }}
        />
      </div>

      {contents.length && !clicked && (
        <CardStack
          contents={contents}
          isMobile={width <= 600}
          setIsPackEmpty={setIsPackEmpty}
        />
      )}

      {/* <div style={{ margin: "16px auto", width: "150px" }}>
        <Link
          href="/random-pack"
          onClick={() => {
            setClicked(true);
            setTimeout(() => {
              setClicked(false);
            }, 200);
          }}
        >
          <Button>New Pack</Button>
        </Link>
      </div> */}
    </Layout>
  );
};
export default RandomPack;
