import Image from "next/image";
import Item from "./components/Item";
export default function Home() {

  return (
    <div>
      <header className="fixed z-50 top-3 left-3 font-bold text-4xl">BACKSTAGE TALKS</header>
      <Item backgroundColor={"#2f27ce"} source={""} />
      <Item backgroundColor={"#fb5bfe"} source={""} />
      <Item backgroundColor={"#6da18e"} source={""} />
      <Item backgroundColor={"#b48ab2"} source={""} />
      <Item backgroundColor={"#ce4582"} source={""} />
      <Item backgroundColor={"#39d69b"} source={""} />
    </div>
  );
}
