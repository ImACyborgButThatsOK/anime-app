import Intro from "../components/Intro/Intro";
import List from "../components/List/List";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Intro />
      <List />
    </div>
  );
};

export default Home;
