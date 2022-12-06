import "./App.css";
import Video1 from "./components/Video1";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">test</h1>
      <Video1 className="v1 bg-blue-600" />
      <Video1 className="v1 bg-green-600" />
      <Video1 className="v1 bg-red-600" />
    </>
  );
}

export default App;
