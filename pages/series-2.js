import Layout from "@/components/layout";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 600px;
  margin: 60px auto;

  h1 {
    margin-bottom: 20px;
  }
`;

const SeriesTwo = () => {
  return (
    <Layout>
      <ContainerWrapper>
        <h1>About Series 2 - FUD Busters</h1>
      </ContainerWrapper>
    </Layout>
  );
};

export default SeriesTwo;
