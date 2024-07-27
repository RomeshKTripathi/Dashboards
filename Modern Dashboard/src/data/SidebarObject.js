import home from "../assets/Home.svg";
import stats from "../assets/stats.svg";
import calander from "../assets/calander.svg";
import chat from "../assets/chat.svg";
import setting from "../assets/setting.svg";
import support from "../assets/support.svg";
import chart from "../assets/chart.svg";
export const links = [
  {
    id: 1,
    icon: home,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: chart,
    text: "Charts",
    links: [
      {
        id: 2.1,
        text: "Area Chart",
      },
      {
        id: 2.2,
        text: "Line Chart",
      },
      {
        id: 2.3,
        text: "Bar Chart",
      },
    ],
  },
  {
    id: 3,
    icon: stats,
    text: "Statistic",
    links: [
      {
        id: 3.1,
        text: "Some stats",
      },
      {
        id: 3.2,
        text: "Sales Stats",
      },
    ],
  },
  {
    id: 4,
    icon: calander,
    text: "calander",
  },
  {
    id: 5,
    icon: chat,
    text: "messages",
  },
  {
    id: 6,
    icon: setting,
    text: "Settings",
    links: [
      {
        id: 6.1,
        text: "user settings",
      },

      {
        id: 6.3,
        text: "Theme Setting",
      },
    ],
  },
  {
    id: 7,
    icon: support,
    text: "Support",
  },
];
