import { Component } from "./component";
import { RootRenderFunction } from "./renderer";
import { ReactiveEffect } from "@chibivue/reactivity";

export interface App<HostElement = any> {
  mount(rootContainer: HostElement | string): void;
}

export type CreateAppFunction<HostElement> = (
  rootComponent: Component
) => App<HostElement>;

export function createAppAPI<HostElement>(
  render: RootRenderFunction<HostElement>
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent) {
    const app: App = {
      mount(rootContainer: HostElement) {
        if (!rootComponent.setup) {
          throw new Error("Component is not setup");
        }

        const componentRender = rootComponent.setup();

        const updateComponent = () => {
          const vnode = componentRender();
          render(vnode, rootContainer);
        };

        const effect = new ReactiveEffect(updateComponent);
        effect.run();
      }
    };

    return app;
  };
}
