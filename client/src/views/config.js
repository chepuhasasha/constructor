export default {
  id: 1,
  type: "json",
  name: "Test view",
  description: "this is test view",
  global: {
    classes: {
      text: {
        fontSize: "26px",
        fontFamily: "Arial",
        color: "rgba(0,0,0,0.8)",
      },
      subtext: {
        fontSize: "14px",
      },
      card: {
        background: "#ffffff",
        padding: "20px",
        border: "1px solid rgba(0,0,0,0.1)",
      },
    },
  },
  layout: [
    {
      tag: "div",
      name: "c1",
      content: "container 1",
      attrs: {
        title: "C1",
      },
      classes: ["text", "card"],
      style: {},
      childs: [
        {
          tag: "p",
          name: "c1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          attrs: {
            title: "C1",
          },
          classes: ["subtext"],
          style: {},
          childs: [],
        },
      ],
    },
    {
      tag: "div",
      name: "c1",
      content: "container 1",
      attrs: {
        title: "C1",
      },
      classes: ["text", "card"],
      style: {},
      childs: [
        {
          tag: "p",
          name: "c1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          attrs: {
            title: "C1",
          },
          classes: ["subtext"],
          style: {},
          childs: [],
        },
      ],
    },
  ],
};
