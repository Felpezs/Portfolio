import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <h1 className="text-white">Hello World</h1>
    </main>
  );
}
