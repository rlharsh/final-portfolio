const NavigationSets = [
  {
    name: "professional",
    data: [
      {
        title: "_summary.md",
      },
      {
        title: "_skills.md",
      },
      {
        title: "_experience.md",
      },
      {
        title: "_philosophy.md",
      },
      {
        title: "_goals.md",
      },
      {
        title: "_acheivements.md",
      },
    ],
  },
  {
    name: "personal",
    data: [
      {
        title: "_fishing.md",
      },
    ],
  },
];

const informationData = [
  {
    title: "_summary.md",
    text: "This is my professional summary, and I love computer programming!",
  },
  {
    title: "_skills.md",
    text: "These are my skills.",
  },
  {
    title: "_experience.md",
    text: "This is my experience.",
  },
  {
    title: "_philosophy.md",
    text: "This is my working philosophy!",
  },
  {
    title: "_goals.md",
    text: "These are my goals!",
  },
  {
    title: "_acheivements.md",
    text: "These are my acheivements",
  },
  {
    title: "_experience.md",
    text: "This is my experience.",
  },
  {
    title: "_fishing.md",
    text: "I like fish.",
  },
];

const informationDataMap = new Map(informationData.map((item) => [item.title, item.text]));

export const DataSections = NavigationSets.map((set) => ({
  name: set.name,
  data: set.data.map((item) => ({
    title: item.title,
    text: informationDataMap.get(item.title),
  })),
}));
