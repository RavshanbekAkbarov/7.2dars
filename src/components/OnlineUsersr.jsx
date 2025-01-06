import { useCollection } from "../hooks/useCollection";

function OnlineUsersr() {
  const { documents } = useCollection("users");
  console.log(documents);
  return (
    <div className="w-[200px] bg-indigo-600 p-10 text-white">OnlineUsersr</div>
  );
}

export default OnlineUsersr;
