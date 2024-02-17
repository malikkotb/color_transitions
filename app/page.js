import Image from "next/image";
import Item from "./components/Item";
export default function Home() {

  

  return (
    <main>
      <header className="fixed top-3 left-3 font-bold text-4xl">BACKSTAGE TALKS</header>
      <Item source={""} />
      <Item source={""} />
      <Item source={""} />
      <Item source={""} />
      <Item source={""} />
      <Item source={""} />
    </main>
  );
}
