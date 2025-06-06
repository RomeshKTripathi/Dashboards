const covidData = [
  {
    name: "Day 1",
    newCases: 1200,
    activeCases: 15000,
    recoveries: 800,
    deaths: 20,
  },
  {
    name: "Day 2",
    newCases: 1300,
    activeCases: 15700,
    recoveries: 700,
    deaths: 25,
  },
  {
    name: "Day 3",
    newCases: 1100,
    activeCases: 16100,
    recoveries: 900,
    deaths: 22,
  },
  {
    name: "Day 4",
    newCases: 1000,
    activeCases: 16200,
    recoveries: 950,
    deaths: 18,
  },
  {
    name: "Day 5",
    newCases: 1400,
    activeCases: 16900,
    recoveries: 800,
    deaths: 30,
  },
  {
    name: "Day 6",
    newCases: 1500,
    activeCases: 17500,
    recoveries: 1000,
    deaths: 35,
  },
  {
    name: "Day 7",
    newCases: 1200,
    activeCases: 17700,
    recoveries: 1100,
    deaths: 28,
  },
];

export const covidChart = {
  name: "Covid Data",
  data: covidData,
  options: {
    key: "name",
    datakey: [
      { key: "newCases", color: "#b8042b" },
      { key: "activeCases", color: "#a902b5" },
      { key: "recoveries", color: "#00d62b" },
      { key: "deaths", color: "#000000" },
    ],
  },
};
