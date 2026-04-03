import { createApp, h } from "chibivue";

const app = createApp({
  render() {
    return h("div", { id: "my-app" }, [
      h("p", { style: "color: red; font-weight: bold;", class: "my-class" }, [
        "Hello world."
      ]),
      h(
        "button",
        {
          onClick() {
            console.log("Hello world");
          },
          style: "background-color: teal; padding: 10px 15px; color: red; cursor: pointer;",
        },
        ["click me!"]
      )
    ]);
  }
});

app.mount("#app");
