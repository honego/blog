const providers = {
  bilibili: (id) => (/^BV[\w]+$/.test(id) ? `https://player.bilibili.com/player.html?bvid=${id}&page=1` : null),
  youtube: (id) => (/^[\w-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : null),
  vimeo: (id) => (/^\d+$/.test(id) ? `https://player.vimeo.com/video/${id}` : null),
};

const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const escapeAttribute = (value) => value.replace(/[&<>"']/g, (character) => entities[character]);
const isVideoUrl = (url) => /^(?:https?:\/\/|\.{0,2}\/)/.test(url) || !/^[a-z][\w+.-]*:/i.test(url);
const playerSize = ({ width, height }) =>
  /^[1-9]\d*$/.test(width) && /^[1-9]\d*$/.test(height)
    ? {
        className: " video-sized",
        style: ` style="max-width:${width}px;aspect-ratio:${width}/${height}"`,
      }
    : { className: "", style: "" };

export default {
  name: "video",
  leafDirective(node) {
    const attributes = node.attributes ?? {};

    if (node.name === "video") {
      const { src, poster } = attributes;

      if (!src || !isVideoUrl(src)) return;

      const size = playerSize(attributes);
      const posterAttribute = poster && isVideoUrl(poster) ? ` poster="${escapeAttribute(poster)}"` : "";

      return {
        raw: `<div class="video-player${size.className}"${size.style}><video src="${escapeAttribute(src)}"${posterAttribute} controls preload="metadata"></video></div>`,
        mdxExpressions: false,
      };
    }

    const { id } = attributes;
    const src = id && providers[node.name]?.(id);

    if (!src) return;

    const size = playerSize(attributes);
    const title = escapeAttribute(attributes.title ?? `${node.name} video`);

    return {
      raw: `<div class="video-player video-embed${size.className}"${size.style}><iframe src="${escapeAttribute(src)}" title="${title}" loading="lazy" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`,
      mdxExpressions: false,
    };
  },
};
