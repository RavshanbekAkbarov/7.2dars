import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((store) => store.user);
}

export default Home;
