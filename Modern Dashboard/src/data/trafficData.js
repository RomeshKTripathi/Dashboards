export const trafficChart = {
  name: "Weekly Website Traffic",
  data: [
    {
      name: "Week 1",
      pageViews: 8000,
      uniqueVisitors: 5000,
      bounceRate: 45,
      averageSessionDuration: 300,
    },
    {
      name: "Week 2",
      pageViews: 7500,
      uniqueVisitors: 4800,
      bounceRate: 50,
      averageSessionDuration: 290,
    },
    {
      name: "Week 3",
      pageViews: 9000,
      uniqueVisitors: 5200,
      bounceRate: 40,
      averageSessionDuration: 310,
    },
    {
      name: "Week 4",
      pageViews: 7000,
      uniqueVisitors: 4500,
      bounceRate: 55,
      averageSessionDuration: 280,
    },
    {
      name: "Week 5",
      pageViews: 9500,
      uniqueVisitors: 5300,
      bounceRate: 42,
      averageSessionDuration: 320,
    },
    {
      name: "Week 6",
      pageViews: 8200,
      uniqueVisitors: 5100,
      bounceRate: 47,
      averageSessionDuration: 305,
    },
    {
      name: "Week 7",
      pageViews: 7800,
      uniqueVisitors: 4950,
      bounceRate: 50,
      averageSessionDuration: 295,
    },
  ],
  options: {
    key: "name",
    datakey: [
      { key: "pageViews", color: "#4285F4" },
      { key: "uniqueVisitors", color: "#34A853" },
      { key: "bounceRate", color: "#EA4335" },
      { key: "averageSessionDuration", color: "#FBBC05" },
    ],
  },
};
