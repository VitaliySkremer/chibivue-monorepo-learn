import { RendererOptions } from "runtime-core";
import { patchEvent } from "./modules/events";

type DOMRendererOptions = RendererOptions<Node, Element>;

const onRE = /^on[^a-z]/;
export const isOn = (key: string) => onRE.test(key);

export const patchProp: DOMRendererOptions["patchProp"] = (el, key, value) => {
  if (isOn(key)) {
    // Патчим события
    patchEvent(el, key, value);
  } else {
    // Патчим аттрибуты
    // patchAttr(el, key, value); // We will implement this later
  }
};
