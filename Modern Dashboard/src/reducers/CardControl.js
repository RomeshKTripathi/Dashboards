export const initialState = {};

export function cardReducer(state, action) {
  switch (action.type) {
    case "toggle": {
      return state.map((chart) => {
        if (chart.name === action.name) {
          return { ...chart, visible: !chart.visible };
        }
        return chart;
      });
    }
  }
}
