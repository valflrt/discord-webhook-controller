/**
 * Function that uses template strings to ease the process of
 * writing html strings
 */
export function fmt(
  strings: TemplateStringsArray,
  ...elements: {
    0: string; // content
    1: keyof HTMLElementTagNameMap; // tag
    2?: string | undefined; // class
  }[]
) {
  return strings
    .map((s, i) =>
      i !== strings.length - 1
        ? s.concat(
            `<${elements[i][1]} ${
              elements[i][2] ? `class="${elements[i][2]}"` : ""
            }>${elements[i][0]}</${elements[i][1]}>`
          )
        : s
    )
    .join("");
}

export function setInfoFactory(infoElement: HTMLElement) {
  return function setInfo(
    message?: string,
    type?: "error" | "success" | "hidden"
  ) {
    infoElement.className = "info hidden";
    infoElement.innerHTML = message ?? "";
    if (message) infoElement.classList.remove("hidden");
    if (type) infoElement.classList.add(type);
  };
}

export function ellipsis(str: string, outputLength: number = 40) {
  let strLength = str.length;
  let midOutputLength = Math.floor(outputLength - 3 / 2);
  return strLength > outputLength
    ? str
        .substring(0, midOutputLength)
        .concat("...")
        .concat(str.substring(strLength - midOutputLength, strLength))
    : str;
}
