const copyIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
    width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5
      a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25
      v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
    <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5
      A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25
      a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5
      a.25.25 0 0 0-.25-.25Z"></path>
  </svg>
`;

const copiedIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
    width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0
      L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018
      L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
  </svg>
`;

document.querySelectorAll<HTMLPreElement>(".prose pre").forEach((pre) => {
  const code = pre.querySelector("code");
  if (!code) return;

  const wrapper = document.createElement("div");
  wrapper.className = "copy-code-wrapper";
  pre.before(wrapper);
  wrapper.append(pre);

  const button = document.createElement("button");
  button.className = "copy-button";
  button.type = "button";
  button.ariaLabel = "Copy code to clipboard";
  button.innerHTML = copyIcon;

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent ?? "");
      button.dataset.copyState = "copied";
      button.innerHTML = copiedIcon;

      window.setTimeout(() => {
        button.dataset.copyState = "idle";
        button.innerHTML = copyIcon;
      }, 1500);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  });

  button.dataset.copyState = "idle";
  wrapper.prepend(button);
});
