import { createApp, h, reactive } from "chibivue";

const App = {
  setup() {
    const state = reactive({ count: 0 });
    const value = reactive({ msg: "" });

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
        ),
        h("div", {}, [
          h("p", {}, [value.msg]),
          h(
            "input",
            {
              type: "text",
              onInput: (e: Event) => {
                value.msg = (e.target as HTMLInputElement).value;
              },
              value: value.msg
            },
            []
          )
        ])
      ]);
    };
  }
};

const app = createApp(App);

app.mount("#app");
