import Anchor from "./components/Anchor";
import Image from "./components/Image";

const Resource: any = { img: Image, Image, a: Anchor, Anchor };

function Renderer({ view, root }: any) {
  let Component = view.tagName;
  let dataset = {};
  let attrs = Object.entries(view.dataset || {}).reduce(
    (a, b) => ({ ...a, [`data-${b[0]}`]: b[1] }),
    {}
  );

  if (!!Resource[view.tagName]) {
    Component = Resource[view.tagName];
    dataset = view.dataset;
  }

  return (
    <Component
      key={view.key}
      {...{
        style: {
          ...view.style,
          ...(root ? { maxWidth: view.offset.width, margin: "0 auto" } : {}),
        },
        ...(!!Object.keys(dataset).length ? { dataset } : { ...attrs }),
      }}
    >
      {!!view.textContent && view.textContent}
      {!!(view.children || []).length &&
        view.children.map((item: any) => (
          <Renderer key={item.id} view={item} />
        ))}
    </Component>
  );
}

export default Renderer;
