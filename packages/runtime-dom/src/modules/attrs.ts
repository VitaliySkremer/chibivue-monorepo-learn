// Установка аттрибутов
export function patchAttr(el: Element, key: string, value: unknown | null) {
  if (value === null) {
    el.removeAttribute(key);
  } else {
    el.setAttribute(key, String(value));
  }
}
