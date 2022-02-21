export default {
  id: 1,
  type: "json",
  name: "Test view",
  description: "this is test view",
  global: {
    classes: {
      text: {
        fontSize: "40px",
      },
      subtext: {
        fontSize: "20px",
      },
      card: {
        background: "#ffffff",
        borderRadius: "20px",
        padding: "20px",
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
          tag: "div",
          name: "c2",
          content: "container 2",
          classes: ["subtext", "card"],
          style: {
            background: "blue",
          },
          childs: [
            {
              tag: "h1",
              name: "c2",
              content: "Header",
              classes: ["card"],
              style: {
                background: "green",
                color: "red",
              },
              childs: [],
            },
          ],
        },
      ],
    },
  ],
};
