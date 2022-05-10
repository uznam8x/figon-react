import { useContext } from "react";
import Context from "../context";
type PropsType = {
  children?: any;
  style?: { [key: string]: any };
  dataset?: { src?: string; alt?: string };
  bind?: string;
};
function Image({ dataset = {}, style = {}, bind = "" }: PropsType) {
  const ctx = useContext(Context);
  let { alt = "" } = dataset;

  let src = dataset.src;
  if (!!bind && !!ctx[bind]) src = ctx[bind];
  return <img {...{ src, alt, style }} />;
}

export default Image;
