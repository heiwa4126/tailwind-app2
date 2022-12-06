import "./App.css";
import Video1 from "./components/Video1";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">test</h1>
      <Video1 className="fc h-[360px] w-[640px] bg-blue-600 font-serif text-white" />
      <Video1 className="fc h-[360px] w-[640px] bg-green-600 font-serif text-white" />
      <Video1 className="fc h-[360px] w-[640px] bg-red-600 font-serif text-white" />
    </>
  );
}

export default App;
