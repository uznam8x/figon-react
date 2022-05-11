import Anchor from "./components/Anchor";
import Image from "./components/Image";
import Element from "./components/Element";

export { default as Context } from "./context";
const Resource: any = { img: Image, Image, a: Anchor, Anchor };

function Renderer({ view, root, components = {} }: any) {
  let Assets = { ...Resource, ...components };

  let Component = !!Assets[view.tagName]
    ? Assets[view.tagName]
    : !!Assets["element"]
    ? Assets["element"]
    : Element;

  const { children = [], ...rest } = view;
  return (
    <Component key={view.key} {...rest} root>
      {!!children.length &&
        children.map((item: any) => (
          <Renderer key={item.key} view={item} components={components} />
        ))}
    </Component>
  );
}

export default Renderer;
