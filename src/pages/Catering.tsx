import { Divider } from "@chakra-ui/react";
import CateringComponent from "../components/Catering/CateringComponent";
import Layout from "./Layout";

const Catering = () => {
  return (
    <Layout>
      <CateringComponent />
      <Divider orientation="horizontal" />
    </Layout>
  );
};

export default Catering;
