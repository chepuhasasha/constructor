export default {
  ID: 1,
  ownerID: 1,
  name: "Теставая страница",
  description: "Описание тестовой страницы",
  words: ["слово 1", "слово 2"],
  layout: [
    {
      type: "Container",
      props: {},
      style: {
        background: "rgba(255,255,0, 0.5)",
      },
      childs: [],
    },
  ],
  history: [
    {
      user: {
        ID: 1,
        name: "Иванов И.И.",
        role: "Дизайнер",
      },
      pageID: 1,
      userID: 1,
      timestamp: 123223,
      code: "",
    },
  ],
};
