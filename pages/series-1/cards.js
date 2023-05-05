import Layout from "@/components/layout";
import CardList from "@/components/CardList";
import CardImages from "@/components/CardImages";

const Cards = ({ cardView, setCardView }) => {
  function handleToggle() {
    if (cardView === "images") {
      setCardView("list");
    } else if (cardView === "list") {
      setCardView("images");
    }
  }

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <button onClick={handleToggle}>
          Show {cardView === "list" && "Images"}{" "}
          {cardView === "images" && "List"}{" "}
        </button>
      </div>
      {cardView === "list" && <CardList />}
      {cardView === "images" && <CardImages />}
    </Layout>
  );
};

export default Cards;
