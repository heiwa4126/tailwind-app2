import { useEffect, useRef, useState } from "react";
import "./App.css";

interface Size {
  w: number;
  h: number;
}
const equalSize = (a: Size, b: Size): boolean => {
  return a.h === b.h && a.w === b.w;
};

interface Props {
  className: string;
}

const sizes: Size[] = [
  { w: 640, h: 360 },
  { w: 256, h: 256 },
  { w: 512, h: 480 },
];

function Video1(props: Props) {
  const video1 = useRef<HTMLDivElement>(null!);
  const [i1, setI1] = useState(0);
  const [size1, setSize1] = useState<Size>({ w: -1, h: -1 });
  useEffect(() => {
    const v = video1.current;
    if (v) {
      const sz = { h: v.clientHeight, w: v.clientWidth };
      if (!equalSize(sz, size1)) {
        setSize1(sz);
      }
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
    <div ref={video1} onClick={onClickVideo1} className={props.className}>
      <div>
        <p className="text-3xl">video</p>
        <p>
          {size1.w} × {size1.h}
        </p>
      </div>
    </div>
  );
}

export default Video1;
