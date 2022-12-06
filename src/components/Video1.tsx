import { useEffect, useRef, useState } from "react";
import Size from "../modules/Size";
import "./Video1.css";

interface Props {
  className: string;
}

const sizes: Size[] = [
  new Size(640, 360),
  new Size(256, 256),
  new Size(512, 480),
];

function Video1(props: Props) {
  const video1 = useRef<HTMLDivElement>(null!);
  const [i1, setI1] = useState(0);
  const [size1, setSize1] = useState<Size>(new Size(-1, -1));
  useEffect(() => {
    const { current } = video1;
    const sz = new Size(current.clientWidth, current.clientHeight);
    if (!sz.equal(size1)) {
      setSize1(sz);
    }
  });
  const onClickVideo1 = () => {
    let i = (i1 + 1) % sizes.length;
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
        <p>{size1.toStr()}</p>
      </div>
    </div>
  );
}

export default Video1;
