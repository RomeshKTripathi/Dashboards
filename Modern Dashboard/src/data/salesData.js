export const salesChart = {
  name: "Monthly Sales Data",
  data: [
    {
      name: "January",
      sales: 12000,
      returns: 500,
      revenue: 11500,
      customers: 200,
    },
    {
      name: "February",
      sales: 15000,
      returns: 700,
      revenue: 14300,
      customers: 220,
    },
    {
      name: "March",
      sales: 18000,
      returns: 600,
      revenue: 17400,
      customers: 250,
    },
    {
      name: "April",
      sales: 14000,
      returns: 400,
      revenue: 13600,
      customers: 210,
    },
    {
      name: "May",
      sales: 16000,
      returns: 500,
      revenue: 15500,
      customers: 230,
    },
    {
      name: "June",
      sales: 17000,
      returns: 550,
      revenue: 16450,
      customers: 240,
    },
    {
      name: "July",
      sales: 20000,
      returns: 600,
      revenue: 19400,
      customers: 270,
    },
  ],
  options: {
    key: "name",
    datakey: [
      { key: "sales", color: "#4285F4" },
      { key: "returns", color: "#EA4335" },
      { key: "revenue", color: "#34A853" },
      { key: "customers", color: "#FBBC05" },
    ],
  },
};
