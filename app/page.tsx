import Nav from "./components/nav";

export default function Home() {
  return (
    <div>
<Nav />      
    <div className="flex flex-col w-max mt-16">

      <h1 className="bg-green-400 text-3xl py-2 px-10 rounded-3xl mb-2">Hello</h1>
      <h1 className="bg-green-400 text-3xl py-2 px-10 rounded-3xl mb-2">Welcome to my Next.js</h1>
      <h1 className="bg-green-400 text-3xl py-2 px-10 rounded-3xl mb-2">Application with Dynamic Route</h1>
    </div>
    </div>
  );
}