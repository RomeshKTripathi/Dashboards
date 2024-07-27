export const temperatureChart = {
  name: "Daily Temperature Readings",
  data: [
    {
      name: "Day 1",
      maxTemp: 25,
      minTemp: 15,
      avgTemp: 20,
      humidity: 55,
    },
    {
      name: "Day 2",
      maxTemp: 30,
      minTemp: 18,
      avgTemp: 24,
      humidity: 60,
    },
    {
      name: "Day 3",
      maxTemp: 28,
      minTemp: 16,
      avgTemp: 22,
      humidity: 58,
    },
    {
      name: "Day 4",
      maxTemp: 32,
      minTemp: 20,
      avgTemp: 26,
      humidity: 62,
    },
    {
      name: "Day 5",
      maxTemp: 27,
      minTemp: 14,
      avgTemp: 20.5,
      humidity: 57,
    },
    {
      name: "Day 6",
      maxTemp: 29,
      minTemp: 17,
      avgTemp: 23,
      humidity: 59,
    },
    {
      name: "Day 7",
      maxTemp: 31,
      minTemp: 19,
      avgTemp: 25,
      humidity: 61,
    },
  ],
  options: {
    key: "name",
    datakey: [
      { key: "maxTemp", color: "#FF5733" },
      { key: "minTemp", color: "#33CFFF" },
      { key: "avgTemp", color: "#FFB833" },
      { key: "humidity", color: "#336EFF" },
    ],
  },
};
