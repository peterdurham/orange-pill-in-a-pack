import { useState, useEffect } from "react";
import setList from "../data/set-list.json";
import Image from "next/image";
import CardStack from "../components/card-stack";
import Layout from "@/components/layout";
import Button from "@/components/button";
import Link from "next/link";

const rares = setList.filter((card) => card.rarity === "R"); // 113
const uncommons = setList.filter((card) => card.rarity === "U"); // 94
const commons = setList.filter((card) => card.rarity === "C"); // 83

const RandomPack = () => {
  const [contents, setContents] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) {
      const commonsOpened = Array.from({ length: 11 }, () =>
        Math.floor(Math.random() * 83)
      ).map((index) => commons[index]);
      const uncommonsOpened = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * 94)
      ).map((index) => uncommons[index]);
      const rareOpened = Array.from({ length: 1 }, () =>
        Math.floor(Math.random() * 113)
      ).map((index) => rares[index]);

      const packContents = []
        .concat(rareOpened)
        .concat(uncommonsOpened)
        .concat(commonsOpened);

      setContents(packContents);
    }
  }, [clicked]);

  return (
    <Layout>
      {contents.length && !clicked && <CardStack contents={contents} />}

      <div style={{ margin: "16px auto", width: "150px" }}>
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
      </div>
    </Layout>
  );
};
export default RandomPack;
