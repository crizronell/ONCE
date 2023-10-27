import Content from "./Components/Content";
import Trailer from "./Components/Trailer";
export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <Trailer />
      </div>
      <Content />
    </main>
  );
}
