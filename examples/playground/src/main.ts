import { createApp, h } from "chibivue";

const app = createApp({
  render() {
    return h("div", {}, [
      h("p", {}, ["Hello world."]),
      h(
        "button",
        {
          onClick() {
            console.log("Hello world");
          }
        },
        ["click me!"]
      )
    ]);
  }
});

app.mount("#app");
