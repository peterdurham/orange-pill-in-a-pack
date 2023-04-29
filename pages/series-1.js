import Layout from "@/components/layout";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 600px;
  margin: 60px auto;

  h1 {
    margin-bottom: 20px;
  }
`;

const SeriesOne = () => {
  return (
    <Layout>
      <ContainerWrapper>
        <h1>About Series 1 - Orange Pill in a Pack</h1>
        <p>7,894 Total pack</p>
        <p>1,898 Pacific Bitcoin packs</p>
      </ContainerWrapper>
    </Layout>
  );
};

export default SeriesOne;
