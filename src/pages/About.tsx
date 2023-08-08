import Layout from "./Layout";
import History from "../components/About/History";
import Overview from "../components/About/Overview";
import Chefs from "../components/About/Chefs";
import Kitchen from "../components/About/Kitchen";
import { Divider } from "@chakra-ui/react";

const About = () => {
  return (
    <Layout>
      <History />
      <Divider orientation="horizontal" />
      <Chefs />
      <Divider orientation="horizontal" />
      <Overview />
      <Divider orientation="horizontal" />
      <Kitchen />
      <Divider orientation="horizontal" />
    </Layout>
  );
};

export default About;
