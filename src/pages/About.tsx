import Layout from "./Layout";
import History from "../components/About/History";
import Overview from "../components/About/Overview";
import Chefs from "../components/About/Chefs";
import Kitchen from "../components/About/Kitchen";

const About = () => {
  return (
    <Layout>
      <History />
      <Chefs />
      <Overview />
      <Kitchen />
    </Layout>
  );
};

export default About;
