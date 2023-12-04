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
    ],
  },
  {
    name: "personal",
    data: [
      {
        title: "_p.summary.md",
      },
      {
        title: "_p.philosophy.md",
      },
      {
        title: "_p.culture.md",
      },
    ],
  },
  {
    name: "hobbies",
    data: [
      {
        title: "_gaming.md",
      },
      {
        title: "_programming.md",
      },
      {
        title: "_nature.md",
      },
    ],
  },
];

export const DataSections = NavigationSets.map((set) => ({
  name: set.name,
  data: set.data.map((item) => ({
    title: item.title,
  })),
}));
