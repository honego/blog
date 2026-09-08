const percent = /^\d+(?:\.\d+)?%$/;

export default {
  name: "html-image",
  element: {
    filter: ["img"],
    visit(node, context) {
      const properties = node.properties ?? {};
      const src = typeof properties.src === "string" ? decodeURI(properties.src) : "";

      if (src && !URL.canParse(src) && !src.startsWith("/")) {
        context.data.astro?.localImagePaths.add(src);
      }

      if (typeof properties.width !== "string" || !percent.test(properties.width)) return;

      context.setProperty(node, "style", [properties.style, `width:${properties.width}`].filter(Boolean).join(";"));
      context.setProperty(node, "width", null);
    },
  },
};
