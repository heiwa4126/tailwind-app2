import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Video1 from "./Video1";

interface Size {
  w: number;
  h: number;
}
const sizes: Size[] = [
  { w: 640, h: 360 },
  { w: 256, h: 256 },
  { w: 512, h: 480 },
];

function App() {
  const video1 = useRef<HTMLDivElement>(null!);
  const [i1, setI1] = useState(0);
  const [size1, setSize1] = useState<Size>({ w: 640, h: 360 });
  useEffect(() => {
    const sz = {
      h: video1.current.clientHeight,
      w: video1.current.clientWidth,
    };
    if (!(sz.h === size1.h && sz.w === size1.w)) {
      setSize1(sz);
    }
  });
  const onClickVideo1 = () => {
    let i = i1 + 1;
    if (i >= sizes.length) {
      i = 0;
    }
    const sz = sizes[i];
    const sy = video1.current.style;
    sy.width = `${sz.w}px`;
    sy.height = `${sz.h}px`;
    setI1(i);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">test</h1>
      <div
        ref={video1}
        className="fc h-[360px] w-[640px] bg-blue-600 font-serif text-white"
        onClick={onClickVideo1}
      >
        <div>
          <p className="text-3xl">video</p>
          <p>
            {size1.w} × {size1.h}
          </p>
        </div>
      </div>
      <Video1 className="fc h-[360px] w-[640px] bg-blue-600 font-serif text-white" />
    </>
  );
}

export default App;
