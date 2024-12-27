import { useCollection } from "../hooks/useClollection";

function OnlineUsersr() {
  useCollection("users");
  return (
    <div className="w-[200px] bg-indigo-600 p-10 text-white">OnlineUsersr</div>
  );
}

export default OnlineUsersr;
