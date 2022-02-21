export default {
  id: 1,
  type: "json",
  name: "Test view",
  description: "this is test view",
  layout: [
    {
      tag: "div",
      name: "c1",
      content: "container 1",
      style: {
        background: "red",
      },
      childs: [
        {
          tag: "div",
          name: "c2",
          content: "container 2",
          style: {
            background: "blue",
          },
          childs: [],
        },
      ],
    },
    {
      tag: "div",
      name: "c1",
      content: "container 1",
      style: {
        background: "red",
      },
      childs: [
        {
          tag: "div",
          name: "c2",
          content: "container 2",
          style: {
            background: "blue",
          },
          childs: [],
        },
      ],
    },
  ],
};
