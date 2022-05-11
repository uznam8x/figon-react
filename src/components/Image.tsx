import { useContext } from "react";
import Context from "../context";

type PropsType = {
  children?: any;
  style?: { [key: string]: any };
  dataset?: { src?: string; alt?: string };
  bind?: string;
};

const assoc = (key: string, data: { [key: string | number]: any }) =>
  key.split(".").reduce((a, b: string) => a[b], data);

function Image({ dataset = {}, style = {}, bind = "" }: PropsType) {
  const ctx = useContext(Context);
  let { alt = "" } = dataset;

  let src: any = dataset.src;
  if (!!bind) {
    src = assoc(bind, ctx) || dataset.src;
  }
  return <img {...{ src, alt, style }} />;
}

export default Image;
