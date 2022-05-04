type PropsType = {
  children?: any;
  style?: { [key: string]: any };
  dataset?: { href?: string; target?: string };
};
function Anchor({ dataset = {}, style, children }: PropsType) {
  const { href = "#", target = "_self" } = dataset;
  return <a {...{ href, target, style }}>{children}</a>;
}

export default Anchor;
