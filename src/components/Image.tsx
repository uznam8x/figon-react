type PropsType = {
  style?: { [key: string]: any };
  dataset?: { src?: string; alt?: string };
};
function Image({ dataset = {} }: PropsType) {
  const { src, alt = "" } = dataset;
  return <img {...{ src, alt }} />;
}

export default Image;
