import { createApp, h, reactive } from "chibivue";

const app = createApp({
  setup() {
    const state = reactive({ count: 0 });

    const increment = () => {
      state.count++;
    };

    return function render() {
      return h("div", { id: "my-app" }, [
        h("p", { style: "color: red; font-weight: bold;", class: "my-class" }, [
          `count: ${state.count}`
        ]),
        h(
          "button",
          {
            onClick: increment,
            style:
              "background-color: teal; padding: 10px 15px; color: red; cursor: pointer;"
          },
          ["click me!"]
        )
      ]);
    };
  }
});

app.mount("#app");
